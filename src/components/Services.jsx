import React from "react";

import "../assets/styles/services.css"
import servicesData from "../assets/data/servicesData.js";

function Services(){
    return(
        <div className="services" id="services">
            <div className="services-heading">
                <h2>My Services</h2>
            </div>
            <div className="services-container">
                {servicesData.map((service, index)=>{
                    return <div key={index} className="services-format">
                        <h3>{service.index}</h3>
                        <h2>{service.serviceName}</h2>
                        <p>{service.serviceDescription}</p>
                        <div className="readmore">
                            <p>Read More</p>
                            <span>&rarr;</span>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Services;