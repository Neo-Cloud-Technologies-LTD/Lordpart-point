import {
  MessageSquareText,
  Ruler,
  Building2,
  HardHat,
  CheckCircle,
} from "lucide-react";
import Reveal from "../../Components/animations/Reveal";
import GoldRule from "../../Components/animations/GoldRule";
import useInView from "../../Components/animations/useInView";

const GOLD = "#d5ad3d";

const steps = [
  {
    number: "01",
    title: "Consultation",
    text: "We listen and understand your needs",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Planning",
    text: "We create a strategy tailored to your goals.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Design",
    text: "We design with precision and care.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Construction",
    text: "We build with quality, safety, and efficiency.",
    icon: HardHat,
  },
  {
    number: "05",
    title: "Delivery",
    text: "We deliver results that exceed expectations.",
    icon: CheckCircle,
  },
];

function ProcessSection() {
  // Drives the gold track that draws itself across the five steps
  const [trackRef, trackInView] = useInView({ threshold: 0.25 });

  return (
    <section className="relative w-full overflow-hidden border-y border-[#c8a33a]/25 bg-[#0A0D14] py-20">
      {/* Ambient gold wash so the band feels lit rather than flat */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#d5ad3d]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#d5ad3d]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:flex-row lg:gap-16 lg:px-12">
        {/* Left side */}
        <div className="lg:w-1/4">
          <Reveal direction="left" distance={32}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white">
              Our Process
            </p>
          </Reveal>

          <Reveal direction="left" distance={32} delay={120}>
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
              Excellence in
              <br />
              Every Step
            </h2>
          </Reveal>

          <GoldRule width={128} delay={280} color={GOLD} className="mt-6" />
        </div>

        {/* Steps */}
        <div
          ref={trackRef}
          className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:w-3/4 lg:grid-cols-5 lg:gap-6"
        >
          {/* Connector rail that draws left-to-right behind the icons */}
          <div
            className="pointer-events-none absolute left-0 top-7 hidden h-px w-full bg-white/10 lg:block"
            aria-hidden="true"
          >
            <span
              className="block h-full bg-gradient-to-r from-[#d5ad3d] to-[#d5ad3d]/20"
              style={{
                width: trackInView ? "100%" : "0%",
                transition: "width 1600ms cubic-bezier(0.22, 1, 0.36, 1) 200ms",
              }}
            />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal
                key={step.number}
                direction="up"
                distance={34}
                delay={index * 130}
                duration={760}
                className="group relative"
              >
                {/* Icon and number */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#c8a33a] bg-[#0A0D14] transition-all duration-500 group-hover:scale-110 group-hover:border-[#d5ad3d] group-hover:shadow-[0_0_22px_rgba(213,173,61,0.45)]">
                    {/* Pulse ring on hover */}
                    <span
                      className="absolute inset-0 rounded-full border border-[#d5ad3d]/60 opacity-0 transition-all duration-700 group-hover:scale-[1.35] group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <Icon
                      size={30}
                      strokeWidth={1.8}
                      className="text-white transition-transform duration-500 group-hover:-rotate-6"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      {step.number}
                    </p>

                    <div className="mt-2 flex items-center overflow-hidden">
                      <div
                        className="h-1 bg-[#d5ad3d] transition-all duration-700 ease-out"
                        style={{
                          width: trackInView ? "1.75rem" : "0rem",
                          transitionDelay: `${400 + index * 130}ms`,
                        }}
                      />
                      <div className="h-[2px] w-7 bg-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-white transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/80 transition-colors duration-300 group-hover:text-white">
                  {step.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
