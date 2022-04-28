// import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';


const Navbar = () => {
    
    return (
        <>
            <nav id="navbar">
                <div className="nav-wrapper">
                    {/* <!-- Navbar Logo --> */} 
                    <div  className="logo" data-aos="fade-down" data-aos-duration="2000">
                    <img src='images/DH logo.png' alt='logo' />
                        {/* <a href="" > <img src="./../images/DH logo.png" alt="logo"></a> */}
                        {/* <!-- Logo Placeholder for Inlustration --> */}
                        <a href="#home">
                        <b> Differ<strong>Home</strong></b></a>
                    </div>

                    {/* <!-- Navbar Links --> */}

                    <div data-aos="fade-down" data-aos-duration="2000">
                        <ul id="menu">
                            <li><a href="#home_">Home</a></li>
                            {/* <!----> */}
                            <li><a href="#about-section">About</a></li>
                            {/* <!----> */}
                            <li><a href="under_maintainance">Services</a></li>
                            {/* <!----> */}
                            <li><a href="#contactus">Contact US</a></li>
                        </ul>
                    </div>
                </div>
            </nav>


            {/* <!-- Menu Icon --> */}
            {/* <div className="menuIcon">
                <span><FontAwesomeIcon icon={faBars} /></span>
                <span><FontAwesomeIcon icon={faClose} /></span>
            </div>


            <div className="overlay-menu">
                <ul id="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-section">About</a></li>
                    <li><a href="under_maintainance">Contact US</a></li>
                    <li><a href="#contactus">Services</a></li>
                </ul>
            </div> */}
        </>
    )
}

export default Navbar;