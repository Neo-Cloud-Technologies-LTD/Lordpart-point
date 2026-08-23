import storyImage from "../assets/story1.png";
import Reveal from "./animations/Reveal";
import GoldRule from "./animations/GoldRule";

function Story() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="grid items-center md:gap-80 lg:grid-cols-2">
          {/* Left Side of our page */}
          <div>
            <Reveal direction="up" distance={20}>
              <h3 className="mb-8 text-xl font-semibold uppercase text-[#D4AF37]">
                Our Story
              </h3>
            </Reveal>

            <Reveal direction="left" distance={36} delay={120} duration={900}>
              <h2 className="mb-6 text-2xl font-bold uppercase leading-tight text-white lg:text-3xl">
                From Vision
                <br />
                To Reality
              </h2>
            </Reveal>

            <GoldRule width={140} delay={300} className="mb-10" />

            <Reveal direction="up" distance={26} delay={280} duration={880}>
              <p className="leading-8 text-gray-300">
                LORDPART POINT GLOBAL LIMITED was founded with a clear purpose to
                deliver construction solutions that combines quality,
                innovation, and integrity. From residential and commercial
                developments to infrastructure projects, we have consistently
                transformed ideas into durable structures that serve communities
                and businesses alike.
              </p>
            </Reveal>
          </div>

          {/* Right side of our page */}
          <Reveal
            direction="right"
            distance={48}
            delay={200}
            duration={950}
            scale={0.94}
          >
            <div className="group overflow-hidden">
              <img
                src={storyImage}
                alt="Construction Site"
                className="h-100 w-screen object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Story;
