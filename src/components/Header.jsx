import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { motion } from 'framer-motion';
const Header = () => {
	return (
		<>
			<motion.div
				initial={{ y: -300 }}
				animate={{ y: 0 }}
				transition={{ duration: 1.5, delay: 2 }}
			>
				<Navbar
					expand="md"
					className="navbar bg-body-light mb-3 px-0 px-md-5 py-3"
					id="header"
				>
					<Container fluid>
						<Navbar.Brand href="#">Portfolio</Navbar.Brand>
						<Navbar.Toggle
							aria-controls={`offcanvasNavbar-expand-md`}
							style={{ outline: 'none' }}
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-md`}
							aria-labelledby={`offcanvasNavbarLabel-expand-md`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
									Menu
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav
									className="justify-content-end flex-grow-1 pe-3"
									style={{ fontSize: '20px' }}
								>
									<motion.div
										initial={{ x: 500, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.2, delay: 0.5 }}
									>
										<Nav.Link href="#home">Home</Nav.Link>
									</motion.div>
									<motion.div
										initial={{ x: 500, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.4, delay: 0.6 }}
									>
										<Nav.Link href="#aboutus">About Me</Nav.Link>
									</motion.div>
									<motion.div
										initial={{ x: 500, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.4, delay: 0.6 }}
									>
										<Nav.Link href="#skills">Skills</Nav.Link>
									</motion.div>
									<motion.div
										initial={{ x: 500, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.6, delay: 0.7 }}
									>
										<Nav.Link href="#projects">Projects</Nav.Link>
									</motion.div>
									<motion.div
										initial={{ x: 500, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 0.8, delay: 0.8 }}
									>
										<Nav.Link href="#contactme">Contact Me</Nav.Link>
									</motion.div>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			</motion.div>
		</>
	);
};

export default Header;
