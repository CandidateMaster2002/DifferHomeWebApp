import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const CityImg = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className='city_img_part'>
        <div className='images_1'>
          <div className="text-container1">
            <img src='images/city1.jpg' alt=" " />

            <div className="hover_text">
              <div className="text">Atulya, Ajmer Road</div>
            </div>
          </div>
          <div className="text-container2">
            <img src='images/city2.jpg' alt=" " />
            <div className="hover_text">
              <div className="text">Malviya Nagar</div>
            </div>
          </div>
        </div>
        <div className='images_2'>
          <div className="text-container3">
            <img src='images/city3.jpg' alt=" " />
            <div className="hover_text">
              <div className="text">Atulya, Ajmer Road</div>
            </div>
          </div>
          <div className="text-container4">
            <img src='images/city4.jpg' alt=" " />
            <div className="hover_text">
              <div className="text">Malviya Nagar</div>
            </div>
          </div>
        </div>
        <div className='city-text' data-aos="fade-left">
          <h1>Don't Stop Here, Explore Different Localities/Cities</h1>
          <p>Get-Set & GO. Expand your search for your dream
            home from your local neighborhood to every city across
            the nation and do not stop until you have found your
            dream home</p>

          <a href="profile-page" className="button_1">Explore Properties</a>
        </div>

      </div>
      <div className='city_img_responsive'>
        <h3>Explore Properties</h3>
        <div className="responsive_img_scroll" scrolldelay="1000">
          <marquee behavior="alternate" direction="right">
            <div className="img_p1" id="cityImg">
              <img src='images/city1.jpg' alt=" " />
              <p>Atulya, Ajmer Road</p>
            </div>
            <div className="img_p2" id="cityImg">
              <img src='images/city2.jpg' alt=" " />
              <p>Malviya Nagar</p>
            </div>
            <div className="img_p3" id="cityImg">
              <img src='images/city3.jpg' alt=" " />
              <p>Atulya, Ajmer Road</p>
            </div>
            <div className="img_p4" id="cityImg">
              <img src='images/city4.jpg' alt=" " />
              <p>Malviya Nagar</p>
            </div>
          </marquee>
        </div>
      </div>
    </div>
  )
}

export default CityImg;