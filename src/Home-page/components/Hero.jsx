import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import hero from "../assets/images/hero.jpeg";
import Reveal from "../../Components/animations/Reveal";
import Parallax from "../../Components/animations/Parallax";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      {/* Parallax backdrop — drifts slowly as the hero scrolls away */}
      <Parallax speed={0.18} className="absolute -inset-y-20 inset-x-0 z-0">
        <img
          src={hero}
          alt=""
          aria-hidden="true"
          className="h-full w-full scale-110 object-cover object-center"
        />
      </Parallax>

      {/* Overlays: darken the image and fade it out to the right for readable text */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-28 sm:px-8 lg:px-12 lg:pt-40 lg:pb-36">
        <div className="max-w-2xl">
          <Reveal direction="down" distance={18} duration={800}>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#D4AF37] sm:text-xs">
              Building The Future
            </p>
          </Reveal>

          <Reveal direction="up" distance={36} delay={140} duration={950} blur>
            <h1 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Building the future with
              <br className="hidden sm:block" />{" "}
              <span className="lp-shimmer-text">precision</span> and excellence
            </h1>
          </Reveal>

          {/* Gold accent rule that sweeps open */}
          <Reveal direction="left" distance={44} delay={420} duration={950} className="mt-7">
            <div className="flex h-1 w-40 overflow-hidden rounded-full bg-white/15">
              <span className="h-full w-2/3 bg-[#D4AF37]" />
            </div>
          </Reveal>

          <Reveal direction="up" distance={28} delay={340} duration={880}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg">
              We deliver innovative construction, infrastructure, and renovation
              solutions with uncompromising quality, safety, and craftsmanship.
            </p>
          </Reveal>

          {/* CTAs — both routed */}
          <Reveal
            direction="up"
            distance={24}
            delay={520}
            duration={840}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-7 py-3.5 font-semibold text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#e0bb52] hover:shadow-[0_16px_34px_-12px_rgba(212,175,55,0.75)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Our Services
              <FiArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:text-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              View Projects
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
          Scroll
        </span>
        <span className="h-10 w-px overflow-hidden bg-white/15">
          <span className="lp-scroll-cue block h-full w-full bg-[#D4AF37]" />
        </span>
      </div>

      {/* Bottom gold hairline to tie into the Features strip below */}
      <div
        className="absolute bottom-0 left-0 h-px w-full bg-[#D4AF37]/40"
        aria-hidden="true"
      />
    </section>
  );
}

export default Hero;
