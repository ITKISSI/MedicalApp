import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DoctorCard from './components/DoctorCard';
import SearchDoctorCard from './components/SearchDoctorCard';
import Subscibe from './components/Subscribe';
import FooterLinks from './components/FooterLinks';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function App() {

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
          <div className="layer"></div>
          <div id="map"></div>
          <div id="preloader">
            <div data-loader="circle-side"></div>
          </div>


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
                      <label for="all">All</label>
                    </li>
                    <li>
                      <input type="radio" id="doctor" name="radio_search" value="doctor"/>
                      <label for="doctor">Doctor</label>
                    </li>
                    <li>
                      <input type="radio" id="clinic" name="radio_search" value="clinic"/>
                      <label for="clinic">Clinic</label>
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
        doctors.map((doctor)=>(

          <DoctorCard doctor={doctor}/>

        ))}
               

               
                </div>

                <p className="text-center add_top_30"><a href="list.html" className="btn_1 medium">View all Doctors</a></p>
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


          <footer>
            <div className="container margin_60_35">
              <div className="row">
                <div className="col-lg-3 col-md-12">
                  <p>
                    <a href="index.html" title="Findoctor">
                      <img src="./../public/assets/img/logo.png" data-retina="true" alt="" width="163" height="36" className="img-fluid"/>
                    </a>
                  </p>
                </div>
             <FooterLinks/>
             <FooterLinks/>

                <div className="col-lg-3 col-md-4">
                  <h5>Contact with Us</h5>
                  <ul className="contacts">
                    <li><a href="tel://61280932400"><i className="icon_mobile"></i> + 61 23 8093 3400</a></li>
                    <li><a href="mailto:info@findoctor.com"><i className="icon_mail_alt"></i> help@findoctor.com</a></li>
                  </ul>
                  <div className="follow_us">
                    <h5>Follow us</h5>
                    <ul>
                      <li><a href="#0"><i className="social_facebook"></i></a></li>
                      <li><a href="#0"><i className="social_twitter"></i></a></li>
                      <li><a href="#0"><i className="social_linkedin"></i></a></li>
                      <li><a href="#0"><i className="social_instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <hr/>
              <div className="row">
                <div className="col-md-8">
                  <ul id="additional_links">
                    <li><a href="#0">Terms and conditions</a></li>
                    <li><a href="#0">Privacy</a></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <div id="copy">© 2017 Findoctor</div>
                </div>
              </div>
            </div>
          </footer>


          <div id="toTop"></div>
        </div>
      </div>
  );
}

export default App;
