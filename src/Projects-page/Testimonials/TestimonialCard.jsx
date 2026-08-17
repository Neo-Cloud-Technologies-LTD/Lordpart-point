import { Quote, Star } from "lucide-react";

// component for each testimonial card
function TestimonialCard({ quote, name, title }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-[#D4AF37]/50">
      <Quote size={28} className="mb-5 text-[#D4AF37]" aria-hidden="true" />

      <div
        className="mb-5 flex gap-1 text-[#D4AF37]"
        aria-label="Rated 5 out of 5"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={15} fill="currentColor" strokeWidth={0} />
        ))}
      </div>

      <blockquote className="flex-1 text-sm leading-relaxed text-gray-200 sm:text-base">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <figcaption className="mt-7 border-t border-white/10 pt-5">
        <p className="font-bold text-white">{name}</p>
        <p className="mt-1 text-xs text-[#D4AF37]">{title}</p>
      </figcaption>
    </figure>
  );
}

export default TestimonialCard;
