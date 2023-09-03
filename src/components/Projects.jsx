import React from 'react';
import { Container, Row } from 'react-bootstrap';

//images
import project1 from '../assets/images/project-1.png';
import project2 from '../assets/images/project-2.png';
import project3 from '../assets/images/project-3.png';
import project4 from '../assets/images/project-4.png';
import project5 from '../assets/images/project-5.png';
import project6 from '../assets/images/project-6.png';

//components
import ProjectCard from './ProjectCard';

const Projects = () => {
	return (
		<>
			<div className="projects" id="projects">
				<h1 className="text-center">Projects</h1>
				<Container className="my-5">
					<Row className="row-gap-5 my-5">
						<ProjectCard
							code="https://github.com/Rehan52004/To-Do-List"
							live="https://to-do-list-website1.netlify.app/"
							image={project1}
						/>
						<ProjectCard
							code="https://github.com/Rehan52004/google-cloud-clone"
							live="https://google-cloud-clone.netlify.app/"
							image={project2}
						/>
						<ProjectCard
							code="https://github.com/Rehan52004/Barber-Website"
							live="https://rehan52004.github.io/Barber-Website/"
							image={project3}
						/>
						<ProjectCard
							code="https://github.com/Rehan52004/farhan-graphics"
							live="https://farhangraphics.netlify.app"
							image={project4}
						/>
						<ProjectCard
							code="https://github.com/Rehan52004/Businesss-Web-App"
							live="https://rehan52004.github.io/Businesss-Web-App/"
							image={project5}
						/>
						<ProjectCard
							code="https://github.com/Rehan52004/Movie-hub"
							live="https://github.com/Rehan52004/Movie-hub"
							image={project6}
						/>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Projects;
