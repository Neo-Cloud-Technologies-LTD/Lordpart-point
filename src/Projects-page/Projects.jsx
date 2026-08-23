import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "./Hero-Nav/Hero";
import Stats from "./Stats/Stats";
import ProjectCard from "./Project samples/ProjectCard";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./footer/footer";

function Projects() {
  return (
    <>
      <Hero />
      <Stats />
      <ProjectCard />
      <Testimonials />

      {/* Closing CTA */}
      <section className="w-full border-t border-[#D4AF37]/25 bg-black py-20">
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Let&apos;s turn your vision into a remarkable reality. Our team is
            ready to deliver.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-7 py-3.5 font-semibold text-black transition hover:bg-[#e0bb52]"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Projects;
