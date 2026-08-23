import Reveal from "./animations/Reveal";
import CountUp from "./animations/CountUp";

const stats = [
  {
    number: "10+",
    title: "Years Experience",
  },
  {
    number: "350+",
    title: "Projects Completed",
  },
  {
    number: "120+",
    title: "Professional Experts",
  },
  {
    number: "98%",
    title: "Client Satisfaction",
  },
];

function Stats() {
  return (
    <section className="border-x border-[#D4AF37] bg-black">
      <div className="mx-auto max-w-7xl px-8 pb-16 lg:px-12">
        <Reveal
          direction="up"
          distance={36}
          duration={880}
          scale={0.97}
          className="grid grid-cols-2 overflow-hidden rounded-xl border border-[#D4AF37] bg-gray-500/22 lg:grid-cols-4"
        >
          {stats.map((item, index) => (
            <Reveal
              key={item.title}
              direction="up"
              distance={22}
              delay={200 + index * 130}
              duration={720}
              className="group relative py-10 text-center transition-colors duration-500 hover:bg-[#D4AF37]/5"
            >
              <CountUp
                as="h2"
                value={item.number}
                delay={300 + index * 130}
                className="block text-5xl font-bold text-[#D4AF37] transition-transform duration-500 group-hover:scale-105"
              />

              <p className="mt-4 font-medium text-white">{item.title}</p>

              {/* The dividing line */}
              {index !== stats.length - 1 && (
                <div className="absolute right-0 top-1/2 h-20 w-[3px] -translate-y-1/2 bg-[#D4AF37]"></div>
              )}
            </Reveal>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default Stats;
