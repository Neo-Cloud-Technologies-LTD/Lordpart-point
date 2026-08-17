import { Link } from "react-router-dom";
import hero from "../assets/hero.jpeg";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
        <section
            className="relative h-screen bg-cover bg-center border border-[#D4AF37]"
            style={{
            backgroundImage: `url(${hero})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8 lg:px-12">
                <div className="max-w-2xl text-white mt-16">
                    <p className="text-[#D4AF37] font-bold uppercase tracking-wider mb-6">
                        About Us
                    </p>

                    <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-8 uppercase">
                        Building Nigeria's <br/>
                        Future With Precision.
                    </h1>

                    <p className="text-lg leading-8 text-gray-200 mb-10 font-bold">
                        LORDPART POINT Global Limited is a forward thinking construction
                        company dedicated to delivering world class engineering,
                        infrastructure, commercial and residential developments through
                        innovation, quality craftsmanship, and unwavering integrity.
                    </p>

                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 bg-[#D4AF37] px-8 py-4 rounded-xl text-white font-semibold cursor-pointer transition hover:bg-[#e0bb52]"
                    >
                        View Our Projects
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-[#D4AF37]"></div>
        </section>
  );
}

export default Hero;