import useInView from "./useInView";

/**
 * The signature gold accent rule used under section headings. The gold fill
 * sweeps out from the left when the rule scrolls into view.
 *
 * @param {object} props
 * @param {number} [props.width]  Track width in px.
 * @param {number} [props.delay]  Stagger in ms.
 * @param {string} [props.color]  Gold token for the page (pages use #D4AF37 / #E2B755).
 */
function GoldRule({
  width = 160,
  delay = 120,
  duration = 900,
  color = "#D4AF37",
  className = "",
}) {
  const [ref, inView] = useInView({ threshold: 0.4 });

  return (
    <div
      ref={ref}
      style={{ width }}
      className={`flex h-1 overflow-hidden rounded-full bg-white/10 ${className}`}
      aria-hidden="true"
    >
      <span
        className="h-full rounded-full"
        style={{
          backgroundColor: color,
          width: inView ? "66%" : "0%",
          boxShadow: inView ? `0 0 14px ${color}80` : "none",
          transition: `width ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, box-shadow ${duration}ms ease ${delay}ms`,
        }}
      />
    </div>
  );
}

export default GoldRule;
