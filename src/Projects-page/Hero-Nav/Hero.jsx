import heroBg from "../hero/hero-bg.jpg";
import Reveal from "../../Components/animations/Reveal";
import Parallax from "../../Components/animations/Parallax";

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Full-width backdrop with a slow parallax drift */}
      <Parallax speed={0.16} className="absolute -inset-y-20 inset-x-0 z-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full scale-110 object-cover"
        />
      </Parallax>

      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent"
        aria-hidden="true"
      />

      {/* Copy — constrained to the shared container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-20 sm:px-8 lg:px-12 lg:pt-44 lg:pb-24">
        <div className="max-w-2xl">
          <Reveal direction="down" distance={18} duration={800}>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#D4AF37] sm:text-xs">
              Our Projects
            </p>
          </Reveal>

          <Reveal direction="up" distance={36} delay={140} duration={950} blur>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Engineering Excellence
              <br />
              <span className="lp-shimmer-text">Delivering Impact.</span>
            </h1>
          </Reveal>

          <Reveal direction="left" distance={44} delay={420} duration={950} className="mt-7">
            <div className="flex h-1 w-40 overflow-hidden rounded-full bg-white/15">
              <span className="h-full w-2/3 bg-[#D4AF37]" />
            </div>
          </Reveal>

          <Reveal direction="up" distance={28} delay={320} duration={880}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg">
              From landmark developments to critical infrastructure, our projects
              reflect our commitment to quality, innovation, and sustainable
              progress.
            </p>
          </Reveal>

          <Reveal direction="up" distance={22} delay={520}>
            <a
              href="#project-gallery"
              className="group mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-7 py-3.5 font-semibold text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#e0bb52] hover:shadow-[0_16px_34px_-12px_rgba(212,175,55,0.75)]"
            >
              Explore Our Work
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Hero;
