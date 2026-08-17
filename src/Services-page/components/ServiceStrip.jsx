import { Link } from "react-router-dom";

/**
 * Full-bleed service band: the background image spans the whole viewport width
 * while the copy stays inside the same max-w-7xl container used site-wide.
 *
 * @param {object}    props
 * @param {string}    props.image        Background image (edge-to-edge).
 * @param {ReactNode} props.icon         Gold icon rendered above the title.
 * @param {string}    props.title        Service name.
 * @param {string}    props.description  Short supporting copy.
 * @param {"left"|"right"} [props.align] Which side the copy sits on.
 * @param {string}    [props.to]         Route for the "Learn More" link.
 * @param {string}    [props.className]  Extra classes for the outer section.
 */
function ServiceStrip({
  image,
  icon,
  title,
  description,
  align = "left",
  to = "/contact",
  className = "",
}) {
  const alignRight = align === "right";

  return (
    <section
      className={`group relative w-full overflow-hidden border-t border-[#c8a33a]/25 ${className}`}
    >
      {/* Full-width backdrop */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Readability masks */}
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <div
        className={`absolute inset-0 ${
          alignRight
            ? "bg-linear-to-l from-[#0A0D14] via-[#0A0D14]/65 to-transparent"
            : "bg-linear-to-r from-[#0A0D14] via-[#0A0D14]/65 to-transparent"
        }`}
        aria-hidden="true"
      />

      {/* Copy — constrained to the shared page container */}
      <div
        className={`relative z-10 mx-auto flex min-h-[320px] max-w-7xl items-center px-6 py-14 sm:px-8 lg:px-12 lg:min-h-[360px] ${
          alignRight ? "justify-start lg:justify-end" : "justify-start"
        }`}
      >
        <div className="max-w-xl">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-[#c8a33a]/70 bg-black/40 backdrop-blur-sm">
            {icon}
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
            {title}
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-gray-200 sm:text-base">
            {description}
          </p>

          <Link
            to={to}
            className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E2B755] transition-colors hover:text-white"
          >
            Learn More
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceStrip;
