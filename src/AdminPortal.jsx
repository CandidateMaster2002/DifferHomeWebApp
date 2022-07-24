import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AdminPortal = () => {
  const url = "http://localhost:5000/api/addProject/";

  const [data, setData] = useState({
    propertyName: "a",
    propertyType: "a",
    areaType: "a",
    city: "bb",
    state: "a",
    pincode: 1,
    address: "a",
    area: 1,
    carpetArea: 1,
    price: 1,
    priceSqft: 1,
    bedroom: 1,
    bathroom: 1,
    reraRegistered: "a",
    propertyAge: 1,
    status: "true",
    furnished: "true",
    about: "a",
    photos: "bb",
    layout3d: "bb",
    floorPlan: "bb",
    brochure: "bb",
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData)
  }

  // function handleSubmit(e) {
  //   console.log("ll");
  //   e.preventDefault();
  //   axios
  //     .post(url, {

      
  //       propertyName: data.propertyName,
  //       propertyType: data.propertyType,
  //       areaType: data.areaType,
  //       city: data.city,
  //       state: data.state,
  //       pincode: data.pincode,
  //       address: data.address,
  //       area: data.area,
  //       carpetArea: data.carpetArea,
  //       price: data.price,
  //       priceSqft: data.priceSqft,
  //       bedrooms: data.bedroom,
  //       bathrooms: data.bathroom,
  //       reraRegistered: data.reraRegistered,
  //       age: data.propertyAge,
  //       status: data.status,
  //       furnished: data.furnished,
  //       about: data.about,
  //       photos: data.photos,
  //       layout: data.layout3d,
  //       floorPlan: data.floorPlan,
  //       brochure: data.brochure,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // }

  let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch(url,{
          method: "POST",
          body: JSON.stringify({
              about:data.about
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
         console.log("200")
          console.log(res)
        } else {
          console.log("Some error occured")
        }
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <div className="AdminHeader">
        <div>
          <h1>Admin Portal</h1>
        </div>
        <div className="addBtn">
          <button
            type="button"
            //  onChange={(e) => submit(e)}
          >
            Add Property
          </button>
        </div>
      </div>
      <div className="adminFormDetails">
        <div className="adminForm">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="propName">
              <label for="propname">
                <b>Property Name</b>
              </label>
              <input
                onChange={(e) => handle(e)}
                type="text"
                id="propertyName"
                value={data.propertyName}
                name="propname"
              />
            </div>
            <div>
              <label for="proptype">
                <b>Property Type</b>
              </label>
              <select
                onChange={(e) => handle(e)}
                id="propertyType"
                value={data.propertyType}
                name="proptype"
              >
                <option value="villa">Villa</option>
                <option value="plot">Plot</option>
                <option value="apartment">Apartment</option>{" "}
              </select>

              <label for="areatype">
                <b>Area Type</b>
              </label>
              <select
                onChange={(e) => handle(e)}
                id="areatype"
                value={data.areaType}
                name="areatype"
              >
                <option value="residential">Residental</option>
                <option value="commercial">Commertial</option>
                <option value="resi-com">Resi-Com</option>{" "}
              </select>
            </div>
            <div className="Location">
              <label for="location">
                <b>Location: City</b>
              </label>
              <input
                onChange={(e) => handle(e)}
                type="text"
                id="city"
                value={data.city}
                name="city"
              />

              <label for="state">
                <b>State: </b>
              </label>
              <input
                onChange={(e) => handle(e)}
                type="text"
                id="state"
                value={data.state}
                name="state"
              />
            </div>
            <div className="Pincode">
              <label for="pincode">
                <b>Pincode:</b>
              </label>
              <input
                onChange={(e) => handle(e)}
                type="number"
                id="pincode"
                value={data.pincode}
                name="pincode"
              />
            </div>
            <div className="Address">
              <label for="address">
                <b>Address:</b>
              </label>
              <input
                onChange={(e) => handle(e)}
                type="text"
                id="address"
                value={data.address}
                name="address"
              />
            </div>
            <div className="Area">
              <div className="area1">
                <label for="area">
                  <b>Area:</b>
                </label>
                <input
                  onChange={(e) => handle(e)}
                  type="number"
                  id="area"
                  value={data.area}
                  name="area"
                />
                <b>Sqft.</b>
              </div>
              <div className="area2">
                <label for="car-area">
                  <b>Carpet Area: </b>
                </label>
                <input
                  onChange={(e) => handle(e)}
                  type="number"
                  id="carpetArea"
                  value={data.carpetArea}
                  name="car-area"
                />
                <b>Sqft.</b>
              </div>
            </div>
            <div className="Price">
              <div className="price1">
                <label for="price1">
                  <b>Price:</b>
                </label>
                <input
                  onChange={(e) => handle(e)}
                  type="number"
                  id="price"
                  value={data.price}
                  name="price1"
                />
                <b>Rs.</b>
              </div>
              <div className="price2">
                <label for="price2">
                  <b>Price/Sqft: </b>
                </label>
                <input
                  onChange={(e) => handle(e)}
                  type="number"
                  id="priceSqft"
                  value={data.priceSqft}
                  name="price2"
                />
                <b>Rs.</b>
              </div>
            </div>
            <div className="BedBath">
              <div className="Bedroom" id="rooms">
                <label for="bedroom">
                  <b>Bedroom:</b>
                </label>
                <select onChange={(e) => handle(e)} id="bedroom" name="bedroom">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">4+</option>
                </select>
              </div>
              <div className="Bathroom" id="rooms">
                <label for="bathroom">
                  <b>Bathroom:</b>
                </label>
                <select
                  onChange={(e) => handle(e)}
                  id="bathroom"
                  name="bathroom"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">4+</option>
                </select>
              </div>
            </div>
            <div className="RegisterPropAge">
              <div className="Register">
                <label for="register">
                  <b>RERA Registered:</b>
                </label>
                <select
                  onChange={(e) => handle(e)}
                  id="reraRegistered"
                  value={data.reraRegistered}
                  name="proptype"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="PropAge">
                <label for="propAge">
                  <b>Property Age (in years):</b>
                </label>
                <input
                  onChange={(e) => handle(e)}
                  type="number"
                  id="propertyAge"
                  value={data.propertyAge}
                  name="propertyAge"
                />
              </div>
            </div>
            <div className="Status">
              <div className="MovStatus">
                <label for="movStatus">
                  <b>Move-In Status:</b>
                </label>
                <select
                  onChange={(e) => handle(e)}
                  id="status"
                  value={data.status}
                  name="status"
                >
                  <option value="readytomove">Ready to move</option>
                  <option value="underconstruction">Under Construction</option>
                </select>
              </div>
              <div className="FurStatus">
                <label for="furStatus">
                  <b>Furnished: </b>
                </label>
                <select
                  onChange={(e) => handle(e)}
                  id="furnished"
                  name="furnished"
                  value={data.furnished}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>
            <div className="About">
              <label for="about">
                <b>About:</b>
              </label>
              <textarea
                onChange={(e) => handle(e)}
                type="text"
                id="about"
                value={data.about}
              />
            </div>
            <div className="Uploads">
              <div>
                <label for="photos">
                  <b>Photos:</b>
                </label>
                <a href="">Upload</a>
              </div>
              <div>
                <label for="layout">
                  <b>3D Layout:</b>
                </label>
                <a href="">Upload</a>
              </div>
              <div>
                <label for="floor">
                  <b>Floor Plan:</b>
                </label>
                <a href="">Upload</a>
              </div>
              <div>
                <label for="brochure">
                  <b>Brochure:</b>
                </label>
                <a href="">Upload</a>
              </div>
            </div>
            <div className="SubmitBtn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="adminMap">
          <div>
            <h5>Location in Map</h5>
          </div>
          <div className="mapBox"></div>
        </div>
      </div>
      {/* </form> */}
    </>
  );
};

export default AdminPortal;
