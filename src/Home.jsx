//library imports
import React, { useState, useEffect } from "react";
import Aos from "aos"; 
import "aos/dist/aos.css";
import * as actionTypes from './redux/actions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBinoculars,
  faClock,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux'


const Home = (props) => {
 
 console.log(props)


  const [propertyTypeArr, setPropertyTypeArr] = useState(new Array(3).fill(1));
  const [state, setState] = useState("all");
  const [city, setCity] = useState("all");

  const handlePropertyTypeArr = (ind) => {
    let temp = [...propertyTypeArr];
    // console.log(temp);
    temp[ind] = 1-temp[ind];
    setPropertyTypeArr(temp);
    //console.log(propertyTypeArr)
  };

  useEffect(() => {
    Aos.init();
  }, []);


  //console.log(state);
  //console.log(city);
  return (

    <>
      <div className="bg_container" id="home_">
        <div className="tagline" data-aos="fade-right" data-aos-duration="2000">
          <p1>Explore Beautiful Houses,</p1>
          <br />
          <p2>Apartments, Villas & More.</p2>
          <br />
          <h5>We prefer your home to be </h5>
          <h2>
            DIFFER<t2> in</t2>
          </h2>
          <h1>
            <strong>DIFFERHOME</strong>
          </h1>
        </div>
        <div className="three_lines_icons">
          <div data-aos="fade-left" data-aos-duration="1000">
            <p>
              <FontAwesomeIcon icon={faClock} /> Real-Time Inventory
            </p>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <p>
              <FontAwesomeIcon icon={faBinoculars} /> Comprehensive Overview
            </p>
          </div>
          <div data-aos="fade-left" data-aos-duration="3000">
            <p>
              <FontAwesomeIcon icon={faUserShield} /> Verified RERA Registration
            </p>
          </div>
        </div>
        <div className="image" />
        {/* <!-- <img src="./images/carousel.jpg" alt=""> --> */}
      </div>

      <div className="searchbox" data-aos="fade-left" data-aos-duration="2000">
        <h4>Looking For :</h4>
        <form action="/filter1" method="get">
  
          <input
            type="checkbox"
            id="apartment"
            name="opt-1"
            houseue="Apartment"
            checked={props.propertyTypeArra[0]}
           onChange={() => props.handlePropertyType(0)}
          />

          <label for="Apartment">Apartment</label>
          <input
            type="checkbox"
            id="villa"
            name="opt-2"
            houseue="Villa"
            checked={propertyTypeArr[1]}
            onChange={() => handlePropertyTypeArr(1)}
          />
          <label for="villa">Villa</label>
          <br />
          <input
            type="checkbox"
            id="plot"
            name="opt-3"
            houseue="Plot"
            checked={propertyTypeArr[2]}
            onChange={() => handlePropertyTypeArr(2)}
          />
          <label for="plot">Plot</label>
          <br />

          <div className="state_name">
            <label for="State">Select State :</label>
            <br />
            <input list="states" name="States" placeholder="States" onChange={(e) => setState(e.target.value)} />
            <datalist id="states">
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
            </datalist>{" "}
            <br />
          </div>

          <div className="city_name">
            <label for="City">Select City :</label>
            <br />
            <input list="cities" name="city" placeholder="City"  onChange={(e) => setCity(e.target.value)} />
          
            <datalist id="cities">
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
            </datalist>{" "}
            <br />
          </div>
          <div className="startbtn">
            <a href="/profile-page" className="start_btn">
              Start
            </a>
          </div>
        </form>
      </div>
      <div className="reponsive_btn">
        <a href="/profile-page" className="rsp_btn">
          Get Started
        </a>
      </div>

      {/* one step solution part with boy sitting on sofa */}


      <div className="one_step_solution">
        <div className="one_step_textpart">
          <h1>One stop solution to your search for dream home</h1>
          <p>
            DifferHome is a one-stop platform for all the activities, either it
            is locating the perfect dream home to building a new one, we provide
            all the services just in here.
          </p>
          <a href="/profile-page" className="button_1">
            Get Started
          </a>
          <a href="#contactus" className="button_2">
            Contact Us
          </a>
        </div>
        <div className="sofa-boy-img">
          <img src="images/Sofa-boy.png" alt="Boy on Sofa" />
        </div>
      </div>
    </>
  );
};


const mapStateToProps=(states)=>{
  return{
    propertyTypeArra:states.propertyTypeArr
  }
}

const mapDispatchToProps=()=>{
  return{
    handlePropertyType:(id)=>dispatchEvent({type:actionTypes.HANDLE_PROPERTY_TYPE,payload:{id:id}})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

