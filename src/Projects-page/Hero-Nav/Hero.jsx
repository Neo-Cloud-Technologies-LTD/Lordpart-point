import "./Hero.css";
import StatItem from "../Stats/StatItem";
import { FaChartBar, FaCog, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-top">
                <div className="hero-content">
                    <p className="hero-subtitle">OUR PROJECT</p>

                   
                        <h1 id="head">
                        Engineering Excellence
                        <br />
                        <span>Delivering Impact.</span>
                        </h1>
                   

                    <p className="hero-description">
                        From Landmark developments to critical infrastructure,
                        <br />
                        our projects reflect our commitment to quality
                        <br />
                        innovation,and sustainable progress.
                    </p>

                    <button className="hero-btn"> Explore Our Work </button>
                </div>

                <div className="hero-stats">
                        <StatItem icon={<FaChartBar color=" #f2cb4b" />} 
                        value="100+" 
                        label="Projects Completed" />
                        <div className="hero-divider"></div>

                        <StatItem  icon={<FaCog color="#f2cb4b"/>} 
                        value="50" 
                        label="Expert Professionals" />
                        <div className="hero-divider"></div>

                        <StatItem  icon={<FaMapMarkerAlt color="#f2cb4b"/>} 
                        value="25" 
                        label="Years of Experience" />
                        <div className="hero-divider"></div>
                        <StatItem  icon={<FaShieldAlt color="#f2cb4b"/>}
                         value="98"
                          label="Client Satisfaction" />

                        
                </div>
            </div>

            <div className="project-preview">
                <div className="project-filters">
                    <button className="active">All</button>
                    <button>Commercial</button>
                    <button>Industrial</button>
                    <button>Infrastructure</button>
                    <button>Residential</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;