import sustainabilityImage from "./sustainability.jpeg";
import { Flower2 } from "lucide-react";

function SustainabilityCard() {
  return (
    <section
      className="relative min-h-[220px] border border-[#c8a33a] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${sustainabilityImage})` }}
    >

      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
<div className="relative z-10 min-h-[220px] flex items-center justify-end px-4 sm:px-6 md:px-10">

  <div className="flex items-start gap-5 max-w-xl">

    {/* Gold icon */}
    <div className="shrink-0 mt-1">
      <div className="w-16 h-16 rounded-2xl border border-[#c8a33a] flex items-center justify-center">
        <Flower2
          size={38}
          strokeWidth={1.7}
          className="text-[#d5ad3d]"
        />
      </div>
    </div>

    {/* Text */}
    <div className="max-w-md">

      <h2 className="text-xl md:text-2xl font-bold mb-5">
        Sustainability Solutions
      </h2>

      <p className="text-sm md:text-base leading-relaxed text-gray-100 mb-5">
        Creating sustainable solutions that protect the environment
        and build a better tomorrow.
      </p>

      <div className="flex justify-end">
        <button className="text-[#d5ad3d] text-lg font-bold flex items-center gap-3 hover:gap-5 transition-all">
          Learn More
          <span className="text-2xl">→</span>
        </button>
      </div>

    </div>

  </div>
</div>

    </section>
  );
}

export default SustainabilityCard;