import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faIndianRupee, } from "@fortawesome/free-solid-svg-icons";

function Template(_props) {
    return (
        <>
            <div id="right-temp">
                <div className="templates">
                    <div className="tempBox1" id="template-box">
                        <a href='third-page' ><img src={_props.imgsrc} /></a>
                        <div className="contentBox1" id="content-box">
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





