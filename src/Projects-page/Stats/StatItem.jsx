import CountUp from "../../Components/animations/CountUp";

// Single stat cell used by the projects stats band
function StatItem({ icon, value, label, delay = 0 }) {
  return (
    <div className="group flex flex-col items-center px-2 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/70 text-2xl text-[#D4AF37] transition-all duration-500 group-hover:scale-110 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_22px_rgba(212,175,55,0.45)]">
        {icon}
      </div>

      <CountUp
        as="p"
        value={value}
        delay={delay}
        className="block text-2xl font-bold text-white sm:text-3xl"
      />

      <p className="mt-2 text-xs leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-white sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export default StatItem;
