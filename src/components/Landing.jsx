import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/landing.css";

function Landing() {
  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div className="landing" id="landing">
      <motion.div
        className="landing-page-content-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={itemVariants}
      >
        <img
          src="/images/passport-imag.jpeg"
          alt="profile image"
          className="profile-img"
        />
      </motion.div>

      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={itemVariants}
      >
        ― Kazungu Patrick
      </motion.span>

      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={itemVariants}
      >
        Hello, my name is Kazungu. <br /> I'm a Front-End Developer.
      </motion.h1>

      <motion.div
        className="cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={itemVariants}
      >
        <a href="#contact"><div className="hero-connect">Connect with me</div></a>
        
        <div className="hero-resume">My resume</div>
      </motion.div>
    </motion.div>
  );
}

export default Landing;