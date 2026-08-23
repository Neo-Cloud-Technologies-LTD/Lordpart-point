import { useMemo, useState } from "react";
import { Building2, MapPin } from "lucide-react";
import Reveal from "../../Components/animations/Reveal";
import GoldRule from "../../Components/animations/GoldRule";

// Bundled through Vite so the hashed URLs survive a production build.
import businessImage from "../../Services-page/public/your-building-image.jpeg";
import oilGasImage from "../../Services-page/assets/sustainability.jpeg";
import warehouseImage from "../../Services-page/public/serviceimage1.jpeg";
import roadImage from "../../assets/Construction 1.png";
import villasImage from "../../Services-page/public/servicesimage2.jpeg";
import houseImage from "../../Home-page/assets/images/building.jpeg";

const projects = [
    {
        id: 1,
        category: "Commercial",
        title: "Lagos Business Hub",
        location: "Ikeja, Lagos",
        description: "Modern office space designed for productivity and growth.",
        status: "Completed",
        image: businessImage,
    },
    {
        id: 2,
        category: "Industrial",
        title: "Nigerian Oil and Gas",
        location: "Port Harcourt, Rivers",
        description: "Specialised engineering solutions for energy operations.",
        status: "Completed",
        image: oilGasImage,
    },
    {
        id: 3,
        category: "Industrial",
        title: "Industrial Warehouse",
        location: "Ogun State",
        description: "Large-scale warehousing built for logistics efficiency.",
        status: "Completed",
        image: warehouseImage,
    },
    {
        id: 4,
        category: "Infrastructure",
        title: "Abuja Road Expansion",
        location: "Abuja",
        description: "Road expansion improving city-wide connectivity.",
        status: "Completed",
        image: roadImage,
    },
    {
        id: 5,
        category: "Residential",
        title: "Lekki Luxury Villas",
        location: "Lekki, Lagos",
        description:
            "Elite residential villas blending comfort, elegance and privacy.",
        status: "Completed",
        image: villasImage,
    },
    {
        id: 6,
        category: "Residential",
        title: "Abuja Modern House",
        location: "Abuja",
        description: "A contemporary home built for comfort and privacy.",
        status: "Completed",
        image: houseImage,
    },
];

const filters = [
    "All",
    "Commercial",
    "Industrial",
    "Infrastructure",
    "Residential",
];

export default function ProjectCard() {
    const [activeFilter, setActiveFilter] = useState("All");
    // Tracks images that failed to load so we can show a branded placeholder
    const [brokenImages, setBrokenImages] = useState({});

    const visibleProjects = useMemo(
        () =>
            activeFilter === "All"
                ? projects
                : projects.filter((project) => project.category === activeFilter),
        [activeFilter]
    );

    return (
        <section
            id="project-gallery"
            className="w-full bg-black py-20 scroll-mt-24"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                {/* Section header */}
                <Reveal direction="up" distance={22}>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                        Project Gallery
                    </p>
                </Reveal>

                <Reveal direction="up" distance={32} delay={120} duration={860}>
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                        Selected Works
                    </h2>
                </Reveal>

                <GoldRule className="mt-6" delay={220} />

                {/* Filters */}
                <Reveal direction="up" distance={20} delay={260}>
                    <div className="mt-10 flex flex-wrap gap-3">
                        {filters.map((filter) => {
                            const isActive = filter === activeFilter;

                            return (
                                <button
                                    key={filter}
                                    type="button"
                                    onClick={() => setActiveFilter(filter)}
                                    aria-pressed={isActive}
                                    className={`rounded-xl px-6 py-3 text-sm font-bold transition ${
                                        isActive
                                            ? "bg-[#D4AF37] text-black"
                                            : "border border-white/15 bg-white/5 text-gray-200 hover:border-[#D4AF37]/60 hover:text-white"
                                    }`}
                                >
                                    {filter}
                                </button>
                            );
                        })}
                    </div>
                </Reveal>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {visibleProjects.map((project, index) => (
                        <Reveal
                            key={project.id}
                            direction="up"
                            distance={30}
                            delay={index * 110}
                            duration={800}
                            className="flex"
                        >
                            <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/60">
                                {/* Image */}
                                <div className="relative h-56 w-full overflow-hidden bg-white/5">
                                    {brokenImages[project.id] ? (
                                        // Fallback keeps the card layout intact if the asset is missing
                                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/10 to-transparent">
                                            <Building2
                                                size={44}
                                                strokeWidth={1.4}
                                                className="text-[#D4AF37]/50"
                                            />
                                        </div>
                                    ) : (
                                        <img
                                            src={project.image}
                                            alt={`${project.title} — ${project.category} project in ${project.location}`}
                                            loading="lazy"
                                            decoding="async"
                                            onError={() =>
                                                setBrokenImages((prev) => ({
                                                    ...prev,
                                                    [project.id]: true,
                                                }))
                                            }
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    )}

                                    {/* Keeps the category chip legible over bright photos */}
                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30"
                                        aria-hidden="true"
                                    />

                                    <span className="absolute left-4 top-4 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-[#D4AF37] backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="text-lg font-bold text-white sm:text-xl">
                                        {project.title}
                                    </h3>

                                    <p className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                                        <MapPin size={15} className="text-[#D4AF37]" />
                                        {project.location}
                                    </p>

                                    <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-300">
                                        {project.description}
                                    </p>

                                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                                        <span className="text-xs uppercase tracking-wider text-gray-500">
                                            Status
                                        </span>

                                        <span className="text-sm font-semibold text-[#D4AF37]">
                                            {project.status}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
