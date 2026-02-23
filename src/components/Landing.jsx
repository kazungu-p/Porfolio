import React from "react";
import "../assets/styles/landing.css";

function Landing() {

    return (
        <div className="landing" id="landing">

            <div className="landing-page-content-container">
                <img src="/images/passport-imag.jpeg" alt="profile image" className="profile-img"/>
            </div>
            <span>― Kazungu Patrick</span>
            <h1>Hello, my name is Kazungu. <br /> I'm a Front-End Developer.</h1>
            <div className="cta">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>

        </div>

    )
}

export default Landing