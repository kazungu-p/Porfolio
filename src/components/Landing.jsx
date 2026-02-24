import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/landing.css";

function Landing() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="landing"
      id="landing"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="landing-page-content-container" variants={item}>
        <img
          src="/images/passport-imag.jpeg"
          alt="profile image"
          className="profile-img"
        />
      </motion.div>

      <motion.span variants={item}>
        ― Kazungu Patrick
      </motion.span>

      <motion.h1 variants={item}>
        Hello, my name is Kazungu. <br /> I'm a Front-End Developer.
      </motion.h1>

      <motion.div className="cta" variants={item}>
        <a href="#contact">
          <div className="hero-connect">Connect with me</div>
        </a>
        <div className="hero-resume">My resume</div>
      </motion.div>
    </motion.div>
  );
}

export default Landing;