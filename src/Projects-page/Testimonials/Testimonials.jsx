import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    quote:
      "LORDPART POINT exceeded our expectations from start to finish. Their professionalism and attention to detail are unmatched.",
    name: "Prisca Adeyemi",
    title: "MD, SunGate Properties",
  },
  {
    quote:
      "They delivered our project on time, within budget, and to the highest quality standards. Highly recommended!",
    name: "Emeka Samuel",
    title: "CEO, Rosmally Group",
  },
  {
    quote:
      "A reliable and innovative construction partner. Their team is simply outstanding.",
    name: "Aisha Mohammed",
    title: "Director, M. Enterprises",
  },
];

// Full-width testimonials band
function Testimonials() {
  return (
    <section className="w-full border-t border-[#D4AF37]/25 bg-[#0b0b0b] py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
          Testimonials
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          What Our Clients Say
        </h2>

        <div className="mt-6 flex h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <span className="h-full w-2/3 bg-[#D4AF37]" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
