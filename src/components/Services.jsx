import React from "react";
import { motion } from "framer-motion";

import "../assets/styles/services.css";
import servicesData from "../assets/data/servicesData.js";

function Services() {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };


  const cardVariants = {
    hidden: (custom) => ({
      opacity: 0,
      x: custom.x,
      y: custom.y,
      scale: 0.9,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="services"
      id="services"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="services-heading">
        <h2>What I Do</h2>
      </div>

      <div className="services-container">
        {servicesData.map((service, index) => {
          const direction = {
            x: index % 2 === 0 ? -50 : 50,
            y: index < 2 ? -50 : 50,
          };

          return (
            <motion.div
              key={index}
              className="services-format"
              custom={direction}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3>{service.index}</h3>
              <h2>{service.serviceName}</h2>
              <p>{service.serviceDescription}</p>
              <div className="readmore">
                <p>Read More</p>
                <span>&rarr;</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Services;