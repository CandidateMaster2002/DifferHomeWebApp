import React from 'react';
import {useNavigate} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faIndianRupee, } from "@fortawesome/free-solid-svg-icons";

function Template(_props) {
    const navigate = useNavigate();

  const toComponentB=()=>{
navigate('/Third-page',{state:{title:_props.title}});
  }
    return (
        <>
            <div id="right-temp">
                <div className="templates">
                    <div className="tempBox">
                        <a onClick={()=>{toComponentB()}} ><img src={"http://localhost:5000" + _props.imgsrc} alt="Property Image"/>
                        </a>
                        <div className="contentBox">
                            <p className="temp-title">{_props.title}<br />
                                <span>{_props.address}</span></p>
                            <div className="temp-icon">
                                <span><FontAwesomeIcon icon={faBed} /> {_props.bhk}</span>
                                <span><FontAwesomeIcon icon={faIndianRupee} /> {_props.price} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Template;





