import "./ProjectCard.css";

const projects = [
    {
        id: 1,
        category: "Commercial",
        title: "Lagos Business",
        location: "Ikeja, Lagos",
        description: "Modern Office for productivity and growth",
        status: "Completed",
        image: "/images/business.jpg",
    },
    {
        id: 2,
        category: "Industrial",
        title: "Nigerian Oil and Gas",
        location: "Port Harcourt, Rivers",
        description: "Engineering solutions",
        status: "Completed",
        image: "/images/oil-gas.jpg",
    },
    {
        id: 3,
        category: "Industrial",
        title: "Industrial Warehouse",
        location: "Ogun State",
        description: "Warehouse for industrial training",
        status: "Completed",
        image: "/images/warehouse.jpg",
    },
    {
        id: 4,
        category: "Infrastructure",
        title: "Abuja Road Expansion",
        location: "Abuja",
        description: "Road expansion project and connectivity",
        status: "Completed",
        image: "/images/road.jpg",
    },
    {
        id: 5,
        category: "Residential",
        title: "Lekki Luxury Villas",
        location: "Lekki, Lagos",
        description: "Elite residential villas blending comfort, elegance and privacy",
        status: "Completed",
        image: "/images/villas.jpg",
    },
    {
        id: 6,
        category: "Residential",
        title: "Abuja Modern House",
        location: "Abuja",
        description: "Modern house for comfort and privacy",
        status: "Completed",
        image: "/images/house.jpg",
    },
];

export default function ProjectCard() {
    return (
        <section className="projects">
            {projects.map((project) => (
                <div className="card" key={project.id}>
                    <div className="image-box">
                        <img src={project.image} alt={project.title} />
                    </div>

                    <div className="card-content">
                        <span className="category">{project.category}</span>

                        <h2>{project.title}</h2>

                        <h4>{project.location}</h4>

                        <p>{project.description}</p>

                        <hr/>

                        <div className="status">{project.status}</div>
                    </div>
                </div>
           ) )}
        </section>
    );
}