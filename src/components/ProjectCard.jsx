import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ProjectCard = (props) => {
	const { code, live, image } = props;
	return (
		<>
			<Col xs={12} lg={6} xl={4}>
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<Card
						style={{
							width: '20rem',
							margin: 'auto',
							// border: 'none',
						}}
					>
						<Card.Img
							variant="top"
							src={image}
							style={{ boxShadow: '5px 5x 5px black' }}
						/>
						<Card.Body className="text-center pt-2">
							<div className="d-flex flex-column flex-md-row">
								<button className="type-1-btn me-3 mb-2 mb-md-0 w-100">
									<a
										href={code}
										style={{ color: 'white', textDecoration: 'none' }}
										target="_blank"
									>
										Code
									</a>
								</button>

								<button className="type-2-btn w-100">
									<a
										href={live}
										style={{ color: 'black', textDecoration: 'none' }}
										target="_blank"
									>
										Live
									</a>
								</button>
							</div>
						</Card.Body>
					</Card>
				</motion.div>
			</Col>
		</>
	);
};

export default ProjectCard;
