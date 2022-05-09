import React from "react";

const Properties = () => {
    return (
        <div>
            <div className="Properties">
                <h2>Go For Exclusive Properties</h2>
                    <div className="Properties_cards">
                       <div>
                       <div className="Properties_img">
                            <a target="#" href='third-page'>
                            <img src='images/BHK.jpg' alt=" " />
                           </a>
                           <p>Single & Multi Room BHK</p>
                        </div>
                       </div>
                        <div>
                        <div className="Properties_img">
                           <a target="#" href=''>
                            <img src='images/Luxirous.jpg' alt=" " />
                           </a>
                           <p>Luxurious Apartments</p>
                        </div>
                        </div>
                        <div>
                        <div className="Properties_img">
                           <a target="#" href=''>
                            <img src='images/villa.jpg' alt=" " />
                           </a>
                           <p>Villa-Bungalow</p>
                        </div>
                        </div>
                        <div>
                        <div className="Properties_img">
                           <a target="#" href=''>
                           <img src='images/CProperty.jpg' alt=" " />
                           </a>
                           <p>Commercial Properties</p>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Properties;