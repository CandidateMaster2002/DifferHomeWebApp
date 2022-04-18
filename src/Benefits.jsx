import React from 'react';

const Benefits = () => {
    return (
        <>
            <div className='benefit'>
                <h2>Benefits</h2>
                    <div className='benefit_cards'>
                       <div className="benefit_icon">
                               {/* <a target="#" href='images/checkmark-circle-outline.svg'> */}
                            <img src='images/checkmark-circle-outline.svg' alt=" " />
                           {/* </a> */}
                            <p>Verified Properties</p>
                        </div>
                        <div className="benefit_icon">
                           {/* <a target="#" href='images/file-archive.svg'> */}
                            <img src='images/file-archive.svg' alt=" " />
                           {/* </a> */}
                            <p>Transparent Dealing</p>
                        </div>
                        <div className="benefit_icon">
                           {/* <a target="#" href='images/timer.svg'> */}
                            <img src='images/timer.svg' alt=" " />
                           {/* </a> */}
                            <p>Real-Time<br />Properties</p>
                        </div>
                        <div className="benefit_icon">
                           {/* <a target="#" href='images/door-open.svg'> */}
                            <img src='images/door-open.svg' alt=" " />
                           {/* </a> */}
                            <p>Ready to<br />Move-in</p>
                        </div>
                        <div className="benefit_icon">
                           {/* <a target="#" href='images/wallet.svg'> */}
                            <img src='images/wallet.svg' alt=" " />
                           {/* </a> */}
                            <p>Zero Brokerage Charge</p>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default Benefits;