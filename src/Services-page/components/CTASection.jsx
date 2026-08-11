import buildingImage from "./building.jpeg";
import logo from "./Lordpart-logo .png";

function CTASection() {
  return (
    <section
      className="relative min-h-[230px] rounded-2xl border border-[#c8a33a]
                 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${buildingImage})` }}
    >
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 min-h-[230px] flex items-center justify-between px-4 sm:px-6 md:px-10 py-8">

        <div className="max-w-xl">

          <p className="text-[#d5ad3d] text-sm font-bold uppercase mb-5">
            Ready to Build the Future?
          </p>

          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-5">
            Let's Build Something
            <br />
            <span className="text-[#d5ad3d]">
              Extraordinary Together.
            </span>
          </h2>

          <p className="text-sm md:text-base text-gray-200 font-medium max-w-md leading-relaxed">
            Partner with LORDPART POINT and experience the
            difference of working with a team that delivers.
          </p>

        </div>

        <div className="hidden md:flex items-center justify-center pr-8">
          <img
            src={logo}
            alt="Lordpart Point Global Limited"
            className="w-40 lg:w-48 object-contain"
          />
        </div>

      </div>
    </section>
  );
}

export default CTASection;