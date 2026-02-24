import React from "react";
import { motion } from "framer-motion";

import "../assets/styles/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemHover = { scale: 1.05, color: "#6E026F" }; 

  return (
    <motion.div
      className="footer"
      id="footer"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="footer-top">
        <motion.div className="footer-top-left" whileHover={itemHover}>
          <img src="/images/logo.svg" alt="logo" />
          <p>
            I’m a passionate Frontend Developer specializing in React and modern
            JavaScript. I enjoy building responsive, user-focused web applications
            with clean design and efficient code.
          </p>
        </motion.div>
        <motion.div className="footer-top-right" whileHover={itemHover}>
          <div className="footer-email-input">
            <img src="/images/user-regular-full.svg" alt="user icon" />
            <input type="email" placeholder="Email goes here" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </motion.div>
      </div>

      <hr />

      <motion.div className="footer-bottom" whileHover={itemHover}>
        <p className="footer-bottom-left">© {currentYear} Kazungu Patrick. All rights reserved</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Footer;