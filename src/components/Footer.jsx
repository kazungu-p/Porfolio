import React from "react";

import "../assets/styles/footer.css";

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <div className="footer" id="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src="/images/logo.svg" alt="logo" />
                    <p>I’m a passionate Frontend Developer specializing in React and modern JavaScript. I enjoy building responsive, user-focused web applications with clean design and efficient code.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src="/images/user-regular-full.svg" alt="user icon" />
                        <input type="email" placeholder="Email goes here" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left"> © {currentYear} Kazungu Patrick. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;