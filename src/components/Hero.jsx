import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { motion } from "framer-motion";

import resume from "../assets/new-resume.pdf";
const Hero = () => {
  return (
    <>
      <div className="hero h-100" id="home">
        <Container className="mb-3">
          <Row className="justify-content-center my-1 my-md-5 py-4 py-md-5">
            <Col
              lg={10}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="left-text text-center">
                <motion.div
                  initial={{ x: -1000 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h1 style={{ fontWeight: 500 }}>Hello, It's me</h1>
                </motion.div>
                <motion.div
                  initial={{ x: -1500 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <p>Rehan.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 1.2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <h5>
                    Hi, I'm Rehan, a final-year BCA student about to graduate. I
                    have experience in building front-end web applications with
                    React and am passionate about creating responsive user
                    interfaces. I am open to work opportunities to apply my
                    skills and contribute to exciting projects.
                  </h5>
                </motion.div>
                <motion.div
                  className="btns"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 1.6,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <button className="type-1-btn me-3">
                    <NavLink href="#contactme">Contact Me</NavLink>
                  </button>
                  <button className="type-2-btn">
                    <a
                      href={resume}
                      download
                      style={{
                        color: "black",
                        textDecoration: "none",
                      }}
                    >
                      Download CV
                    </a>
                  </button>
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
        <hr color="black" />
      </div>
    </>
  );
};

export default Hero;
