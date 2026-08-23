import { useEffect, useRef, useState } from "react";
import useInView from "./useInView";

const NUMBER_PATTERN = /-?\d+(?:\.\d+)?/;

// Fast start, soft landing.
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Counts a stat up from zero when it scrolls into view. Works with decorated
 * values such as "350+", "98%" or "10+" — the prefix/suffix is preserved.
 *
 * @param {object} props
 * @param {string|number} props.value   Final value, e.g. "350+".
 * @param {number} [props.duration]     Count duration in ms.
 * @param {number} [props.delay]        Delay before counting starts, in ms.
 */
function CountUp({
  value,
  duration = 1800,
  delay = 0,
  as: Tag = "span",
  className = "",
  ...rest
}) {
  const raw = String(value ?? "");
  const match = raw.match(NUMBER_PATTERN);

  const target = match ? parseFloat(match[0]) : null;
  const decimals = match && match[0].includes(".") ? match[0].split(".")[1].length : 0;
  const prefix = match ? raw.slice(0, match.index) : "";
  const suffix = match ? raw.slice(match.index + match[0].length) : "";

  const [ref, inView] = useInView({ threshold: 0.3 });
  const [current, setCurrent] = useState(0);
  const frameRef = useRef(0);
  const timerRef = useRef(0);

  useEffect(() => {
    if (!inView || target === null) return undefined;

    if (prefersReducedMotion()) {
      setCurrent(target);
      return undefined;
    }

    const start = () => {
      const startedAt = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        setCurrent(target * easeOutExpo(progress));
        if (progress < 1) frameRef.current = requestAnimationFrame(tick);
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    timerRef.current = window.setTimeout(start, delay);

    return () => {
      window.clearTimeout(timerRef.current);
      cancelAnimationFrame(frameRef.current);
    };
  }, [inView, target, duration, delay]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {target === null
        ? raw
        : `${prefix}${current.toFixed(decimals)}${suffix}`}
    </Tag>
  );
}

export default CountUp;
