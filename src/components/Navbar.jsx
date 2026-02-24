import React, { useState } from "react";
import "../assets/styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("home");

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }
    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <div className="navbar">
            <Link to="/">
                <img src="/images/logo.svg" alt="website logo" className="logo" />
            </Link>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <Link onClick={() => { setActiveMenu("home"); closeMenu() }} className={activeMenu === "home" ? "active" : ""}>Home</Link>
                <a href="#about" onClick={() => { setActiveMenu("about"); closeMenu() }} className={activeMenu === "about" ? "active" : ""}>About</a>
                <a href="#services" onClick={() => { setActiveMenu("services"); closeMenu() }} className={activeMenu === "services" ? "active" : ""}>Services</a>
                <a href="#portfolio" onClick={() => { setActiveMenu("portfolio"); closeMenu() }} className={activeMenu === "portfolio" ? "active" : ""}>Portfolio</a>
                <a href="#contact" onClick={() => { setActiveMenu("contact"); closeMenu() }} className={activeMenu === "contact" ? "active" : ""}>Contact</a>
            </ul>
            <div className="nav-right">
                <a href="#contact"><button>Connect With Me</button></a>

                <div className="hamburger" onClick={toggleMenu}>
                    {menuOpen ? "\u2715" : "\u2630"}
                </div>

            </div>

        </div>
    )
}

export default Navbar