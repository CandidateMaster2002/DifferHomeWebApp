import React, {useEffect} from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const GainExperience = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
        <div className='GainExperience'>
                <h2>Gain Experience</h2>
                    <div className='Gain_Exp'>
                       <div className="Exp_img" data-aos="zoom-in">
                               {/* <a target="#" href='images/checkmark-circle-outline.svg'> */}
                            <img src='images/everythingImg.png' alt=" " height="50%" width="60%" />
                           {/* </a> */}
                            <h4>Everything is Here</h4>
                            <p>Premium apartment & villas or<br />
                            buying land-Its all here in one</p>
                       </div>
                        <div className="Exp_img" data-aos="zoom-in">
                           {/* <a target="#" href='images/file-archive.svg'> */}
                            <img src='images/commisionImg.png' alt=" " height="50%" width="70%" />
                           {/* </a> */}
                            <h4>Zero Commission</h4>
                            <p>Free of any kind of<br />commission charge</p>
                        </div>
                        <div className="Exp_img" data-aos="zoom-in">
                           {/* <a target="#" href='images/timer.svg'> */}
                            <img src='images/consultImg.png' alt=" " height="50%" width="60%"/>
                           {/* </a> */}
                            <h4>Free Consultaion</h4>
                            <p>24/7 Free consultation available<br />
                            for your Dream Home</p>
                        </div>
                    </div>
         </div>
    
    </>
  )
};

export default GainExperience;