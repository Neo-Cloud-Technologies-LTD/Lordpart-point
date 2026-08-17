import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import buildingImage from "../assets/building.jpeg";
import logo from "../assets/Lordpart-logo .png";

function CTASection() {
  return (
    <section
      className="relative w-full overflow-hidden border-t border-[#c8a33a]/25 bg-cover bg-center"
      style={{ backgroundImage: `url(${buildingImage})` }}
    >
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-linear-to-r from-[#0A0D14] via-[#0A0D14]/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[320px] max-w-7xl flex-col items-start justify-between gap-10 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:px-12">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d5ad3d]">
            Ready to Build the Future?
          </p>

          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            Let&apos;s Build Something
            <br />
            <span className="text-[#d5ad3d]">Extraordinary Together.</span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-200 sm:text-base">
            Partner with LORDPART POINT and experience the difference of working
            with a team that delivers.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#d5ad3d] px-7 py-3.5 font-semibold text-black transition hover:bg-[#e0bb52]"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="hidden shrink-0 lg:block">
          <img
            src={logo}
            alt="Lordpart Point Global Limited"
            className="w-40 object-contain lg:w-48"
          />
        </div>
      </div>
    </section>
  );
}

export default CTASection;
