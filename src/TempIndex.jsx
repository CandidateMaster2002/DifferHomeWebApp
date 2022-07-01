import React from "react";
import Template from './Templates';
import './Templates.css';
import Tempdata from './Tempdata.jsx';



const TempIndex = () => {
    return(
        <>
            {Tempdata.map((val) => {
                return (
                    <Template
                        key={val.id}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        address={val.address}
                        bhk={val.bhk}
                        price={val.price}
                    />
                );
            })}
        </>
    );
}



export default TempIndex;
