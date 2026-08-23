import useInView from "./useInView";

/**
 * Wraps any content and fades/slides it into place the first time it scrolls
 * into view. All motion is CSS driven (see `.lp-reveal` in src/index.css), so it
 * stays buttery smooth and automatically respects `prefers-reduced-motion`.
 *
 * @param {object} props
 * @param {keyof JSX.IntrinsicElements} [props.as]  Rendered element (default "div").
 * @param {"up"|"down"|"left"|"right"|"none"} [props.direction] Where it travels from.
 * @param {number}  [props.delay]     Stagger in ms.
 * @param {number}  [props.duration]  Animation length in ms.
 * @param {number}  [props.distance]  Travel distance in px.
 * @param {number}  [props.scale]     Start scale, e.g. 0.94 for a subtle zoom-in.
 * @param {boolean} [props.blur]      Start slightly out of focus.
 * @param {boolean} [props.once]      Animate only the first time (default true).
 * @param {number}  [props.threshold] Visibility ratio needed to trigger.
 */
function Reveal({
  as: Tag = "div",
  direction = "up",
  delay = 0,
  duration = 700,
  distance = 28,
  scale,
  blur = false,
  once = true,
  threshold = 0.15,
  className = "",
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useInView({ once, threshold });

  const offsets = {
    up: { "--lp-y": `${distance}px` },
    down: { "--lp-y": `-${distance}px` },
    left: { "--lp-x": `-${distance}px` },
    right: { "--lp-x": `${distance}px` },
    none: {},
  };

  return (
    <Tag
      ref={ref}
      className={`lp-reveal${inView ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={{
        "--lp-delay": `${delay}ms`,
        "--lp-duration": `${duration}ms`,
        ...(offsets[direction] ?? offsets.up),
        ...(scale ? { "--lp-scale": scale } : null),
        ...(blur ? { "--lp-blur": "12px" } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
