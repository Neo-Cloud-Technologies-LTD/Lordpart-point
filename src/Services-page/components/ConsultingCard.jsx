import { UsersRound } from "lucide-react";
import ServiceStrip from "./ServiceStrip";
import consultingImage from "../assets/consulting.jpeg";

function ConsultingCard() {
  return (
    <ServiceStrip
      image={consultingImage}
      align="left"
      icon={<UsersRound size={30} strokeWidth={1.6} className="text-[#E2B755]" />}
      title="Consulting Services"
      description="Strategic advice and expert insights to help you make informed decisions and achieve your goals."
    />
  );
}

export default ConsultingCard;
