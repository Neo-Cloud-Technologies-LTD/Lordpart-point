import image from "../assets/Construction 1.png";
import { Check } from "lucide-react";
import Reveal from "./animations/Reveal";
import useInView from "./animations/useInView";

const content = [
  "Safety First",
  "Experienced Professionals",
  "Premium Materials",
  "Transparent Communication",
  "Innovative Design",
  "Timely Delivery",
];

function WhyChooseUs() {
  // Drives the thick gold rule that wipes across the top of the band
  const [ruleRef, ruleInView] = useInView({ threshold: 0.2 });

  return (
    <section className="border-x border-b border-[#D4AF37] bg-black">
      {/* For the thick line — wipes in from the left on scroll */}
      <div ref={ruleRef} className="h-1 w-full bg-[#D4AF37]/15">
        <div
          className="h-full bg-[#D4AF37]"
          style={{
            width: ruleInView ? "100%" : "0%",
            transition: "width 1400ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-8 py-16 lg:px-12">
        {/* Heading */}
        <Reveal direction="up" distance={28} duration={860}>
          <h2 className="mb-12 text-3xl font-semibold text-[#D4AF37]">
            WHY CHOOSE US
          </h2>
        </Reveal>

        {/* Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}
          <Reveal
            direction="left"
            distance={48}
            duration={950}
            scale={0.94}
          >
            <div className="group overflow-hidden">
              <img
                src={image}
                alt="Construction Site"
                className="h-[500px] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>

          {/* Right List */}
          <div className="space-y-8">
            {content.map((item, index) => (
              <Reveal
                key={item}
                direction="right"
                distance={38}
                delay={index * 110}
                duration={720}
                className="group flex items-center gap-5"
              >
                <div className="flex items-center justify-center rounded-full bg-[#D4AF37] p-2 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                  <Check size={20} strokeWidth={3} className="text-black" />
                </div>

                <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
                  {item}
                </h3>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
