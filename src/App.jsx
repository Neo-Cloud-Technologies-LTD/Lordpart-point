import './App.css';
import ProjectCard from './Projects-page/Project samples/ProjectCard';
import Stats from './Projects-page/Stats/Stats';
import Testimonials from './Projects-page/Testimonials/Testimonials';
import Hero from './Projects-page/hero/hero';
import Footer from './Projects-page/footer/footer';
// import About from './About-page/About';
function App() 
{
	return (
		<>
			<ProjectCard/>
			<Stats />
			<Testimonials />
			<Hero/>
			<Footer/>
			{/* <About/> */}
		</>
	);
}
export default App
