import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../../Components/animations/Reveal";
import buildingImage from "../assets/building.jpeg";
import logo from "../assets/Lordpart-logo .png";

function CTASection() {
  return (
    <section
      className="group relative w-full overflow-hidden border-t border-[#c8a33a]/25 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${buildingImage})` }}
    >
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-linear-to-r from-[#0A0D14] via-[#0A0D14]/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[320px] max-w-7xl flex-col items-start justify-between gap-10 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:px-12">
        <div className="max-w-2xl">
          <Reveal direction="up" distance={22}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d5ad3d]">
              Ready to Build the Future?
            </p>
          </Reveal>

          <Reveal direction="up" distance={32} delay={130} duration={860}>
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
              Let&apos;s Build Something
              <br />
              <span className="lp-shimmer-text">Extraordinary Together.</span>
            </h2>
          </Reveal>

          <Reveal direction="up" distance={26} delay={280}>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-200 sm:text-base">
              Partner with LORDPART POINT and experience the difference of working
              with a team that delivers.
            </p>
          </Reveal>

          <Reveal direction="up" distance={20} delay={420}>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#d5ad3d] px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#e0bb52] hover:shadow-[0_14px_30px_-10px_rgba(213,173,61,0.7)]"
            >
              Start a Conversation
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <Reveal
          direction="right"
          distance={40}
          delay={300}
          duration={900}
          scale={0.9}
          className="hidden shrink-0 lg:block"
        >
          <img
            src={logo}
            alt="Lordpart Point Global Limited"
            className="lp-float w-40 object-contain lg:w-48"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default CTASection;
