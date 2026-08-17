import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import hero from "../assets/images/hero.jpeg";

function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlays: darken the image and fade it out to the right for readable text */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-28 sm:px-8 lg:px-12 lg:pt-40 lg:pb-36">
        <div className="max-w-2xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#D4AF37] sm:text-xs">
            Building The Future
          </p>

          <h1 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            Building the future with
            <br className="hidden sm:block" />{" "}
            <span className="text-[#D4AF37]">precision</span> and excellence
          </h1>

          {/* Gold accent rule */}
          <div className="mt-7 flex h-1 w-40 overflow-hidden rounded-full bg-white/15">
            <span className="h-full w-2/3 bg-[#D4AF37]" />
          </div>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg">
            We deliver innovative construction, infrastructure, and renovation
            solutions with uncompromising quality, safety, and craftsmanship.
          </p>

          {/* CTAs — both routed */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-7 py-3.5 font-semibold text-black shadow-lg transition hover:bg-[#e0bb52] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Our Services
              <FiArrowRight size={18} />
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              View Projects
            </Link>
          </div>
        </div>
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
