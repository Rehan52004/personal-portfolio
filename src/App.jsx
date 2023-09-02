import React from 'react';
import { useState, useEffect } from 'react';

//components
import Hero from './components/Hero';
import Loader from './components/Loader';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		const fetchWebsite = () => {
			setTimeout(() => {
				setLoader(false);
			}, 4000);
		};
		fetchWebsite();
	}, []);

	return (
		<>
			{loader ? (
				<Loader />
			) : (
				<>
					<Header />
					<Hero />
					<AboutMe />
					<Skill />
					<Projects />
					<Contact />
				</>
			)}
		</>
	);
};

export default App;
