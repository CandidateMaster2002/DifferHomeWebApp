import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCaretDown, faIndianRupee, faSearch } from "@fortawesome/free-solid-svg-icons";



const SecondPgNavFiltr = () => {
    // function sortlist() {
    //     document.getElementById("mySortlist").classList.toggle("show");
    //   }

    /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
    // function resDropFn() {
    //     document.getElementById("resDropdown").classList.toggle("show");
    // }

    // // Close the dropdown if the user clicks outside of it
    // window.onclick = function (e) {
    //     if (!e.target.matches('.resdropbtn')) {
    //         var resDropdown = document.getElementById("resDropdown");
    //         if (resDropdown.classList.contains('show')) {
    //             resDropdown.classList.remove('show');
    //         }
    //     }
    // }


    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div className="Sec-Navbar">
                <div className="sec-nav-wrapper">
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
                            <div class="search-container">
                                <form action="/action_page.php">
                                    <a href="#home_"><FontAwesomeIcon icon={faSearch} /></a>
                                    <input id="search" type="text" placeholder="Enter city, state, locality, pincode" name="search" />
                                </form>
                            </div>
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

            <div className="filter-header">
                <div className="filter_heading">
                    <h5>Filters</h5>
                </div>
                <div className="quote">
                    <h3>Find Your Dream Home</h3>
                    <p>32 Properties Found</p>
                </div>
                <div className="sortby_btn">
                    {/* <button onclick={sortlist()} class="sortbtn">Dropdown</button> */}
                    {/* <div id="mySortlist" class="dropdown-content"> */}
                    {/* <a href="#">Price</a> */}
                    {/* </div> */}
                </div>
            </div>

            <div className="filter_temp">
                <div id="left-filter">
                    <form>
                        <div className="areaType">
                            <p className="title">Area Type</p>
                            <div className="residental_dropdown">
                                <button className="resdropbtn" /*onclick={resDropFn()}*/ >Residental
                                    <span><FontAwesomeIcon icon={faCaretDown} /></span></button>
                                {/* <div className="dropdown-content" id="resDropdown">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
                            </div>
                        </div>
                        <div className="propertyType">
                            <p className="title">Property Type</p>
                            <div className="propIcons">
                                <div className="Icon">
                                    <a href="#"> <img src='images/apartmentIcon.png' alt=" " />
                                        <p className="iconName">Apartments</p> </a>
                                </div>
                                <div className="Icon">
                                    <a href="#"> <img src='images/bunglowIcon.png' alt=" " />
                                        <p className="iconName">Bungalow</p> </a>
                                </div>
                                <div className="Icon">
                                    <a href="#"> <img src='images/plotIcon.png' alt=" " />
                                        <p className="iconName">Plot/Villa</p> </a>
                                </div>
                            </div>
                        </div>
                        <div className="Area">
                            <p className="title">Area</p>
                            <input className="range-set" type="range" name="" id="" />
                            <div className="minMax">
                                <div className="min"><label className="titleMin">Min</label>
                                    <input type="number" name="" id="" value="1" />
                                </div>
                                <div className="max"><label className="titleMax">Max</label>
                                    <input type="number" name="" id="" value="1000000" />
                                </div>
                            </div>

                        </div>
                        <hr />
                        <div className="Budget">
                            <p className="title">Budget<span>sqft.</span></p>
                            <input className="range-set" type="range" name="" id="" />
                            <div className="minMax">
                                <div className="min"><label className="titleMin">Min</label>
                                    <input type="number" name="" id="" value="1" />
                                </div>
                                <div className="max"><label className="titleMax">Max</label>
                                    <input type="number" name="" id="" value="1000000" />
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div className="bhk">
                            <p className="title">BHKs</p>
                            <div className="bhkTypes">
                                <label className="btype">1</label>
                                <label className="btype">2</label>
                                <label className="btype">3</label>
                                <label className="btype">4</label>
                                <label className="btype">5+</label>
                            </div>
                        </div>

                        <hr />
                        <div className="propertyAge">
                            <p className="title">Property Age</p>
                            <div className="ageChecks">
                                <div className="check1"><input type="checkbox" name="" id="" /><label>0-2 Years</label></div>
                                <div className="check1"><input type="checkbox" name="" id="" /><label>2-5 Years</label></div>
                                <div className="check1"><input type="checkbox" name="" id="" /><label>5-10 Years</label></div>
                                <div className="check1"><input type="checkbox" name="" id="" /><label>10+ Years</label></div>
                            </div>
                        </div>

                        <hr />
                        <div className="propertyStatus">
                            <p className="title">Property Status</p>
                            <div className="statusBox">
                                <div className="status1">
                                    <a href=""><p>Ready to Move</p></a>
                                </div>
                                <div className="status1">
                                    <a href=""><p>Under Construction</p></a>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div className="furnished">
                            <button className="furnished-dropbtn" /*onclick={DropFn()}*/ >Furnished
                                <span><FontAwesomeIcon icon={faCaretDown} /></span></button>
                            {/* <div className="furnished-dropdown-content" id="fur-Dropdown">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div> */}
                        </div>
                    </form>
                </div>




                <div id="right-temp">
                    <div className="temp-3-row">
                        <div className="templates">
                            <div className="tempBox1" id="template-box">
                                <div className="contentBox1" id="content-box">
                                    <p className="temp-title">Gokul Apartment<br />
                                        <span>Manipur Colony, Manhattan, Dng...</span></p>
                                    <div className="temp-icon">
                                        <span><FontAwesomeIcon icon={faBed} /> 3 </span>
                                        <span><FontAwesomeIcon icon={faIndianRupee} /> 75L </span>
                                    </div>
                                </div>
                            </div>
                            <div className="tempBox2" id="template-box">
                                <div className="contentBox2" id="content-box">
                                    <p className="temp-title">Gokul Villa<br />
                                        <span>Manipur Colony, Manhattan, Dng...</span></p>
                                        <div className="temp-icon">
                                        <span><FontAwesomeIcon icon={faBed} /> 3 </span>
                                        <span><FontAwesomeIcon icon={faIndianRupee} /> 75L </span>
                                    </div>
                                </div>
                            </div>
                            <div className="tempBox3" id="template-box">
                                <div className="contentBox3" id="content-box">
                                    <p className="temp-title">Gokul Bungalow<br />
                                        <span>Manipur Colony, Manhattan, Dng...</span></p>
                                        <div className="temp-icon">
                                        <span><FontAwesomeIcon icon={faBed} /> 3 </span>
                                        <span><FontAwesomeIcon icon={faIndianRupee} /> 75L </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="templates">
                            <div className="tempBox1" id="template-box">
                                <div className="contentBox1" id="content-box">
                                    <p className="temp-title">Gokul Apartment<br />
                                        <span>Manipur Colony, Manhattan, Dng...</span></p>
                                    <div className="temp-icon">
                                        <span><FontAwesomeIcon icon={faBed} /> 3 </span>
                                        <span><FontAwesomeIcon icon={faIndianRupee} /> 75L </span>
                                    </div>
                                </div>
                            </div>
                            <div className="tempBox2" id="template-box">
                                <div className="contentBox2" id="content-box">
                                    <p className="temp-title">Gokul Villa<br />
                                        <span>Manipur Colony, Manhattan, Dng...</span></p>
                                        <div className="temp-icon">
                                        <span><FontAwesomeIcon icon={faBed} /> 3 </span>
                                        <span><FontAwesomeIcon icon={faIndianRupee} /> 75L </span>
                                    </div>
                                </div>
                            </div>
                            <div className="tempBox3" id="template-box">
                                <div className="contentBox3" id="content-box">
                                    <p className="temp-title">Gokul Bungalow<br />
                                        <span>Manipur Colony, Manhattan, Dng...</span></p>
                                        <div className="temp-icon">
                                        <span><FontAwesomeIcon icon={faBed} /> 3 </span>
                                        <span><FontAwesomeIcon icon={faIndianRupee} /> 75L </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
};

export default SecondPgNavFiltr;