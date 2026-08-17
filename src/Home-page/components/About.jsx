import { Link } from "react-router-dom";
import about from "../assets/images/building.jpeg";
import { FiArrowRight } from "react-icons/fi";

function About() {
  return (
    <section className="bg-white pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div>
          <p className="uppercase text-[12px] tracking-[3px] text-yellow-500 font-semibold mb-5">
            ABOUT US
          </p>

          <h2 className="text-[22px] font-semibold leading-[1.9] text-[#222] max-w-[560px]">
            LORDPART POINT is a full-service general contracting firm
            headquartered in Nigeria, providing cutting-edge
            construction renovation, and project management
            solutions tailored to meet the unique needs of clients across
            various sectors.
          </h2>

          <Link
            to="/about"
            className="mt-14 inline-flex items-center gap-3 font-bold text-[22px] text-[#111] hover:text-yellow-500 transition"
          >
            Learn More
            <FiArrowRight className="text-yellow-500 text-3xl" />
          </Link>
        </div>

        <div className="flex justify-end">
          <img
            src={about}
            alt="About"
            className="w-full max-w-[520px] h-[460px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
export default About;