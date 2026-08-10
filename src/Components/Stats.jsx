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
    <section className="bg-black border-x border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 pb-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 border border-[#D4AF37] rounded-xl overflow-hidden bg-gray-500/22">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="relative py-10 text-center"
                    >
                        <h2 className="text-5xl font-bold text-[#D4AF37]">
                            {item.number}
                        </h2>
                        <p className="text-white mt-4 font-medium">
                            {item.title}
                        </p>
                        
                        {/* The dividing line */}
                        {index !== stats.length - 1 && (
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[3px] bg-[#D4AF37]"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Stats;