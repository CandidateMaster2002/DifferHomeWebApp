//library imports
import React, {useEffect} from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars, faClock, faUserShield } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    useEffect(() => {
        Aos.init();
      }, []);

    return (
        <>
            <div className="bg_container" id="home_">
                    <div className="tagline" data-aos="fade-right" data-aos-duration="2000">
                        <p1>Explore Beautiful Houses,</p1><br />
                        <p2>Apartments, Villas & More.</p2><br />
                        <h5>We prefer your home to be </h5>
                        <h2>DIFFER<t2> in</t2></h2>
                        <h1><strong>DIFFERHOME</strong></h1>

                    </div>
                    <div className="three_lines_icons">
                        <div data-aos="fade-left" data-aos-duration="1000">
                            <p><FontAwesomeIcon icon={faClock} /> Real-Time Inventory</p></div>
                        <div data-aos="fade-left" data-aos-duration="2000">
                            <p><FontAwesomeIcon icon={faBinoculars} /> Comprehensive Overview</p></div>
                        <div data-aos="fade-left" data-aos-duration="3000">
                            <p><FontAwesomeIcon icon={faUserShield} /> Verified RERA Registration</p></div>
                    </div>
                    <div className="image" />
                        {/* <!-- <img src="./images/carousel.jpg" alt=""> --> */}
           </div>

           <div className="searchbox" data-aos="fade-left" data-aos-duration="2000">
              <h4>Looking For :</h4>
              <form action="/action_page.php">
                  <input type="radio" id="apartment" name="opt-1" value="Apartment" />
                  <label for="Apartment">Apartment</label>
                  <input type="radio" id="villa" name="opt-2" value="Villa" />
                  <label for="villa">Bungalow/Villa</label><br />
                  <input type="radio" id="plot" name="opt-3" value="Plot" />
                  <label for="plot">Plot/Villa</label><br />
                  
                <div className="state_name">
                     <label for="State">Select State :</label><br />
                     <input list="states" name="States" placeholder="States" />
                     <datalist id="states" >
                     {/* <option value="Andhra Pradesh" />
                     <option value="Arunachal Pradesh" />
                     <option value="Assam" />
                     <option value="Bihar" />
                     <option value="Chhattisgarh" />
                     <option value="Goa" />
                     <option value="Gujarat" />
                     <option value="Haryana" />
                     <option value="Himachal Pradesh" />
                     <option value="Jharkhand" />
                     <option value="Karnataka" />
                     <option value="Kerala" />
                     <option value="Madhya Pradesh" />
                     <option value="Maharashtra" />
                     <option value="Manipur" />
                     <option value="Meghalaya" />
                     <option value="Mizoram" />
                     <option value="Nagaland" />
                     <option value="Odisha" />
                     <option value="Punjab" /> */}
                     <option value="Rajasthan" />
                     {/* <option value="Sikkim" />
                     <option value="Tamil Nadu" />
                     <option value="Telangana" />
                     <option value="Tripura" />
                     <option value="Uttar Pradesh" />
                     <option value="Uttarakhand" />
                     <option value="West Bengal" /> */}

                     </datalist> <br />
                </div>

                <div className="city_name">
                     <label for="City">Select City :</label><br />
                     <input list="cities" name="city" placeholder="City" />
                     <datalist id="cities" >
                     {/* <option value="Amaravati" />
                     <option value="Itanagar" />
                     <option value="Dispur" />
                     <option value="Patna" />
                     <option value="Raipur" />
                     <option value="Panaji" />
                     <option value="Gandhinagar" />
                     <option value="Chandigarh" />
                     <option value="Shimla" />
                     <option value="Ranchi" />
                     <option value="Bengaluru" />
                     <option value="Thiruvananthapuram" />
                     <option value="Bhopal" />
                     <option value="Mumbai" />
                     <option value="Imphal" />
                     <option value="Shillong" />
                     <option value="Aizawl" />
                     <option value="Kohima" />
                     <option value="Bhubaneswar" />
                     <option value="Chandigarh" /> */}
                     <option value="Jaipur" />
                     {/* <option value="Gangtok" />
                     <option value="Chennai" />
                     <option value="Hyderabad" />
                     <option value="Agartala" />
                     <option value="Lucknow" />
                     <option value="Dehradun" />
                     <option value="Kolkata" /> */}
                     <option value="Jodhpur" />
                     <option value="Udaipur" />
                     <option value="Ajmer" />
                     <option value="Kota" />
                     <option value="Alwar" />


                     </datalist> <br />
                </div>
                <a href="under_maintainance" class="start_btn">Start</a>
              </form> 
           </div>
           <div className="reponsive_btn">
            <a href="under_maintainance" class="rsp_btn">Get Started</a>
           </div>

           {/* one step solution part with boy sitting on sofa */}

           <div className="one_step_solution">
               <div className="one_step_textpart">
                   <h1>
                   One stop solution to your search for dream home
                   </h1>
                   <p>
                   DifferHome is a one-stop platform for all the activities,
                   either it is <br />locating the perfect dream home to building
                   a new one, we provide <br />all the services just in here.
                   </p>
                   <a href="under_maintainance" class="button_1">Get Started</a>
                   <a href="#contactus" class="button_2">Contact Us</a>
               </div>
                <div className="sofa-boy-img">
                    <img src='images/sofa-boy.png' alt="Boy on Sofa" />
                </div>
           </div>

        </>
    )
}

export default Home;