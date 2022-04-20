import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Routes, Route } from "react-router-dom";
import Under_maintain from "./Under_maintain";
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondPgNavFiltr from './SecondPgNavFiltr';

import './Under_maintain.css';
import './App.css';
import './SecondPgNavFiltr.css';

/*ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
  , document.getElementById('root'));*/

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
    <Routes>
               <Route path="/under_maintainance" element={<Under_maintain />} />
               <Route exact path="/" element={<App />} />
               <Route path="/second-page" element={<SecondPgNavFiltr />} />
               {/* <Route exact path="/about" element={<ConsltAbout />} />
               
               <Route exact path="/service" element={<Service />} /> */}
               {/* <Redirect to="/" element={<Home />}  /> */}
           </Routes>
   </BrowserRouter>
  );

  reportWebVitals();