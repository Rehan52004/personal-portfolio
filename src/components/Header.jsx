import React, { useState } from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { LiaGripLinesSolid } from 'react-icons/lia';

const Header = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<motion.div
				className="navbar d-flex justify-content-between px-3 px-md-5 py-4"
				initial={{ y: -300 }}
				animate={{ y: 0 }}
				transition={{ duration: 1.5, delay: 2 }}
			>
				<h3>Portfolio</h3>
				<nav className="d-none d-lg-flex">
					<div>
						<a href="#home">Home</a>
					</div>
					<div>
						<a href="#aboutus">About Me</a>
					</div>
					<div>
						<a href="#skills">Skills</a>
					</div>
					<div>
						<a href="#projects">projects</a>
					</div>
					<div>
						<a href="#contactme">Contact Me</a>
					</div>
				</nav>
				<div className="d-block d-lg-none" onClick={handleShow}>
					<LiaGripLinesSolid size={30} />
				</div>
			</motion.div>
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header
					closeButton
					className="ms-auto"
				></Offcanvas.Header>
				<Offcanvas.Body>
					<div>
						<motion.div
							initial={{ x: 500, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.2, delay: 0.5 }}
						>
							<Nav.Link
								href="#home"
								className="offcanvas-menu my-3"
								onClick={handleClose}
							>
								Home
							</Nav.Link>
						</motion.div>
						<motion.div
							initial={{ x: 500, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.4, delay: 0.6 }}
						>
							<Nav.Link
								href="#aboutus"
								className="offcanvas-menu my-3"
								onClick={handleClose}
							>
								About Me
							</Nav.Link>
						</motion.div>
						<motion.div
							initial={{ x: 500, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.4, delay: 0.6 }}
						>
							<Nav.Link
								href="#skills"
								className="offcanvas-menu my-3"
								onClick={handleClose}
							>
								Skills
							</Nav.Link>
						</motion.div>
						<motion.div
							initial={{ x: 500, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.7 }}
						>
							<Nav.Link
								href="#projects"
								className="offcanvas-menu my-3"
								onClick={handleClose}
							>
								Projects
							</Nav.Link>
						</motion.div>
						<motion.div
							initial={{ x: 500, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.8 }}
						>
							<Nav.Link
								href="#contactme"
								className="offcanvas-menu my-3"
								onClick={handleClose}
							>
								Contact Me
							</Nav.Link>
						</motion.div>
					</div>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default Header;
