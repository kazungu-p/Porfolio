import React from "react";
import "../assets/styles/about.css"

function About() {
    return (
        <div className="about" id="about">
            <div className="about-heading">
                <h2>About me</h2>
            </div>
            <div className="about-me-section">
                <div className="about-me-left-section">
                    <img src="/images/passport-imag.jpeg" alt="image of myself" />
                </div>
                <div className="about-right-side">
                    <div className="about-me">
                        <p>Frontend Developer with real-world deployment experience and a strong React foundation.I build intuitive, responsive systems that solve practical business problems.</p>
                        <p>Passionate about turning complex systems into simple, elegant interfaces.I continuously explore better ways to enhance usability, performance, and scalability.</p>
                    </div>
                    <div className="my-skillset">
                        <div className="skillset"><p>HTML & CSS</p><hr style={{ width: "70%" }} /></div>
                        <div className="skillset"><p>React Js</p><hr style={{ width: "65%" }} /></div>
                        <div className="skillset"><p>Javascript</p><hr style={{ width: "50%" }} /></div>
                        <div className="skillset"><p>Bootstrap</p><hr style={{ width: "40%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="my-achievements">
                <div className="my-achievement">
                    <h2>3+</h2>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="my-achievement">
                    <h2>15+</h2>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="my-achievement">
                    <h2>10+</h2>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>

        </div>
    )
}
export default About;