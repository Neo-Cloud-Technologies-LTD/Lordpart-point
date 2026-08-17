// Single stat cell used by the projects stats band
function StatItem({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center px-2 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/70 text-2xl text-[#D4AF37]">
        {icon}
      </div>

      <p className="text-2xl font-bold text-white sm:text-3xl">{value}</p>

      <p className="mt-2 text-xs leading-relaxed text-gray-300 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export default StatItem;
