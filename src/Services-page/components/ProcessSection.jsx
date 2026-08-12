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
    <section className="border border-[#c8a33a] rounded-2xl px-4 py-6 sm:px-6 md:px-8">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left side */}
        <div className="lg:w-1/5">
          <p className="text-[#d5ad3d] text-sm font-bold uppercase mb-5">
            Our Process
          </p>

          <h2 className="text-3xl font-bold leading-tight">
            Excellence in
            <br />
            Every Step
          </h2>
        </div>

        {/* Steps */}
        <div className="lg:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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