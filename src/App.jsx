import './App.css';
import Nav from './Projects-page/Hero-Nav/Nav';
import ProjectsHero from './Projects-page/Hero-Nav/Hero';
import ProjectCard from './Projects-page/Project samples/ProjectCard';
import Stats from './Projects-page/Stats/Stats';
import Testimonials from './Projects-page/Testimonials/Testimonials';
import Services from './Services-page/components/services';
import ContactHero from './Projects-page/hero/hero';
import Footer from './Projects-page/footer/footer';
// import About from './About-page/About';

function App() {
	return (
		<>
			<Nav />
			<ProjectsHero />
			<ProjectCard />
			<Stats />
			<Testimonials />
			<Services />
			<ContactHero />
			<Footer />

			{/* <About/> */}
		</>
	);
}

export default App
