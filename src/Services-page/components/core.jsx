import { Building2, Network, Factory } from "lucide-react";
import ServiceStrip from "./ServiceStrip";
import sImage1 from "../public/serviceimage1.jpeg";
import sImage2 from "../public/servicesimage2.jpeg";
import sImage3 from "../public/servicesimage3.jpeg";

const servicesData = [
  {
    id: 1,
    title: "Construction",
    description:
      "Expert construction solutions that bring your vision to life with quality, safety, and timely delivery.",
    image: sImage1,
    icon: <Building2 size={30} strokeWidth={1.6} className="text-[#E2B755]" />,
    align: "left",
  },
  {
    id: 2,
    title: "Infrastructure Development",
    description:
      "Building critical infrastructure that connects communities, supports economies, and improves lives.",
    image: sImage2,
    icon: <Network size={30} strokeWidth={1.6} className="text-[#E2B755]" />,
    align: "right",
  },
  {
    id: 3,
    title: "Industrial Solutions",
    description:
      "Delivering specialized industrial facilities and systems with advanced technology and sustainable practices.",
    image: sImage3,
    icon: <Factory size={30} strokeWidth={1.6} className="text-[#E2B755]" />,
    align: "left",
  },
];

export default function Core() {
  return (
    <div className="w-full bg-[#0A0D14] text-white">
      {/* Section header stays inside the shared container */}
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 sm:px-8 lg:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#E2B755]">
          What We Do
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          Our Core Services
        </h2>

        <div className="mt-6 flex h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <span className="h-full w-2/3 bg-[#E2B755]" />
        </div>
      </div>

      {/* Full-width service bands */}
      {servicesData.map((service) => (
        <ServiceStrip
          key={service.id}
          image={service.image}
          icon={service.icon}
          title={service.title}
          description={service.description}
          align={service.align}
        />
      ))}
    </div>
  );
}
