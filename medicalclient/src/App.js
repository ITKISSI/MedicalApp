import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DoctorCard from './components/DoctorCard';
import SearchDoctorCard from './components/SearchDoctorCard';

function App() {
  return (
      <div className="App">
        <div className="content">
          <div class="layer"></div>
          <div id="map"></div>
          <div id="preloader">
            <div data-loader="circle-side"></div>
          </div>


          <header class="header_sticky">
            <div class="container">
            <Navbar/>
            </div>

          </header>


          <main>
            <div class="hero_map">
              <div id="map_listing"></div>
              <form method="post" action="list.html" class="search_wp">
                <div id="custom-search-input">
                  <div class="input-group">
                    <input type="text" class=" search-query" placeholder="Ex. Name, Specialization ...."/>
                    <input type="submit" class="btn_search" value="Search"/>
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


            <div class="bg_color_1">
              <div class="container margin_120_95">
                <div class="main_title">
                  <h2>Most Viewed doctors</h2>
                  <p>Usu habeo equidem sanctus no. Suas summo id sed, erat erant oporteat cu pri.</p>
                </div>
                <div class="row">  
               <DoctorCard/>
               <DoctorCard/>
               <DoctorCard/>
               <DoctorCard/>
               <DoctorCard/>
               <DoctorCard/>

               
                </div>

                <p class="text-center add_top_30"><a href="list.html" class="btn_1 medium">View all Doctors</a></p>
              </div>

            </div>


            <div class="container margin_120_95">
              <div class="main_title">
                <h2>Find your doctor or clinic</h2>
                <p>Nec graeci sadipscing disputationi ne, mea ea nonumes percipitur. Nonumy ponderum oporteat cu mel, pro movet cetero at.</p>
              </div>
              <div class="row justify-content-center">
               
                <SearchDoctorCard/>
                <SearchDoctorCard/>

              </div>

            </div>


            <div class="cta_subscribe">
              <div class="container-fluid h-100">
                <div class="row h-100 justify-content-center align-items-center">
                  <div class="col-md-6 p-0">
                    <div class="block_1">
                      <figure><img src="./../public/assets/img/doctors_icon.svg" alt=""/></figure>
                      <h3>Are you a Doctor?</h3>
                      <p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
                      <a href="register-doctor.html" class="btn_1">Read more</a>
                    </div>
                  </div>
                  <div class="col-md-6 p-0">
                    <div class="block_2">
                      <figure><img src="./../public/assets/img/patient_icon.svg" alt=""/></figure>
                      <h3>Are you a patient?</h3>
                      <p>Choosing a specialist has never been so fast! You can filter search results by location and medical specialization, and book medical examination online.</p>
                      <a href="register.html" class="btn_1">Read more</a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </main>


          <footer>
            <div class="container margin_60_35">
              <div class="row">
                <div class="col-lg-3 col-md-12">
                  <p>
                    <a href="index.html" title="Findoctor">
                      <img src="./../public/assets/img/logo.png" data-retina="true" alt="" width="163" height="36" class="img-fluid"/>
                    </a>
                  </p>
                </div>
                <div class="col-lg-3 col-md-4">
                  <h5>About</h5>
                  <ul class="links">
                    <li><a href="#0">About us</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="#0">FAQ</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="register.html">Register</a></li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-4">
                  <h5>Useful links</h5>
                  <ul class="links">
                    <li><a href="#0">Doctors</a></li>
                    <li><a href="#0">Clinics</a></li>
                    <li><a href="#0">Specialization</a></li>
                    <li><a href="#0">Join as a Doctor</a></li>
                    <li><a href="#0">Download App</a></li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-4">
                  <h5>Contact with Us</h5>
                  <ul class="contacts">
                    <li><a href="tel://61280932400"><i class="icon_mobile"></i> + 61 23 8093 3400</a></li>
                    <li><a href="mailto:info@findoctor.com"><i class="icon_mail_alt"></i> help@findoctor.com</a></li>
                  </ul>
                  <div class="follow_us">
                    <h5>Follow us</h5>
                    <ul>
                      <li><a href="#0"><i class="social_facebook"></i></a></li>
                      <li><a href="#0"><i class="social_twitter"></i></a></li>
                      <li><a href="#0"><i class="social_linkedin"></i></a></li>
                      <li><a href="#0"><i class="social_instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <hr/>
              <div class="row">
                <div class="col-md-8">
                  <ul id="additional_links">
                    <li><a href="#0">Terms and conditions</a></li>
                    <li><a href="#0">Privacy</a></li>
                  </ul>
                </div>
                <div class="col-md-4">
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
