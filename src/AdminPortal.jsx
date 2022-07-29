import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const AdminPortal = () => {
  const url = "http://localhost:5000/api/addProject/";
  const navigate = useNavigate();

  const [data, setData] = useState({
    propertyName: "",
    propertyType: "villa",
    areaType: "residential",
    city: "",
    state: "",
    pincode: 0,
    address: "",
    area: 0,
    carpetArea: 0,
    price: 0,
    priceSqft: 0,
    bedroom: 1,
    bathroom: 1,
    reraRegistered: false,
    propertyAge: 0,
    status: "readytomove",
    furnished: "furnished",
    about: "",
    photos: null,
    layout: null,
    floorPlan: null,
    brochure: null,
  });

  const [emptyData,setEmptyData]=useState(data)

  const handleClear = () => {
    setData(emptyData)
  };

  const handleLogOut = () => {
    console.log(localStorage)
    localStorage.clear();
    navigate('/login')
    
  };


  function handle(e) {
    setData({...data,[e.target.name]: e.target.value});
  }

  function handleImages(e) {
//    console.log(e.target.files);
    setData({...data,[e.target.name]: e.target.files[0]});
  }
  

  let handleSubmit = async (e) => {
    e.preventDefault();
    var fd= new FormData();
    fd.append('propertyName' ,data.propertyName);
    fd.append('propertyType' ,data.propertyType);
    fd.append('areaType' ,data.areaType);
    fd.append('city' ,data.city);
    fd.append('state' ,data.state);
    fd.append('pincode' ,data.pincode);
    fd.append('address' ,data.address);
    fd.append('area' ,data.area);
    fd.append('carpetArea' ,data.carpetArea);
    fd.append('price' ,data.price);
    fd.append('priceSqft' ,data.priceSqft);
    fd.append('bedrooms' ,data.bedroom);
    fd.append('bathrooms' ,data.bathroom);
    fd.append('reraRegistered',data.reraRegistered)
    fd.append('age',data.propertyAge)
    fd.append('status',data.status)
    fd.append('about',data.about)
    //console.log(data.photos);
    fd.append('photos',data.photos);
    fd.append('layout',data.layout);
    fd.append('floorPlan',data.floorPlan);
    fd.append('brochure',data.brochure);
    fd.append('furnished',data.furnished)
    

    const response= axios.post(url,fd,{
      // method:'POST',
       headers:{
           "Content-Type": "multipart/form-data",
           //'auth-token':localStorage.getItem('token')
       }
   }).then((res,err)=>{
       
   const json=  res.data;

  console.log(json);
  
  
   }).catch((error)=>{
   
       console.log(error);
   })


};
 
return (

   
  <>
    <div className="AdminHeader">
      <div>
        <h1>Admin Portal</h1>
      </div>
      <div className="addBtn">
        <button
          type="button"
        >
          Remove Property
        </button>
        <button
          type="button" onClick={() => handleClear()}
        >
          Clear all inputs
        </button>
      </div>
      <button
          type="button" onClick={() => handleLogOut()}
        >
          Logout
        </button>
    </div>
    <div className="adminFormDetails">
      <div className="adminForm">
        <form encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
          <div className="propName">
            <label for="propname">
              <b>Property Name</b>
            </label>
            <input
              onChange={(e) => handle(e)}
              type="text"
              id="propertyName"
              value={data.propertyName}
              name="propertyName"
              required
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
              name="propertyType"
              required
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
              id="areaType"
              value={data.areaType}
              name="areaType"
              required
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
              required
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
              required
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
              required
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
              required
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
                required
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
                name="carpetArea"
                required
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
                name="price"
                required
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
                name="priceSqft"
                required
              />
              <b>Rs.</b>
            </div>
          </div>
          <div className="BedBath">
            <div className="Bedroom" id="rooms">
              <label for="bedroom">
                <b>Bedroom:</b>
              </label>
              <select onChange={(e) => handle(e)} id="bedroom" name="bedroom" required>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option  value="5">4+</option>
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
                required
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
                name="reraRegistered"
                required
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
                required
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
                required
              >
                <option value="readytomove">Ready to move</option>
                <option value="underconstruction">Under Construction</option>
              </select>
            </div>
            <div className="FurStatus">
              <label for="furStatus">
                <b>Furnishing status </b>
              </label>
              <select
                onChange={(e) => handle(e)}
                id="furnished"
                name="furnished"
                value={data.furnished}
                required
              >
                  <option value="furnished">Furnished</option>
                  <option value="semifurnished">Semi-Furnished</option>
                  <option value="notfurnished">Unfurnished</option>
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
              name="about"
              value={data.about}
              required
            />
          </div>
          <div className="Uploads">
            <div>
              <label for="photos">
                <b>Photos:</b>
              </label>
              <input type="file" name="photos" id="photos" onChange={handleImages} required/>
            </div>
            <div>
              <label for="layout">
                <b>3D Layout:</b>
              </label>
              <input type="file" name="layout" id="layout" onChange={handleImages} required/>
            </div>
            <div>
              <label for="floor">
                <b>Floor Plan:</b>
              </label>
              <input type="file" name="floorPlan" id="floorPlan" onChange={handleImages} required/>
            </div>
            <div>
              <label for="brochure">
                <b>Brochure:</b>
              </label>
              <input type="file" name="brochure" id="brochure" onChange={handleImages} required/>
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
  </>
);
 
};

export default AdminPortal;

