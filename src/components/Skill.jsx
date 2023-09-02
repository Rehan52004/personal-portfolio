import React from 'react';

//images
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import js from '../assets/images/js.png';
import react from '../assets/images/react.png';
import git from '../assets/images/git.png';
import github from '../assets/images/github.png';
import bootstrap from '../assets/images/bootstrap.png';
import c from '../assets/images/c.png';
import cpp from '../assets/images/cpp.png';

//react - bootstrap
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Skill = () => {
	return (
		<>
			<div className="skills" id="skills">
				<h1 className="text-center">Skills</h1>
				<Container className="mb-5">
					<Row className="justify-content-center mb-5 row-gap-4 row-gap-lg-1">
						<h2 className="text-center">Web Technology</h2>
						<Col xs={4} lg={2}>
							<motion.div
								className="skill-logo"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
							>
								<img
									src={html}
									alt="html-img"
									className="skill-logo-img"
								/>
							</motion.div>
						</Col>
						<Col xs={4} lg={2}>
							<motion.div
								className="skill-logo"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
							>
								<img
									src={css}
									alt="css-img"
									className="skill-logo-img"
								/>
							</motion.div>
						</Col>
						<Col xs={4} lg={2}>
							<motion.div
								className="skill-logo"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
							>
								<img src={js} alt="js-img" className="skill-logo-img" />
							</motion.div>
						</Col>
						<Col xs={4} lg={2}>
							<motion.div
								className="skill-logo"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
							>
								<img
									src={bootstrap}
									alt="bootstrap-img"
									className="skill-logo-img"
								/>
							</motion.div>
						</Col>
						<Col xs={4} lg={2}>
							<motion.div
								className="skill-logo"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
							>
								<img
									src={react}
									alt="react-img"
									className="skill-logo-img"
								/>
							</motion.div>
						</Col>
					</Row>
					<Row className="justify-content-center my-5">
						<h2 className="text-center mb-3">Version Control</h2>
						<Col xs={6} md={2}>
							<motion.div
								className="skill-logo"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
							>
								<img
									src={git}
									alt="git-image"
									className="skill-logo-img"
								/>
							</motion.div>
						</Col>
						<Col xs={6} md={2}>
							<motion.div
								className="skill-logo"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
							>
								<img
									src={github}
									alt="github-img"
									className="skill-logo-img"
								/>
							</motion.div>
						</Col>
					</Row>
					<Row className="justify-content-center my-5">
						<h2 className="text-center mb-3">Programming Language</h2>
						<Col xs={6} md={2}>
							<motion.div
								className="skill-logo"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
							>
								<img src={c} alt="c-img" className="skill-logo-img" />
							</motion.div>
						</Col>
						<Col xs={6} md={2}>
							<motion.div
								className="skill-logo"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
							>
								<img
									src={cpp}
									alt="cpp-img"
									className="skill-logo-img"
								/>
							</motion.div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Skill;
