import React, { useState } from 'react';
import { Col, Container, Form, Modal, Row } from 'react-bootstrap';

//react-icons
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';
import { BsGithub } from 'react-icons/bs';
import { BsArrowUp } from 'react-icons/bs';

import { motion } from 'framer-motion';

import { app } from '../firebase';
import { getDatabase, ref, set } from 'firebase/database';

const db = getDatabase(app);

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const [modal, setModal] = useState(false);

	const handleClose = () => setModal(false);
	const handleShow = () => setModal(true);
	const formSubmission = (event, name, email, message) => {
		event.preventDefault();
		set(ref(db, 'user/' + Date.now()), {
			username: name,
			email,
			message,
		});
		setName('');
		setEmail('');
		setMessage('');
		handleShow();
	};
	return (
		<>
			<div className="contact" id="contactme">
				<h1 className="text-center">Contact Me</h1>
				<Container>
					<Row className="mx-auto row-gap-4 mt-3 mt-md-5 pt-3 pt-md-4">
						<Col xs={12} md={6}>
							<Form
								onSubmit={(event) =>
									formSubmission(event, name, email, message)
								}
							>
								<Form.Group className="mb-3" controlId="formBasicText">
									<motion.div
										initial={{ y: 100, opacity: 0 }}
										whileInView={{ y: 0, opacity: 1 }}
										transition={{ duration: 1 }}
									>
										<Form.Label>Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Jhon Doe"
											className="input-box"
											style={{ borderRadius: '30px' }}
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</motion.div>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<motion.div
										initial={{ y: 100, opacity: 0 }}
										whileInView={{ y: 0, opacity: 1 }}
										transition={{ duration: 1 }}
									>
										<Form.Label>Email address</Form.Label>
										<Form.Control
											type="email"
											placeholder="example@gmail.com"
											className="input-box"
											style={{ borderRadius: '30px' }}
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</motion.div>
								</Form.Group>
								<Form.Group
									className="mb-3"
									controlId="exampleForm.ControlTextarea1"
								>
									<motion.div
										initial={{ y: 100, opacity: 0 }}
										whileInView={{ y: 0, opacity: 1 }}
										transition={{ duration: 1 }}
									>
										<Form.Label>Enter Your Message</Form.Label>
										<Form.Control
											as="textarea"
											className="input-box"
											rows={3}
											style={{ borderRadius: '30px' }}
											placeholder="Message"
											value={message}
											onChange={(e) => setMessage(e.target.value)}
										/>
									</motion.div>
								</Form.Group>
								<motion.div
									initial={{ y: 100, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ duration: 1 }}
								>
									<button className="type-1-btn ">Submit</button>
								</motion.div>
							</Form>
							<Modal
								show={modal}
								onHide={handleClose}
								className="mt-5 pt-5 "
							>
								<Modal.Header closeButton>
									<Modal.Title>Thanks for Connecting</Modal.Title>
								</Modal.Header>
							</Modal>
						</Col>
						<Col
							xs={12}
							md={6}
							className="d-flex justify-content-center position-relative"
						>
							<motion.div
								className="contact-information"
								initial={{ y: 100, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ duration: 1 }}
							>
								<h2>Contact Information</h2>
								<p className="mb-0 mt-4">Near Ali Traders, Salarganj</p>
								<p>Bahraich, Uttar Pradesh, India</p>
								<h4 className="mt-4">Call Us : +91 6386294208</h4>
								<p>Feel free to contact us.</p>
								<h3 className="mt-4">Also Connect here</h3>
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
							</motion.div>
							<div
								style={{
									position: 'absolute',
									bottom: -15,
									right: 0,
									width: '50px',
									height: '50px',
									borderRadius: '50%',
									background:
										'linear-gradient(to right, #6e5591 35%, #d51a74 100%)',
								}}
							>
								<div
									style={{
										fontSize: '30px',
										marginLeft: '10px',
										fontWeight: 'bold',
									}}
								>
									<a href="#header" style={{ color: 'white' }}>
										<BsArrowUp />
									</a>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
				<p
					className="text-center my-4 my-md-5 py-3 py-md-5"
					style={{ fontSize: '25px' }}
				>
					&copy; Copyright 2023
				</p>
			</div>
		</>
	);
};

export default Contact;
