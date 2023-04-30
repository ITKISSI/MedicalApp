import Navbar from './components/Navbar';
import DoctorCard from './components/DoctorCard';
import SearchDoctorCard from './components/SearchDoctorCard';
import Subscibe from './components/Subscribe';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/vendors.css';
import './assets/css/icon_fonts/css/all_icons_min.css';
import './assets/css/custom.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Register from './components/Register';

function App() {

  <Router>
    <Routes> 
      
      <Route exact path="/register" element={<Register/>} />
    </Routes>
  </Router>

  const [doctors,setDoctor]=useState([])
    useEffect(()=>{
        loadDoctors();
    },[])

    const loadDoctors=async () =>
    {
        const result = await axios.get("http://localhost:8080/doctors/doctors");
        setDoctor(result.data);
    };

  return (
      <div className="App">
        <div className="content">
          {/*<div className="layer"></div>
          <div id="map"></div>
           <div id="preloader">
            <div data-loader="circle-side"></div>
          </div> */}


          <header className="header_sticky">
            <div className="container">
            <Navbar/>
            </div>

          </header>


          <main>
            <div className="hero_map">
              <div id="map_listing"></div>
              <form method="post" action="list.html" className="search_wp">
                <div id="custom-search-input">
                  <div className="input-group">
                    <input type="text" className=" search-query" placeholder="Ex. Name, Specialization ...."/>
                    <input type="submit" className="btn_search" value="Search"/>
                  </div>
                  <ul>
                    <li>
                      <input type="radio" id="all" name="radio_search" value="all" checked=""/>
                      <label htmlFor="all">All</label>
                    </li>
                    <li>
                      <input type="radio" id="doctor" name="radio_search" value="doctor"/>
                      <label htmlFor="doctor">Doctor</label>
                    </li>
                    <li>
                      <input type="radio" id="clinic" name="radio_search" value="clinic"/>
                      <label htmlFor="clinic">Clinic</label>
                    </li>
                  </ul>
                </div>
              </form>
            </div>


            <div className="bg_color_1">
              <div className="container margin_120_95">
                <div className="main_title">
                  <h2>Most Viewed doctors</h2>
                  <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri.</p>
                </div>
                <div className="row"> 

                {

        doctors.map((doctor,index)=>(

          <DoctorCard doctor={doctor} index={index}/>

        ))}
               
               
                </div>

                <p className="text-center add_top_30">
                  <Link to="list" className="btn_1 medium">
                    View all Doctors
                  </Link>
                </p>
              </div>

            </div>


            <div className="container margin_120_95">
              <div className="main_title">
                <h2>Find your doctor or clinic</h2>
                <p>Nec graeci sadipscing disputationi ne, mea ea nonumes percipitur. Nonumy ponderum oporteat cu mel, pro movet cetero at.</p>
              </div>
              <div className="row justify-content-center">
               
                <SearchDoctorCard/>
                <SearchDoctorCard/>

              </div>

            </div>


            <div className="cta_subscribe">
              <div className="container-fluid h-100">
                <div className="row h-100 justify-content-center align-items-center">
                <Subscibe title={"Are you a Doctor?"} description ={"The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way."}/>

                <Subscibe title={"Are you a Doctor?"} description ={"The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way."}/>

                </div>

              </div>

            </div>

          </main>


          <Footer/>


          <div id="toTop"></div>
        </div>
      </div>
  );
}

export default App;
