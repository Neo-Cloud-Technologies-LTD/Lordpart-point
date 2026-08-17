import {
  FaChartBar,
  FaUsers,
  FaCog,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";
import StatItem from "./StatItem";

const statsData = [
  { icon: <FaChartBar />, value: "350+", label: "Projects Completed" },
  { icon: <FaUsers />, value: "120+", label: "Professional Experts" },
  { icon: <FaCog />, value: "10+", label: "Years of Experience" },
  { icon: <FaMapMarkerAlt />, value: "5", label: "Regional Offices" },
  { icon: <FaShieldAlt />, value: "98%", label: "Client Satisfaction" },
];

// Full-width stats band
function Stats() {
  return (
    <section className="w-full border-y border-[#D4AF37]/25 bg-[#0b0b0b] py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-y-10 rounded-2xl border border-[#D4AF37]/40 bg-white/5 px-4 py-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
          {statsData.map((stat, index) => (
            <div
              key={stat.label}
              className={
                index < statsData.length - 1
                  ? "lg:border-r lg:border-[#D4AF37]/30"
                  : ""
              }
            >
              <StatItem
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
