import { Link } from "react-router-dom";
import about from "../assets/images/building.jpeg";
import { FiArrowRight } from "react-icons/fi";
import Reveal from "../../Components/animations/Reveal";

function About() {
  return (
    <section className="bg-white pt-10 pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2">
        <div>
          <Reveal direction="up" distance={20}>
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[3px] text-yellow-500">
              ABOUT US
            </p>
          </Reveal>

          <Reveal direction="left" distance={36} delay={120} duration={900}>
            <h2 className="max-w-[560px] text-[22px] font-semibold leading-[1.9] text-[#222]">
              LORDPART POINT is a full-service general contracting firm
              headquartered in Nigeria, providing cutting-edge
              construction renovation, and project management
              solutions tailored to meet the unique needs of clients across
              various sectors.
            </h2>
          </Reveal>

          <Reveal direction="up" distance={22} delay={320}>
            <Link
              to="/about"
              className="group mt-14 inline-flex items-center gap-3 text-[22px] font-bold text-[#111] transition hover:text-yellow-500"
            >
              Learn More
              <FiArrowRight className="text-3xl text-yellow-500 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </Reveal>
        </div>

        <Reveal
          direction="right"
          distance={48}
          delay={200}
          duration={950}
          scale={0.94}
          className="flex justify-end"
        >
          <div className="group overflow-hidden">
            <img
              src={about}
              alt="About"
              className="h-[460px] w-full max-w-[520px] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
