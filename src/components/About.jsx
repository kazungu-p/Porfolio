import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/about.css";

function About() {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 }, 
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2, 
                ease: "easeOut",
            },
        },
    };

    const leftVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const rightVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <motion.div
            className="about"
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div className="about-heading" variants={containerVariants}>
                <h2>About me</h2>
            </motion.div>

            <div className="about-me-section">
                <motion.div
                    className="about-me-left-section"
                    variants={leftVariants}
                >
                    <img src="/images/passport-imag.jpeg" alt="image of myself" />
                </motion.div>

                <motion.div className="about-right-side" variants={rightVariants}>
                    <div className="about-me">
                        <p>
                            Frontend Developer with real-world deployment experience and a strong React foundation.
                            I build intuitive, responsive systems that solve practical business problems.
                        </p>
                        <p>
                            Passionate about turning complex systems into simple, elegant interfaces.
                            I continuously explore better ways to enhance usability, performance, and scalability.
                        </p>
                    </div>

                    <div className="my-skillset">
                        <div className="skillset">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "80%" }} />
                        </div>
                        <div className="skillset">
                            <p>React Js</p>
                            <hr style={{ width: "65%" }} />
                        </div>
                        <div className="skillset">
                            <p>Javascript</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="skillset">
                            <p>Bootstrap</p>
                            <hr style={{ width: "40%" }} />
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div className="my-achievements" variants={containerVariants}>
                <motion.div className="my-achievement" variants={leftVariants}>
                    <h2>3+</h2>
                    <p>YEARS OF EXPERIENCE</p>
                </motion.div>
                <hr />
                <motion.div className="my-achievement" variants={leftVariants}>
                    <h2>15+</h2>
                    <p>PROJECTS COMPLETED</p>
                </motion.div>
                <hr />
                <motion.div className="my-achievement" variants={leftVariants}>
                    <h2>10+</h2>
                    <p>HAPPY CLIENTS</p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default About;