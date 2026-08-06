import Navbar from "./Navbar";
import hero from "../assets/images/hero.jpeg";
import { FiSearch } from "react-icons/fi";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <Navbar />

      <div className="absolute z-20 px-12 pt-32 bg-gradient-to-r from-pink-400/25 to transparent inset-0">

        <div className="max-w-[650px]">
            <div className="w-[420px] mb-5 flex justify-center">
                <p className="uppercase tracking-[5px] text-yellow-400 text-xs font-semibold text-center">
                Building The Future
                </p>
            </div>
        
          <h1 className="text-[30px] font-bold leading-10 text-white">
            BUILDING THE FUTURE WITH
            <br />
            PRECISION AND
            <br />
            EXCELLENCE
          </h1>

          <p className="mt-5 text-[15px] leading-[22px] text-gray-200  max-w-[500px]">
            We deliver innovative construction
            <br />
            infrastructure, and renovation solutions
            <br />
            with uncompromising quality, safety, and
            <br />
            craftsmanship.
          </p>

          <button className="mt-8 bg-yellow-500 hover:bg-yellow-400 transition px-6 py-3 rounded-xl border-2 border-black font-semibold text-black flex items-center gap-3 shadow-md">
            Our Services
            <FiSearch size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
export default Hero;