
import React from 'react';
import sImage1 from '../../Services-page/public/serviceimage1.jpeg';
import sImage2 from '../../Services-page/public/servicesimage2.jpeg';
import sImage3 from '../../Services-page/public/servicesimage3.jpeg';

export default function Core() {
  //  Data configuration array 
  const servicesData = [
    {
      id: 1,
      title: "Construction",
      description: "Expert construction solutions that bring your vision to life with quality, safety, and timely delivery.",
      image: sImage1, 
      icon: (
        <svg className="w-8 h-8 text-[#E2B755]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A4.835 4.835 0 0012 9a4.835 4.835 0 00-7.5 1.332V21m16.5 0h-18" />
        </svg>
      ),
      textLeft: true 
    },
    {
      id: 2,
      title: "Infrastructure Development",
      description: "Building critical infrastructure that connects communities, support economics, and improve lives.",
      image: sImage2, 
      icon: (
        <svg className="w-8 h-8 text-[#E2B755]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-10.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5-13.5h16.5m-16.5-3h16.5m-16.5 3v13.5m16.5-13.5v13.5" />
        </svg>
      ),
      textLeft: false 
    },
    {
      id: 3,
      title: "Industrial Solution",
      description: "Delivering specialized industrial facilities and system with advanced technology and sustainable practices",
      image: sImage3, 
      icon: (
        <svg className="w-8 h-8 text-[#E2B755]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.128l1.41-.513M5.106 17.785l1.15-.827m11.379-8.16l1.15-.827M8.14 21.27l.707-1.03m6.307-9.18l.706-1.03M12 3v1.5m0 15V21m-3.077-8.457l-.513-1.41m5.128-14.095l-.513-1.41M6.215 5.106l.827 1.15m8.16 11.379l.827 1.15m-10.24 3.505l1.03-.707m9.18-6.307l1.03-.706" />
        </svg>
      ),
      textLeft: true 
    }
  ];

  return (
    <section className="w-full bg-[#0A0D14] text-white px-8 md:px-16 lg:px-24 py-20 font-sans antialiased max-w-[1902px] mx-auto">
      
      {/* SECTION HEADER TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-12">
        Our Core Services
      </h2>

      {/* STRIP ROW WRAPPER STACK */}
      <div className="flex flex-col gap-6">
        {servicesData.map((service) => (
          <div 
            key={service.id}
            className="relative w-full h-70 rounded-sm overflow-hidden border border-gray-800/60 shadow-xl group"
          >
            
            {/* FULL BLEED BACKDROP IMAGE */}
            <div className="absolute inset-0 z-0">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              {/* GRADIENT SHADOW MASK OVERLAYS */}
              {service.textLeft ? (
                // Dark shade favoring text readability on the left
                <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent"></div>
              ) : (
                // Dark shade favoring text readability on the right
                <div className="absolute inset-0 bg-linear-to-l from-black/90 via-black/50 to-transparent"></div>
              )}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* INTERIOR FLEX LAYOUT PANEL */}
            <div className={`relative z-10 w-full h-full flex items-center p-8 md:p-14 ${
              service.textLeft ? 'justify-start' : 'justify-end'
            }`}>
              
              {/* LAYOUT BOUNDING BOX FOR TEXT COPY */}
              <div className="max-w-130 flex flex-col items-start space-y-4">
                
                {/* BRAND ICON ROW */}
                <div className="p-2 rounded-sm bg-gray-900/40 border border-gray-800/40 backdrop-blur-sm">
                  {service.icon}
                </div>

                {/* SERVICE CONTENT HEADER */}
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>

                {/* TEXT PARAGRAPH COPY */}
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {service.description}
                </p>

                {/* "LEARN MORE" ACTION ANCHOR LINK */}
                <a 
                  href={`#${service.title.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center gap-2 text-[#E2B755] text-xs font-bold tracking-wider uppercase group/btn mt-2 hover:text-white transition-colors duration-200"
                >
                  Learn More 
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>

              </div>

            </div>

            {/* SUBTLE GOLDEN OUTER HOVER GLOW BOARD RAIL */}
            <div className="absolute inset-0 border border-transparent group-hover:border-[#E2B755]/30 pointer-events-none transition-colors duration-300"></div>
            
          </div>
        ))}
      </div>

    </section>
  );
}
