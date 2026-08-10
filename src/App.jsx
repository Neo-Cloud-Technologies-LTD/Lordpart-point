import './App.css';
import ProjectCard from './Projects-page/Project samples/ProjectCard';
import Stats from './Projects-page/Stats/Stats';
import Testimonials from './Projects-page/Testimonials/Testimonials';
import Nav from './Projects-page/Hero-Nav/Nav';
import Hero from './Projects-page/Hero-Nav/Hero';

function App() {
	return (
		<>
			<Nav />
			<Hero />
			<ProjectCard />
			<Stats />
			<Testimonials />
		</>
	);
}

export default App
