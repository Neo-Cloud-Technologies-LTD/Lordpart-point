import {
  ShieldCheck,
  Crown,
  Infinity as InfinityIcon,
  Handshake,
  CircleCheck,
  Leaf,
} from "lucide-react";
import Reveal from "./animations/Reveal";
import GoldRule from "./animations/GoldRule";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality",
    description: "We deliver good quality in every detail.",
  },
  {
    icon: Crown,
    title: "Integrity",
    description: "We conduct business with integrity and transparency.",
  },
  {
    icon: InfinityIcon,
    title: "Innovation",
    description: "We embrace innovation to drive better results.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We build good relationships based on trust and collaboration.",
  },
  {
    icon: CircleCheck,
    title: "Excellence",
    description: "We strive for excellence in every project we deliver.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We are committed to building a better and sustainable future.",
  },
];

function CoreValues() {
  return (
    <section className="border-x border-[#D4AF37] bg-black">
      <div className="mx-auto max-w-7xl px-8 py-16 lg:px-12">
        <Reveal direction="up" distance={30} duration={860}>
          <h2 className="mb-5 text-4xl font-bold text-white">OUR CORE VALUES</h2>
        </Reveal>

        <GoldRule width={160} delay={180} className="mb-10" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <Reveal
                key={value.title}
                direction="up"
                distance={32}
                delay={index * 110}
                duration={780}
                scale={0.96}
                className="group rounded-xl border border-[#D4AF37] bg-gray-500/22 p-8 lp-glow-hover hover:border-[#e0bb52]"
              >
                <Icon
                  size={42}
                  strokeWidth={2}
                  className="mb-6 text-[#D4AF37] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
                />

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {value.title}
                </h3>

                <p className="leading-7 text-gray-300 transition-colors duration-300 group-hover:text-white">
                  {value.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
