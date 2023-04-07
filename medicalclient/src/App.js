import logo from './logo.svg';
import './App.css';

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
              <div class="row">
                <div class="col-lg-3 col-6">
                  <div id="logo_home">
                    <h1><a href="index.html" title="Findoctor">Findoctor</a></h1>
                  </div>
                </div>
                <nav class="col-lg-9 col-6">
                  <a class="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="#0"><span>Menu mobile</span></a>
                  <ul id="top_access">
                    <li><a href="login.html"><i class="pe-7s-user"></i></a></li>
                    <li><a href="register-doctor-working.html"><i class="pe-7s-add-user"></i></a></li>
                  </ul>
                  <div class="main-menu">
                    <ul>
                      <li class="submenu">
                        <a href="#0" class="show-submenu">Home<i class="icon-down-open-mini"></i></a>
                        <ul>
                          <li><a href="index-7.html">Home with Map</a></li>
                        </ul>
                      </li>
                      <li class="submenu">
                        <a href="#0" class="show-submenu">Pages<i class="icon-down-open-mini"></i></a>
                        <ul>
                          <li class="third-level"><a href="#0">List pages</a>
                            <ul>
                              <li><a href="list-map.html">List map page</a></li>
                            </ul>
                          </li>
                          <li class="third-level"><a href="#0">Detail pages</a>
                            <ul>
                              <li><a href="detail-page-3.html">Detail page 3</a></li>
                            </ul>
                          </li>
                          <li><a href="submit-review.html">Submit Review</a></li>

                          <li><a href="login.html">Login</a></li>
                          <li><a href="register-doctor-working.html">Working doctor register</a></li>
                          <li><a href="register.html">Register</a></li>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="contacts.html">Contacts</a></li>
                        </ul>
                      </li>
                      <li class="submenu">
                        <a href="#0" class="show-submenu">Extra Elements<i class="icon-down-open-mini"></i></a>
                        <ul>
                          <li><a href="booking-page.html">Booking page</a></li>
                          <li><a href="confirm.html">Confirm page</a></li>
                          <li><a href="404.html">404 page</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                </nav>
              </div>
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
                  <div class="col-lg-4 col-md-6">
                    <div class="box_list home">
                      <a href="#0" data-toggle="tooltip" data-placement="top" title="Add to wishlist" class="wish_bt"></a>
                      <figure>

                        <a href="detail-page.html"><img src="./../public/assets/http://via.placeholder.com/565x565.jpg" class="img-fluid" alt=""/></a>
                        <div class="preview"><span>Read more</span></div>
                      </figure>
                      <div class="wrapper">
                        <small>Psicologist</small>
                        <h3>Dr. Watamaniuk</h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
                        <span class="rating"><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i> <small>(145)</small></span>
                        <a href="#0" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" class="badge_list_1"><img src="./../public/assets/img/badges/badge_1.svg" width="15" height="15" alt=""/></a>
                      </div>
                      <ul>
                        <li><i class="icon-eye-7"></i> 854 Views</li>
                        <li><a href="detail-page.html">Book now</a></li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    <div class="box_list home">
                      <a href="#0" data-toggle="tooltip" data-placement="top" title="Add to wishlist" class="wish_bt"></a>
                      <figure>

                        <a href="detail-page.html"><img src="./../public/assets/http://via.placeholder.com/565x565.jpg" class="img-fluid" alt=""/></a>
                        <div class="preview"><span>Read more</span></div>
                      </figure>
                      <div class="wrapper">
                        <small>Psicologist</small>
                        <h3>Dr. Mantooth</h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
                        <span class="rating"><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i> <small>(145)</small></span>
                        <a href="#0" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" class="badge_list_1"><img src="./../public/assets/img/badges/badge_1.svg" width="15" height="15" alt=""/></a>
                      </div>
                      <ul>
                        <li><i class="icon-eye-7"></i> 854 Views</li>
                        <li><a href="detail-page.html">Book now</a></li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    <div class="box_list home">
                      <a href="#0" data-toggle="tooltip" data-placement="top" title="Add to wishlist" class="wish_bt"></a>
                      <figure>

                        <a href="detail-page.html"><img src="./../public/assets/http://via.placeholder.com/565x565.jpg" class="img-fluid" alt=""/></a>
                        <div class="preview"><span>Read more</span></div>
                      </figure>
                      <div class="wrapper">
                        <small>Psicologist</small>
                        <h3>Dr. Pullman</h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
                        <span class="rating"><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i> <small>(145)</small></span>
                        <a href="#0" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" class="badge_list_1"><img src="./../public/assets/img/badges/badge_2.svg" width="15" height="15" alt=""/></a>
                      </div>
                      <ul>
                        <li><i class="icon-eye-7"></i> 854 Views</li>
                        <li><a href="detail-page.html">Book now</a></li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    <div class="box_list home">
                      <a href="#0" data-toggle="tooltip" data-placement="top" title="Add to wishlist" class="wish_bt"></a>
                      <figure>

                        <a href="detail-page.html">
                          <img src="./../public/assets/http://via.placeholder.com/565x565.jpg" class="img-fluid" alt=""/></a>
                        <div class="preview"><span>Read more</span></div>
                      </figure>
                      <div class="wrapper">
                        <small>Psicologist</small>
                        <h3>Dr. Toothaker</h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
                        <span class="rating"><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i> <small>(145)</small></span>
                        <a href="#0" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" class="badge_list_1"><img src="./../public/assets/img/badges/badge_6.svg" width="15" height="15" alt=""/></a>
                      </div>
                      <ul>
                        <li><i class="icon-eye-7"></i> 854 Views</li>
                        <li><a href="detail-page.html">Book now</a></li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    <div class="box_list home">
                      <a href="#0" data-toggle="tooltip" data-placement="top" title="Add to wishlist" class="wish_bt"></a>
                      <figure>

                        <a href="detail-page.html"><img src="./../public/assets/http://via.placeholder.com/565x565.jpg" class="img-fluid" alt=""/></a>
                        <div class="preview"><span>Read more</span></div>
                      </figure>
                      <div class="wrapper">
                        <small>Psicologist</small>
                        <h3>Dr. Brilliant</h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
                        <span class="rating"><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i> <small>(145)</small></span>
                        <a href="#0" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" class="badge_list_1"><img src="./../public/assets/img/badges/badge_6.svg" width="15" height="15" alt=""/></a>
                      </div>
                      <ul>
                        <li><i class="icon-eye-7"></i> 854 Views</li>
                        <li><a href="detail-page.html">Book now</a></li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    <div class="box_list home">
                      <a href="#0" data-toggle="tooltip" data-placement="top" title="Add to wishlist" class="wish_bt"></a>
                      <figure>

                        <a href="detail-page.html"><img src="./../public/assets/http://via.placeholder.com/565x565.jpg" class="img-fluid" alt=""/></a>
                        <div class="preview"><span>Read more</span></div>
                      </figure>
                      <div class="wrapper">
                        <small>Psicologist</small>
                        <h3>Dr. Crownover</h3>
                        <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
                        <span class="rating"><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i> <small>(145)</small></span>
                        <a href="#0" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" class="badge_list_1"><img src="./../public/assets/img/badges/badge_1.svg" width="15" height="15" alt=""/></a>
                      </div>
                      <ul>
                        <li><i class="icon-eye-7"></i> 854 Views</li>
                        <li><a href="detail-page.html">Book now</a></li>
                      </ul>
                    </div>
                  </div>
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
                <div class="col-xl-4 col-lg-5 col-md-6">
                  <div class="list_home">
                    <div class="list_title">
                      <i class="icon_pin_alt"></i>
                      <h3>Search by City or Zone</h3>
                    </div>
                    <ul>
                      <li><a href="#0"><strong>23</strong>Albany</a></li>
                      <li><a href="#0"><strong>23</strong>Albuquerque</a></li>
                      <li><a href="#0"><strong>23</strong>Atlanta</a></li>
                      <li><a href="#0"><strong>23</strong>Baltimore</a></li>
                      <li><a href="#0"><strong>23</strong>Baton Rouge</a></li>
                      <li><a href="#0"><strong>23</strong>Birmingham</a></li>
                      <li><a href="#0"><strong>23</strong>Boston</a></li>
                      <li><a href="#0"><strong>23</strong>Buffalo</a></li>
                      <li><a href="#0"><strong>23</strong>Charleston</a></li>
                      <li><a href="#0">More...</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5 col-md-6">
                  <div class="list_home">
                    <div class="list_title">
                      <i class="icon_archive_alt"></i>
                      <h3>Search by type</h3>
                    </div>
                    <ul>
                      <li><a href="#0"><strong>23</strong>Allergist</a></li>
                      <li><a href="#0"><strong>23</strong>Cardiologist</a></li>
                      <li><a href="#0"><strong>23</strong>Chiropractor</a></li>
                      <li><a href="#0"><strong>23</strong>Dentist</a></li>
                      <li><a href="#0"><strong>23</strong>Dermatologist</a></li>
                      <li><a href="#0"><strong>23</strong>Gastroenterologist</a></li>
                      <li><a href="#0"><strong>23</strong>Ophthalmologist</a></li>
                      <li><a href="#0"><strong>23</strong>Optometrist</a></li>
                      <li><a href="#0"><strong>23</strong>Pediatrician</a></li>
                      <li><a href="#0">More....</a></li>
                    </ul>
                  </div>
                </div>
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
