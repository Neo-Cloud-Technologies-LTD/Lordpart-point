import './App.css';

// Home page (from Home-page branch) - Hero renders its own Navbar
import HomeHero from './Home-page/components/Hero';
import Features from './Home-page/components/Features';
import HomeAbout from './Home-page/components/About';

// Projects page (from team4-branch / main)
import Nav from './Projects-page/Hero-Nav/Nav';
import ProjectsHero from './Projects-page/Hero-Nav/Hero';
import ProjectCard from './Projects-page/Project samples/ProjectCard';
import Stats from './Projects-page/Stats/Stats';
import Testimonials from './Projects-page/Testimonials/Testimonials';

// Services page (from my-project-code branch)
import Services from './Services-page/components/services';

// Contact CTA + footer (from main)
import ContactHero from './Projects-page/hero/hero';
import Footer from './Projects-page/footer/footer';
// import About from './About-page/About';

function App() {
	return (
		<>
			{/* Home */}
			<HomeHero />
			<Features />
			<HomeAbout />

			{/* Projects */}
			<Nav />
			<ProjectsHero />
			<ProjectCard />
			<Stats />
			<Testimonials />

			{/* Services */}
			<Services />

			{/* Contact + Footer */}
			<ContactHero />
			<Footer />

			{/* <About/> */}
		</>
	);
}

export default App;
