import React, { useState, useEffect } from "react";
import TempIndex from "./TempIndex";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import context from "./Context";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCaretDown,
  faIndianRupee,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const SecondPgNavFiltr = () => {
  const [houses, setHouses] = useState([]);
  const [fullHouses, setFullHouses] = useState([]);
  const [search, setSearch] = useState("");
  const [budget, setBudget] = React.useState([1, 100000]);
  const [area, setArea] = React.useState([1, 100000]);
  const [bhk, setBhk] = useState(-1);
  const [propertyType, setPropertyType] = useState("all");
  const [propertyAge, setPropertyAge] = useState(new Array(4).fill(1));
  const [propertyStatus, setPropertyStatus] = useState("all");
  const [areaType, setAreaType] = useState(new Array(3).fill(1));
  const [furnished, setFurnished] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allProject")
      .then((res) => {
        //      console.log((res.data[0]))
        setHouses(res.data);
        setFullHouses(res.data);
        //console.log(houses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    //    console.log(houses);

    let tempHouses = [...fullHouses];

    tempHouses = tempHouses.filter((house) => {
      let aType = house.areaType;

      if (areaType[0] === 1 && aType === "residential") {
        return 1;
      }

      if (areaType[1] == 1 && aType === "commercial") {
        return 1;
      }

      if (areaType[2] == 1 && aType === "resi-com") {
        return 1;
      }
      return 0;
    });

    if (search !== "") {
      tempHouses = tempHouses.filter((house) => {
        let flag = 0;
        let state = house.state.toLowerCase();
        let city = house.city.toLowerCase();
        let lSearch = search.toLocaleLowerCase();

        if (state.includes(lSearch) || city.includes(lSearch)) return 1;
        return 0;
      });
    }

    tempHouses = tempHouses.filter((house) => {
      if (house.price >= budget[0] && house.price <= budget[1]) return 1;

      return 0;
    });

    tempHouses = tempHouses.filter((house) => {
      if (house.area >= area[0] && house.price <= area[1]) return 1;
      return 0;
    });

    if (propertyType !== "all")
      tempHouses = tempHouses.filter((house) => {
        return house.propertyType == propertyType;
      });

    if (bhk != -1)
      tempHouses = tempHouses.filter((house) => {
        console.log(house.bedrooms);
        console.log(bhk);
        return house.bedrooms == bhk;
      });

    tempHouses = tempHouses.filter((house) => {
      let pAge = house.age;
      if (propertyAge[0] == 1 && pAge >= 0 && pAge < 2) {
        return 1;
      }
      if (propertyAge[1] == 1 && pAge >= 2 && pAge < 5) {
        return 1;
      }
      if (propertyAge[2] == 1 && pAge >= 5 && pAge < 10) {
        return 1;
      }
      if (propertyAge[3] == 1 && pAge >= 10) {
        return 1;
      }
      return 0;
    });

    // if (propertyStatus != "all") {
    //   console.log(propertyStatus);
    //   console.log("nn");
    //   tempHouses = tempHouses.filter((house) => {
    //     return house.status == propertyStatus;
    //   });
    // }
    // tempHouses = tempHouses.filter((house) => {
    //   if(propertyStatus[0]=='a') return 1;
    //   if( propertyStatus[0]=='u' && house.status[0]=='u' ) return 1;
    //   if( propertyStatus[0]=='r' && house.status[0]=='r' ) return 1;


    //     return 0;
    //   });
   
    tempHouses = tempHouses.filter((house) => {
      return house.furnished == furnished;
    });

    setHouses(tempHouses);
  }, [
    search,
    areaType,
    budget,
    area,
    propertyType,
    bhk,
    propertyAge,
     propertyStatus,
    furnished,
  ]);

  const handlebhk = (b) => {
    setBhk(b);
    // console.log(bhk);
  };

  const handlePropertyType = (PType) => {
    setPropertyType(PType);
    console.log(propertyType)
  };

  const handlePropertyAge = (ind) => {
    let temp = [...propertyAge];
    temp[ind] = 1 - temp[ind];
    setPropertyAge(temp);
  };

  const handlePropertyStatus = (ptype) => {
    setPropertyType(ptype);
  };

  const handleAreaType = (ind) => {
    let temp = [...areaType];
    temp[ind] = 1 - temp[ind];
    setAreaType(temp);
    console.log(areaType);
  };

  const budgetRangeSelector = (event, newValue) => {
    setBudget(newValue);
  };

  const areaRangeSelector = (event, newValue) => {
    setArea(newValue);
  };

  return (
    <context.Provider value={houses}>
      <>
        <div className="Sec-Navbar">
          <div className="sec-nav-wrapper">
            {/* <!-- Navbar Logo --> */}
            <div className="logo" data-aos="fade-down" data-aos-duration="2000">
              <img src="images/light DH logo.png" alt="logo" />
              {/* <a href="" > <img src="./../images/DH logo.png" alt="logo"></a> */}
              {/* <!-- Logo Placeholder for Inlustration --> */}
              <a href="/">
                <b>
                  Differ<strong>Home</strong>
                </b>
              </a>
            </div>

            {/* <!-- Navbar Links --> */}

            <div data-aos="fade-down" data-aos-duration="2000">
              <ul id="menu">
                <div className="search-container">
                  <form action="/action_page.php">
                    <a href="#home_">
                      <FontAwesomeIcon icon={faSearch} />
                    </a>
                    <input
                      id="search"
                      type="text"
                      placeholder="Enter city, state, locality, pincode"
                      name="search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </form>
                </div>
                <li>
                  <a href="#home_">Home</a>
                </li>
                {/* <!----> */}
                <li>
                  <a href="#about-section">About</a>
                </li>
                {/* <!----> */}
                <li>
                  <a href="under_maintainance">Services</a>
                </li>
                {/* <!----> */}
                <li>
                  <a href="#contactus">Contact US</a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Menu Icon --> */}
          <div className="menuIcon">
            <span className="icon icon-bars"></span>
            <span className="icon icon-bars overlay"></span>
          </div>
        </div>

        <div className="filterHeading-parent">
          <div className="filter-header">
            <div className="filter_heading">
              <h5>Filters</h5>
            </div>
            <div className="quote">
              <h3>Find Your Dream Home</h3>
              <p>32 Properties Found</p>
            </div>
            <div className="sortby_btn">
              {/* <button onclick={sortlist()} className="sortbtn">Dropdown</button> */}
              {/* <div id="mySortlist" className="dropdown-content"> */}
              {/* <a href="#">Price</a> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        {/*-----mobile filter header view-----*/}

        <div className="mob-filter-header">
          <div className="filter-btn">
            <a href="">
              <p>Filters</p>
            </a>
          </div>
          <div className="mob-search-container">
            <form action="/action_page.php">
              <a href="#home_">
                <FontAwesomeIcon icon={faSearch} />
              </a>
              <input
                id="search"
                type="text"
                placeholder="Enter city, state, locality, pincode"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
        </div>

        <div className="filter_temp">
          <div className="left-filter-parent">
            <div id="left-filter">
              <form>
                <div className="areaType">
                  <p className="title">Area Type</p>
                  <div className="aTypeChecks">
                    <div className="check1">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={areaType[0]}
                        onChange={() => handleAreaType(0)}
                      />
                      <label>Residential</label>
                    </div>
                    <div className="check1">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={areaType[1]}
                        onChange={() => handleAreaType(1)}
                      />
                      <label>Commercial</label>
                    </div>
                    <div className="check1">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={areaType[2]}
                        onChange={() => handleAreaType(2)}
                      />
                      <label>Resi-Com</label>
                    </div>
                  </div>
                </div>

                <div className="propertyType">
                  <p className="title">Property Type</p>
                  <div className="propIcons">
                    <div className="Icon">
                      <button
                        type="button"
                        x
                        onClick={() => handlePropertyType("apartment")}
                      >
                        <img src="images/apartmentIcon.png" alt=" " />
                        <p className="iconName">Apart.</p>
                      </button>
                    </div>
                    <div className="Icon">
                      <button
                        type="button"
                        onClick={() => handlePropertyType("villa")}
                      >
                        <img src="images/bunglowIcon.png" alt=" " />
                        <p className="iconName">Villa</p>
                      </button>
                    </div>
                    <div className="Icon">
                      <button
                        type="button"
                        onClick={() => handlePropertyType("plot")}
                      >
                        <img src="images/plotIcon.png" alt=" " />
                        <p className="iconName">Plot</p>
                      </button>
                    </div>
                  </div>
                </div>

                <Typography id="range-slider" gutterBottom>
                  Select range of budget :
                </Typography>

                <Slider
                  min={1}
                  max={100000}
                  value={budget}
                  onChange={budgetRangeSelector}
                  valueLabelDisplay="auto"
                />

                <Typography id="range-slider" gutterBottom>
                  Select range of area (in sqft):
                </Typography>

                <Slider
                  min={1}
                  max={100000}
                  value={area}
                  onChange={areaRangeSelector}
                  valueLabelDisplay="auto"
                />

                <hr />

                <div className="bhk">
                  <p className="title">BHKs</p>
                  <div className="bhkTypes">
                    <label className="btype">
                      <button type="button" onClick={() => handlebhk(1)}>
                        1
                      </button>
                    </label>
                    <label className="btype">
                      <button type="button" onClick={() => handlebhk(2)}>
                        2
                      </button>
                    </label>
                    <label className="btype">
                      <button type="button" onClick={() => handlebhk(3)}>
                        3
                      </button>
                    </label>
                    <label className="btype">
                      <button type="button" onClick={() => handlebhk(4)}>
                        4
                      </button>
                    </label>
                    <label className="btype">
                      <button type="button" onClick={() => handlebhk(5)}>
                        4+
                      </button>
                    </label>
                  </div>
                </div>
                <hr />

                <div className="propertyAge">
                  <p className="title">Property Age</p>
                  <div className="ageChecks">
                    <div className="check1">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={propertyAge[0]}
                        onChange={() => handlePropertyAge(0)}
                      />
                      <label>0-2 Years</label>
                    </div>
                    <div className="check1">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={propertyAge[1]}
                        onChange={() => handlePropertyAge(1)}
                      />
                      <label>2-5 Years</label>
                    </div>
                    <div className="check1">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={propertyAge[2]}
                        onChange={() => handlePropertyAge(2)}
                      />
                      <label>5-10 Years</label>
                    </div>
                    <div className="check1">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={propertyAge[3]}
                        onChange={() => handlePropertyAge(3)}
                      />
                      <label>10+ Years</label>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="propertyStatus">
                  <p className="title">Property Status</p>
                  <div className="statusBox">
                    <div className="status1">
                      <label className="btype">
                        <button
                          type="button"
                          onClick={() => handlePropertyStatus("ready to move")}
                        >
                          Ready To Move
                        </button>
                      </label>
                    </div>
                    <div className="status1">
                      <label className="btype">
                        <button
                          type="button"
                          onClick={() =>
                            handlePropertyStatus("under construction")
                          }
                        >
                          Under Construction
                        </button>
                      </label>
                    </div>
                  </div>
                </div>

                <hr />
                <div className="furnished">
                  <div className="check1">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={furnished}
                      onChange={() => setFurnished(!furnished)}
                    />
                    <label>Furnished</label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="tempParent">
            <TempIndex />
          </div>
        </div>
      </>
    </context.Provider>
  );
};

export default SecondPgNavFiltr;
