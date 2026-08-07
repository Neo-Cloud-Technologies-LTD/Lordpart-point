import image from "../assets/Construction 1.png";
import { Check } from "lucide-react";

const content = [
  "Safety First",
  "Experienced Professionals",
  "Premium Materials",
  "Transparent Communication",
  "Innovative Design",
  "Timely Delivery",
];

function WhyChooseUs() {
  return (
    <section className="bg-black border-x border-b border-[#D4AF37]">
        <div /*For the thick line*/
            className="w-full h-1 bg-[#D4AF37]">
        </div>
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
            {/* Heading */}
            <h2 className="text-[#D4AF37] text-3xl font-semibold mb-12">
                WHY CHOOSE US
            </h2>
            {/* Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Image */}
                <div>
                    <img
                        src={image}
                        alt="Construction Site"
                        className="w-full h-[500px] object-cover"
                    />
                </div>

                {/* Right List */}
                    <div className="space-y-8">
                        {content.map((content, index) => (
                            <div key={index} className="flex items-center gap-5">
                                <div className="bg-[#D4AF37] rounded-full p-2 flex items-center justify-center">
                                    <Check
                                        size={20}
                                        className="text-black"
                                        strokeWidth={3}
                                    />
                                </div>
                                <h3 className="text-white text-2xl font-semibold">
                                    {content}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </section>
  );
}

export default WhyChooseUs;