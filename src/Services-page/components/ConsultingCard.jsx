import consultingImage from "./consulting.jpeg";
import { UsersRound } from "lucide-react";

function ConsultingCard() {
  return (
    <section
      className="relative min-h-[220px] border border-[#c8a33a] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${consultingImage})` }}
    >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
<div className="relative z-10 min-h-[220px] flex items-center px-4 md:px-8 md:px-10">

  <div className="flex items-start gap-5">

    {/* Gold icon */}
    <div className="shrink-0 mt-1">
      <div className="w-16 h-16 rounded-2xl border border-[#c8a33a] flex items-center justify-center">
        <UsersRound
          size={38}
          strokeWidth={1.7}
          className="text-[#d5ad3d]"
        />
      </div>
    </div>

    {/* Text */}
    <div className="max-w-md">

      <h2 className="text-xl md:text-2xl font-bold mb-5">
        Consulting Services
      </h2>

      <p className="text-sm md:text-base leading-relaxed text-gray-100 mb-5">
        Strategic advice and expert insights to
        help you make informed decisions and
        achieve your goals.
      </p>

      <button className="text-[#d5ad3d] text-lg font-bold flex items-center gap-3 hover:gap-5 transition-all">
        Learn More
        <span className="text-2xl">→</span>
      </button>

    </div>

  </div>
</div>

    </section>
  );
}

export default ConsultingCard;