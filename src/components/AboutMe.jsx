import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';

//images
import aboutImage from '../assets/images/about-us-image.jpg';

//react-icons
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';

//framer motion
import { motion } from 'framer-motion';

const AboutMe = () => {
	return (
		<>
			<motion.div
				className="about-us h-100"
				id="aboutus"
				initial={{ y: 100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Container>
					<Row className="my-2 my-md-5 py-2 py-md-5">
						<Col md={5}>
							<div className="img-section text-center">
								<img src={aboutImage} alt="" height={500} />
							</div>
						</Col>
						<Col md={7}>
							<h1>About Me</h1>
							<p>
								At the intersection of technology and creativity, I am
								Rehan, a passionate BCA student in the 3rd year with a
								strong inclination towards frontend development. With an
								insatiable curiosity for coding and a commitment to
								delivering innovative user experiences, I aspire to
								shape the digital world with my skills and
								dedication.Driven by the ever-evolving tech landscape, I
								strive to bring aesthetics and functionality together,
								crafting seamless digital solutions that leave a lasting
								impression
							</p>
							<h2 className="mt-4">Connect Here</h2>
							<div className="social-links d-flex align-items-center mb-4">
								<p>
									<a
										href="https://www.facebook.com/profile.php?id=100093262667734"
										target="_blank"
									>
										<BsFacebook
											size={30}
											className="me-3"
											color="#1877F2"
										/>
									</a>
								</p>
								<p>
									<a href="https://www.instagram.com/itzz_rehanwahee/">
										<BsInstagram
											size={30}
											className="mx-3"
											color="hotpink"
										/>
									</a>
								</p>
								<p>
									<a href="www.linkedin.com/in/abdulrehan">
										<FaLinkedinIn
											size={30}
											className="mx-3"
											color=" #0A66C2"
										/>
									</a>
								</p>
								<p>
									<a href="https://linktr.ee/abdul_rehan">
										<SiLinktree
											size={30}
											className="mx-3"
											color="green"
										/>
									</a>
								</p>
								<p>
									<a href="https://github.com/Rehan52004">
										<BsGithub
											size={30}
											className="mx-3"
											color="black"
										/>
									</a>
								</p>
							</div>
							<button className="type-1-btn me-3">
								<NavLink href="#contactme">Contact Me</NavLink>
							</button>
						</Col>
					</Row>
				</Container>
			</motion.div>
		</>
	);
};

export default AboutMe;
