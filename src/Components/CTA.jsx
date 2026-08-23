import ctaImage from "../assets/cta image.jpeg";
import logo from "../assets/lordpart point logo.png";
import Reveal from "./animations/Reveal";

function CTA() {
  return (
    <section
      className="relative h-[400px] overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${ctaImage})` }}
    >
      {/* The Yellow Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/60 to-yellow-200/20"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8 lg:px-12">
        <div className="max-w-3xl">
          <Reveal direction="left" distance={34} duration={880}>
            <div className="mb-7 flex items-center">
              <img
                src={logo}
                alt="Lordpart Point Logo"
                className="lp-float h-12 w-auto md:h-14"
              />

              <div className="block font-bold text-white">
                <h1 className="text-xl">LORDPART POINT</h1>
                <p className="font-700">Global Limited</p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" distance={30} delay={180} duration={900} blur>
            <h2 className="mb-6 text-xl font-semibold leading-tight text-white md:text-4xl">
              Let&apos;s Build Something <br />
              <span className="lp-shimmer-text">Extraordinary Together</span>
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default CTA;
