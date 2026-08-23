import {
  FaShieldAlt,
  FaHardHat,
  FaRegCalendarAlt,
  FaHandsHelping,
} from "react-icons/fa";
import Reveal from "../../Components/animations/Reveal";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Quality\nAssurance",
    desc: "We deliver top-notch quality on every project.",
  },
  {
    icon: <FaHardHat />,
    title: "Experienced\nTeam",
    desc: "Our experts bring years of experiences to the table",
  },
  {
    icon: <FaRegCalendarAlt />,
    title: "On-Time\nDelivery",
    desc: "We value time and ensure projects are delivered on schedule",
  },
  {
    icon: <FaHandsHelping />,
    title: "Safety\nFirst",
    desc: "We prioritize safety in every step of our work.",
  },
];

function Features() {
  return (
    <section className="relative -mt-12 z-30 px-10 lg:px-12">
      <Reveal
        direction="up"
        distance={40}
        duration={900}
        scale={0.97}
        className="mx-auto max-w-7xl border border-yellow-500 bg-black"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <Reveal
              key={item.title}
              direction="up"
              distance={26}
              delay={220 + index * 120}
              duration={760}
              className="group relative flex min-h-[165px] flex-col justify-center px-8 transition-colors duration-500 hover:bg-yellow-500/5"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 text-3xl text-yellow-500 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="whitespace-pre-line text-[28px] font-bold leading-7 text-white">
                  {item.title}
                </h3>
              </div>

              <p className="mt-5 pl-12 text-[13px] leading-6 text-gray-300 transition-colors duration-300 group-hover:text-white">
                {item.desc}
              </p>

              {(index === 0 || index === 2) && (
                <div className="absolute right-0 top-1/2 hidden h-24 w-[2px] -translate-y-1/2 rounded-full bg-yellow-500 lg:block"></div>
              )}
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Features;
