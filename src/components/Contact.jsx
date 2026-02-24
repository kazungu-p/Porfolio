import React from "react";
import { motion } from "framer-motion";

import "../assets/styles/contact.css";

function Contact() {

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-heading">
        <h2>Get in touch</h2>
      </div>

      <div className="contact-section">
        <motion.div
          className="contact-left"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Let's talk</h2>
          <p>
            If you have a question, an idea, or just want to connect, I’d love to hear from you. Feel free to reach out anytime—I’m always happy to help and will get back to you as soon as possible.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="/images/envelope-regular-full.svg" alt="email icon" />
              <p>patrickkazungu.me7@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="/images/phone-solid-full.svg" alt="phone icon" />
              <p>+254 7488 74725</p>
            </div>
            <div className="contact-detail">
              <img src="/images/location-arrow-solid-full.svg" alt="location icon" />
              <p>Meru, Kenya</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-right"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <form>
            <label htmlFor="Your Name">Name</label>
            <input type="text" placeholder="Your name goes here" name="name" />
            <label htmlFor="Your Email">Email</label>
            <input type="email" placeholder="Your email goes here" name="email" />
            <label htmlFor="Your Message">Message</label>
            <textarea name="message" rows="8" placeholder="Message goes here"></textarea>
            <button type="submit" className="contact-submit">Submit Message</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;