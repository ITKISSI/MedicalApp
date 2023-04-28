import { Link } from "react-router-dom";

const Navbar = () => {
    return (   <div className="row">
                <div className="col-lg-3 col-6">
                  <div id="logo_home">
                    <h1><a href="index.html" title="Findoctor">Findoctor</a></h1>
                  </div>
                </div>
                <nav className="col-lg-9 col-6">
                  <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="#0"><span>Menu mobile</span></a>
                  <ul id="top_access">
                    <li><a href="login.html"><i class="pe-7s-user"></i></a></li>
                    <li><a href="register-doctor-working.html"><i className="pe-7s-add-user"></i></a></li>
                  </ul>
                  <div className="main-menu">
                    <ul>
                      <li className="submenu">
                        <a href="#0" class="show-submenu">Home<i className="icon-down-open-mini"></i></a>
                        <ul>
                          <li><a href="index-7.html">Home with Map</a></li>
                        </ul>
                      </li>
                      <li className="submenu">
                        <a href="#0" className="show-submenu">Pages<i className="icon-down-open-mini"></i></a>
                        <ul>
                          <li className="third-level"><a href="#0">List pages</a>
                            <ul>
                              <li><a href="list-map.html">List map page</a></li>
                            </ul>
                          </li>
                          <li className="third-level"><a href="#0">Detail pages</a>
                            <ul>
                              <li><a href="detail-page-3.html">Detail page 3</a></li>
                            </ul>
                          </li>
                          <li><a href="submit-review.html">Submit Review</a></li>

                          <li><a href="login.html">Login</a></li>
                          <li><a href="register-doctor-working.html">Working doctor register</a></li>
                          <li><Link to={'/register'}>Register</Link></li>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="contacts.html">Contacts</a></li>
                        </ul>
                      </li>
                      <li className="submenu">
                        <a href="#0" className="show-submenu">Extra Elements<i className="icon-down-open-mini"></i></a>
                        <ul>
                          <li><a href="booking-page.html">Booking page</a></li>
                          <li><a href="confirm.html">Confirm page</a></li>
                          <li><a href="404.html">404 page</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                </nav>
              </div> );
}
 
export default Navbar;