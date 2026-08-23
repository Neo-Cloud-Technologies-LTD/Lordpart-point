import buildingImage from '../../Services-page/public/your-building-image.jpeg';
import Reveal from '../../Components/animations/Reveal';
import Parallax from '../../Components/animations/Parallax';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#0A0D14] text-white flex flex-col font-sans select-none antialiased overflow-hidden">

      {/* BACKGROUND GRAPHICS: Full-bleed modern architecture asset with slow parallax drift */}
      <div className="absolute inset-0 z-0">
        <Parallax speed={0.12} className="absolute -inset-y-16 inset-x-0">
          <img
            src={buildingImage}
            alt="Lordpart Point Global Corporate Building"
            className="h-full w-full scale-105 object-cover object-right lg:object-center"
          />
        </Parallax>
        {/* HEAVY GRADIENT OVERLAY: Mask for left panel text visibility */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0A0D14] via-[#0A0D14]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* FIGMA DECORATIVE ABSTRACT VECTORS: SVG Geometric Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-40">
        {/* Subtle decorative circular arc ring matching the background overlay */}
        <svg className="absolute -left-25 top-[10%] w-150 h-150 lp-float" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#E2B755" strokeWidth="0.1" strokeDasharray="1 2" />
        </svg>
        {/* Vertical alignment design line visible on the right section block */}
        <div className="absolute right-[20%] top-[40%] bottom-0 w-px bg-[#E2B755]/30"></div>
      </div>

      {/* TYPOGRAPHY CONTENT PANEL (the shared navbar is rendered by <Layout />) */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-start px-8 md:px-16 lg:pl-24 w-full max-w-[1902px] mx-auto pt-36 pb-16">

        <Reveal as="span" direction="down" distance={18} duration={800} className="block mb-8">
          <span className="text-[#E2B755] text-xs font-bold tracking-[0.3em] uppercase">
            OUR SERVICES
          </span>
        </Reveal>

        <Reveal direction="up" distance={34} delay={140} duration={900} blur>
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.2] mb-8 max-w-[750px]">
            Engineering Solutions. <br />
            <span className="text-[#E2B755]">Built for impact.</span>
          </h1>
        </Reveal>

        <Reveal direction="up" distance={26} delay={320} duration={860}>
          <p className="w-full max-w-145 text-gray-200 text-sm md:text-base leading-relaxed font-normal mb-10">
            From concept to completion, we offer end-to-end engineering
            and construction services tailored to meet your unique needs
            and exceed your expectation.
          </p>
        </Reveal>

        {/* FIGMA ACCENT: The Gold and Gray Decorative Layout Line */}
        <Reveal direction="left" distance={40} delay={480} duration={900}>
          <div className="flex items-center w-40 h-1 rounded-full overflow-hidden bg-gray-700/60">
            <div className="w-1/3 h-full bg-gray-500/80"></div>
            <div className="w-2/3 h-full bg-[#E2B755]"></div>
          </div>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
          Scroll
        </span>
        <span className="h-10 w-px overflow-hidden bg-white/15">
          <span className="lp-scroll-cue block h-full w-full bg-[#E2B755]" />
        </span>
      </div>
    </section>
  );
}
