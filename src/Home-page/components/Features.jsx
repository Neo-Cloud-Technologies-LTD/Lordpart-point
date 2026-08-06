import {
  FaShieldAlt,
  FaHardHat,
  FaRegCalendarAlt,
  FaHandsHelping,
} from "react-icons/fa";

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
      <div className="max-w-7xl mx-auto border border-yellow-500 bg-black ">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (
            <div
              key={index}
              className="relative px-8 min-h-[165px] flex flex-col justify-center"
            >
              <div className="flex items-start gap-4">

                <div className="text-yellow-500 text-3xl mt-1">
                  {item.icon}
                </div>

                <h3 className="text-white font-bold text-[28px] leading-7 whitespace-pre-line">
                  {item.title}
                </h3>

              </div>

              <p className="text-gray-300 text-[13px] leading-6 mt-5 pl-12">
                {item.desc}
              </p>

              {(index === 0 || index === 2) && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-[2px] bg-yellow-500 rounded-full"></div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;