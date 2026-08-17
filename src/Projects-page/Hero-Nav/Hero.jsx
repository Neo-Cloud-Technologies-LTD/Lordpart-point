import heroBg from "../hero/hero-bg.jpg";

function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-width backdrop */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent"
        aria-hidden="true"
      />

      {/* Copy — constrained to the shared container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-20 sm:px-8 lg:px-12 lg:pt-44 lg:pb-24">
        <div className="max-w-2xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#D4AF37] sm:text-xs">
            Our Projects
          </p>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            Engineering Excellence
            <br />
            <span className="text-[#D4AF37]">Delivering Impact.</span>
          </h1>

          <div className="mt-7 flex h-1 w-40 overflow-hidden rounded-full bg-white/15">
            <span className="h-full w-2/3 bg-[#D4AF37]" />
          </div>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg">
            From landmark developments to critical infrastructure, our projects
            reflect our commitment to quality, innovation, and sustainable
            progress.
          </p>

          <a
            href="#project-gallery"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-7 py-3.5 font-semibold text-black shadow-lg transition hover:bg-[#e0bb52]"
          >
            Explore Our Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
