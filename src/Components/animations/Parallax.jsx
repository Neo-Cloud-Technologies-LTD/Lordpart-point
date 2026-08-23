import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Drifts its children vertically as the section scrolls past, giving hero and
 * band backgrounds a sense of depth. Uses rAF-throttled transforms only, so it
 * never triggers layout.
 *
 * @param {object} props
 * @param {number} [props.speed]  0 = static, 0.3 = pronounced drift.
 */
function Parallax({
  speed = 0.15,
  as: Tag = "div",
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return undefined;

    let frame = 0;

    const update = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Skip work when the element is nowhere near the viewport.
      if (rect.bottom < -200 || rect.top > viewportHeight + 200) return;

      // -1 (below the fold) → 1 (scrolled past the top).
      const relative =
        (viewportHeight / 2 - (rect.top + rect.height / 2)) / viewportHeight;

      setOffset(relative * speed * 100);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(0, ${offset.toFixed(2)}px, 0)`,
        willChange: "transform",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Parallax;
