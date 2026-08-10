import {ShieldCheck, Crown, Infinity, Handshake, CircleCheck, Leaf} from "lucide-react";

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
    icon: Infinity,
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
    <section className="bg-black border-x border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
            <h2 className="text-white text-4xl font-bold mb-10">
                OUR CORE VALUES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => {
                const Icon = value.icon;
                return (
                    <div
                        key={index}
                        className="bg-gray-500/22 border border-[#D4AF37] rounded-xl p-8"
                    >
                        <Icon
                            size={42}
                            className="text-[#D4AF37] mb-6"
                            strokeWidth={2}
                        />
                        <h3 className="text-white text-2xl font-bold mb-4">
                            {value.title}
                        </h3>
                        <p className="text-gray-300 leading-7">
                            {value.description}
                        </p>
                    </div>
            );
            })}
            </div>
        </div>
    </section>
  );
}

export default CoreValues;