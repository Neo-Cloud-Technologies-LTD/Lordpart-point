import './App.css';
import ProjectCard from './Projects-page/Project samples/ProjectCard';
import Stats from './Projects-page/Stats/Stats';
import Testimonials from './Projects-page/Testimonials/Testimonials';
import Hero from './Projects-page/hero/hero';
import Footer from './Projects-page/footer/footer';
// import About from './About-page/About';
import Services from './Services-page/components/services';

function App() 
{
	return (
		<>
			<ProjectCard/>
			<Stats />
			<Testimonials />
			<Hero/>
			<Footer/>
			<Services /> 
			
			{/* <About/> */}
		</>
	);
}
export default App
