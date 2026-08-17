import {
  MessageSquareText,
  Ruler,
  Building2,
  HardHat,
  CheckCircle,
} from "lucide-react";

function ProcessSection() {
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

  return (
    <section className="w-full border-y border-[#c8a33a]/25 bg-[#0A0D14] py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:flex-row lg:gap-16 lg:px-12">

        {/* Left side */}
        <div className="lg:w-1/4">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d5ad3d]">
            Our Process
          </p>

          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
            Excellence in
            <br />
            Every Step
          </h2>

          <div className="mt-6 flex h-1 w-32 overflow-hidden rounded-full bg-white/10">
            <span className="h-full w-2/3 bg-[#d5ad3d]" />
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:w-3/4 lg:grid-cols-5 lg:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number}>
                {/* Icon and number */}
                <div className="flex items-center gap-3 mb-5">

                  <div className="w-14 h-14 rounded-full border border-[#c8a33a] flex items-center justify-center">
                    <Icon
                      size={30}
                      strokeWidth={1.8}
                      className="text-[#d5ad3d]"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      {step.number}
                    </p>

                    <div className="flex items-center mt-2">
                      <div className="w-7 h-1 bg-[#d5ad3d]"></div>
                      <div className="w-7 h-[2px] bg-gray-700"></div>
                    </div>
                  </div>

                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ProcessSection;