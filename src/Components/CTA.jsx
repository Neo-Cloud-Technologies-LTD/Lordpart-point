import ctaImage from "../assets/cta image.jpeg";
import logo from "../assets/lordpart point logo.png";
import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section
      className="relative h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${ctaImage})`,
      }}
    >
      {/* The Yellow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-yellow-200/20"></div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-8 lg:px-12 flex items-center">
        <div className="max-w-3xl">
          <div className="flex items-center mb-7">
            <img
              src={logo}
              alt="Lordpart Point Logo"
              className="h-12 md:h-14 w-auto"
            />
            <div className="block  text-white font-bold">
              <h1 className="text-xl">LORDPART POINT</h1>
              <p className="font-700">Global Limited</p>
            </div>

          </div>

          <h2 className="text-white text-xl md:text-4xl font-semibold leading-tight mb-6">
            Let's Build Something <br />
            Extraordinary Together
          </h2>
        </div>
      </div>
    </section>
  );
}

export default CTA;