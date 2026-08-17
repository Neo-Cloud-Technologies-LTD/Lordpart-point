import { Flower2 } from "lucide-react";
import ServiceStrip from "./ServiceStrip";
import sustainabilityImage from "../assets/sustainability.jpeg";

function SustainabilityCard() {
  return (
    <ServiceStrip
      image={sustainabilityImage}
      align="right"
      icon={<Flower2 size={30} strokeWidth={1.6} className="text-[#E2B755]" />}
      title="Sustainability Solutions"
      description="Creating sustainable solutions that protect the environment and build a better tomorrow."
    />
  );
}

export default SustainabilityCard;
