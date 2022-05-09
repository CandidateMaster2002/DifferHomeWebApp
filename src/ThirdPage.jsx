import React from "react";

const ThirdPage = () => {
    return (
        <>
            <div className="Third-Navbar">
                <div className="third-nav-wrapper">
                    {/* <!-- Navbar Logo --> */}
                    <div className="logo" data-aos="fade-down" data-aos-duration="2000">
                        <img src='images/light DH logo.png' alt='logo' />
                        {/* <a href="" > <img src="./../images/DH logo.png" alt="logo"></a> */}
                        {/* <!-- Logo Placeholder for Inlustration --> */}
                        <a href="#home_"><b>Differ<strong>Home</strong></b></a>
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

                {/* <!-- Menu Icon --> */}
                <div className="menuIcon">
                    <span className="icon icon-bars"></span>
                    <span className="icon icon-bars overlay"></span>
                </div>
            </div>
            <div className="about-property">
                <h2>Property Name</h2>
            </div>

        </>
    );
};

export default ThirdPage;
