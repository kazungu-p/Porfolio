import React, {useState} from "react";
import "../assets/styles/navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="navbar">

            <img src="/images/logo.svg" alt="website logo" className="logo" />

            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>

            <button>Connect With Me</button>

            <div className="hamburger" onClick={toggleMenu}>
                {menuOpen ? "\u2715" : "\u2630"}
            </div>

        </div>
    )
}

export default Navbar