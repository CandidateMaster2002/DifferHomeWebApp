import { faBed, faPieChart, faTag, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useLocation} from 'react-router-dom';



const ThirdPage = () => {
    const location = useLocation();
    return (
        <>
            <div className="Third-Navbar">
                <div className="third-nav-wrapper">
                    {/* <!-- Navbar Logo --> */}
                    <div className="logo" id="whitelogo">
                        <img src='images/light DH logo.png' alt='logo' />
                        {/* <a href="" > <img src="./../images/DH logo.png" alt="logo"></a> */}
                        {/* <!-- Logo Placeholder for Inlustration --> */}
                        <a href="/"><b>Differ<strong>Home</strong></b></a>
                    </div>

                    {/* <!-- Navbar Links --> */}

                    <div>
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

                {/* <!-- Menu Icon --> */}
                <div className="menuIcon">
                    <span className="icon icon-bars"></span>
                    <span className="icon icon-bars overlay"></span>
                </div>
            </div>



            <div className="about-property">
                <div className="img-map">
                    <div className="property-images">

                    </div>
                    <div className="property-map">

                    </div>
                </div>
                <div className="mapBtn">
                    <a href="">View Map</a>
                </div>
                <div className="prop-details">
                    <h2>{location.state.title}</h2>
                    <p>Address of the property from state to particular locality and pin code too.</p>
                    <div className="icons">
                        <div className="area" id="icon">
                            <h5><FontAwesomeIcon icon={faPieChart} /> Area</h5>
                            <p>2346 Sqft.</p>
                        </div>
                        <div className="price" id="icon">
                            <h5><FontAwesomeIcon icon={faTag} /> Price</h5>
                            <p>75 Lacs</p>
                        </div>
                        <div className="bhk" id="icon">
                            <h5><FontAwesomeIcon icon={faBed} /> BHK</h5>
                            <p>3 Bedrooms, 2 Bathrooms</p>
                        </div>
                    </div>
                    <div className="about-prop">
                        <h2>About</h2>
                        <p>A small paragraph about the property or may be a short summary
                            related the project basically a short description. Three to four line
                            would be sufficient for the paragraph, so it might be good way if we can
                            restrict it by some minimum character.</p>
                    </div>
                    <div className="prop-status">
                        <div className="three-lines">
                            <div id="status"><p>Carpet Area: 2190 Sqft.</p></div>
                            <div id="status"><p>Price/Sqft.:Rs 1230</p></div>
                            <div id="status"><p>RERA Registered: Yes</p></div>
                        </div>
                        <p>Age of the Property: 2 Years</p>
                        <p>Status: Move-In/ Under Construction</p>
                        <p>Furnishing Status: Unfurnished</p>
                    </div>
                    <div className="layout">
                        <h5>3D Layouts</h5>
                        <div className="layout-img">
                            <div className="img1" id="img"></div>
                            <div className="img2" id="img"></div>
                            <div className="img3" id="img"></div>
                        </div>
                    </div>
                    <div className="floor-plan">
                        <h5>Floor Plan</h5>
                        <div className="floor-img">
                            <div className="img1" id="img"></div>
                            <div className="img2" id="img"></div>
                        </div>
                    </div>
                    <div className="brochure-btn">
                        <a href="">Brochure</a>
                    </div>
                </div>
            </div>

            {/* Footer */}

            <footer className="third-footer" >
                <div className="footerContent" id='contactus'>
                    <div className="about">
                        <h2><a href="home_" > <img src='images/light DH logo.png' alt="logo" /></a>
                            <strong>DifferHome</strong></h2>
                        <p>Differhome is one stop solution to discover and<br />the perfect dream home for you.<br />
                            Premium apartments, villas, bungalows and<br />much more are available in a single platform.</p>
                        <h5>About Us<br />FAQs</h5>
                    </div>
                    <div className="explore">
                        <h3>Explore</h3>
                        <p>Apartments</p>
                        <p>Villas / Bungalows</p>
                        <p>Land / Plots</p>
                        <p>Residential Properties</p>
                        <p>Commercial Properties</p>
                        <p>Ready to Move-In</p>
                    </div>
                    <div className="contact">
                        <h3>Contact Us</h3>
                        <div className="contact-info">
                            <span><FontAwesomeIcon icon={faEnvelope} /></span>
                            <a href="mailto:info@differhome.com"> info@differhome.com</a>
                        </div>
                        <div className="contact-info">
                            <span><FontAwesomeIcon icon={faPhone} /></span>
                            <a href="tel:+919351822152"> (+91) 93518 22152 </a>
                        </div>
                        <div className="Footericons">
                            <a href="#"><img src='images/Icon awesome-facebook.png' /></a>
                            <a href="#"><img src='images/Icon feather-instagram.png' /></a>
                            <a href="#"><img src='images/Icon awesome-twitter.png' /></a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright@ 2022. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default ThirdPage;
