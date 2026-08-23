import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import './App.css';

import Layout from './Components/Layout';
import NotFound from './Components/NotFound';

import Home from './Home-page/Home';
import About from './About-page/About';
import Projects from './Projects-page/Projects';
import Services from './Services-page/components/services';
import Contact from './Contact-us-page/Contact';

function App() {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/services" element={<Services />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
			<Analytics />
		</>
	);
}

export default App;