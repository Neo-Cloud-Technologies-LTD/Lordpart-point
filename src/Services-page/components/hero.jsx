
import React from 'react';
import buildingImage from '../../Services-page/public/your-building-image.jpeg';
import companyLogo from '../../Services-page/public/Lordpart logo png.png';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#0A0D14] text-white flex flex-col font-sans select-none antialiased overflow-hidden">
      
      {/* BACKGROUND GRAPHICS: Full-bleed modern architecture asset */}
      <div className="absolute inset-0 z-0">
        <img 
          src={buildingImage}

          alt="Lordpart Point Global Corporate Building" 
          className="w-full h-full object-cover object-right lg:object-center"
        />
        {/* HEAVY GRADIENT OVERLAY: Mask for left panel text visibility */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0A0D14] via-[#0A0D14]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* FIGMA DECORATIVE ABSTRACT VECTORS: SVG Geometric Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-40">
        {/* Subtle decorative circular arc ring matching the background overlay */}
        <svg className="absolute -left-25 top-[10%] w-150 h-150" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#E2B755" strokeWidth="0.1" strokeDasharray="1 2" />
        </svg>
        {/* Vertical alignment design line visible on the right section block */}
        <div className="absolute right-[20%] top-[40%] bottom-0 w-px bg-[#E2B755]/30"></div>
      </div>

      {/* 1. TOP HEADER / NAVIGATION */}
      <header className="relative z-10 w-full flex justify-between items-center px-8 md:px-16 h-24 max-w-[1902px] mx-auto shrink-0">
        <div className="flex items-center gap-3">
          <img 
            src={companyLogo}
            alt="Lordpart Point Logo" 
            className="h-9 w-auto object-contain" 
          />
          <div className="flex flex-col">
            <span className="font-extrabold tracking-wider text-sm leading-tight text-white">
              LORDPART POINT
            </span>
            <span className="text-[9px] tracking-[0.25em] text-gray-400 font-medium mt-0.5">
              GLOBAL LIMITED
            </span>
          </div>
        </div>
        
        {/* FIX: Dynamic map rendering gold lines on ALL links during a hover state */}
        <nav className="hidden md:flex gap-10 text-[13px] tracking-wide font-medium text-gray-300">
          {['Home', 'About Us', 'Projects', 'Services', 'Contact Us'].map((link, idx) => (
            <a 
              key={idx} 
              href={`#${link.toLowerCase().replace(' ', '')}`} 
              className="relative py-2 text-gray-300 hover:text-white transition-colors duration-200 group"
            >
              {link}
              {/* This line stays hidden normally, and slides outward when ANY nav item is hovered */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E2B755] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </a>
          ))}
        </nav>
      </header>

      {/* 2. TYPOGRAPHY CONTENT PANEL */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-start px-8 md:px-16 lg:pl-24 w-full max-w-[1902px] mx-auto py-16">
        
        <span className="text-[#E2B755] text-xs font-bold tracking-[0.3em] uppercase block mb-8">
          OUR SERVICES
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.2] mb-8 max-w-[750px]">
          Engineering Solutions. <br />
          <span className="text-[#E2B755]">Built for impact.</span>
        </h1>

        <p className="w-full max-w-145 text-gray-200 text-sm md:text-base leading-relaxed font-normal mb-10">
          From concept to completion, we offer end-to-end engineering 
          and construction services tailored to meet your unique needs 
          and exceed your expectation.
        </p>

        {/* FIGMA ACCENT: The Gold and Gray Decorative Layout Line */}
        <div className="flex items-center w-40 h-1 rounded-full overflow-hidden bg-gray-700/60">
          <div className="w-1/3 h-full bg-gray-500/80"></div>
          <div className="w-2/3 h-full bg-[#E2B755]"></div>
        </div>

      </div>

    </section>
  );
}
