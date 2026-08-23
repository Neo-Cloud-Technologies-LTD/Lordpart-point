import { Link } from "react-router-dom";
import hero from "../assets/hero.jpeg";
import { ArrowRight } from "lucide-react";
import Reveal from "./animations/Reveal";
import Parallax from "./animations/Parallax";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden border border-[#D4AF37] bg-black">
      {/* Parallax backdrop */}
      <Parallax speed={0.18} className="absolute -inset-y-20 inset-x-0 z-0">
        <img
          src={hero}
          alt=""
          aria-hidden="true"
          className="h-full w-full scale-110 object-cover object-center"
        />
      </Parallax>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8 lg:px-12">
        <div className="mt-16 max-w-2xl text-white">
          <Reveal direction="down" distance={18} duration={800}>
            <p className="mb-6 font-bold uppercase tracking-wider text-[#D4AF37]">
              About Us
            </p>
          </Reveal>

          <Reveal direction="up" distance={34} delay={140} duration={950} blur>
            <h1 className="mb-8 text-2xl font-bold uppercase leading-tight md:text-3xl">
              Building Nigeria&apos;s <br />
              Future With <span className="lp-shimmer-text">Precision.</span>
            </h1>
          </Reveal>

          <Reveal direction="up" distance={28} delay={320} duration={880}>
            <p className="mb-10 text-lg font-bold leading-8 text-gray-200">
              LORDPART POINT Global Limited is a forward thinking construction
              company dedicated to delivering world class engineering,
              infrastructure, commercial and residential developments through
              innovation, quality craftsmanship, and unwavering integrity.
            </p>
          </Reveal>

          <Reveal direction="up" distance={22} delay={480}>
            <Link
              to="/projects"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e0bb52] hover:shadow-[0_16px_34px_-12px_rgba(212,175,55,0.75)]"
            >
              View Our Projects
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
          Scroll
        </span>
        <span className="h-10 w-px overflow-hidden bg-white/15">
          <span className="lp-scroll-cue block h-full w-full bg-[#D4AF37]" />
        </span>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-[#D4AF37]" />
    </section>
  );
}

export default Hero;
