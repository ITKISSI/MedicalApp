import { Link } from "react-router-dom";

const Navbar = () => {
    return (   <div className="row">
                <div className="col-lg-3 col-6">
                  <div id="logo_home">
                    <h1>
                      <Link to = "/" title="Findoctor">
                          Findoctor
                      </Link>
                      </h1>
                  </div>
                </div>
                <nav className="col-lg-9 col-6">
                  <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="#0"><span>Menu mobile</span></a>
                  <ul id="top_access">
                    <li>
                      
                        <Link to = "/login">
                          <i class="pe-7s-user"></i>
                        </Link>
                        
                      
                    </li>
                    <li>
                    <Link to = "/registerDoctor">
                      <i className="pe-7s-add-user"></i>
                      </Link>
                    </li>
                  </ul>
                  <div className="main-menu">
                    <ul>
                      <li className="submenu">
                        <a href="#0" class="show-submenu">Home<i className="icon-down-open-mini"></i></a>
                        
                        <ul>
                          <li><a href="index-7.html">Home with Map</a></li>
                        </ul>
                        
                        <Link to = "/" class="show-submenu">
                        Home
                      </Link>
                        
                      </li>
                      <li className="submenu">
                        <a href="#0" className="show-submenu">Pages<i className="icon-down-open-mini"></i></a>
                        <ul>
                          <li className="third-level"><a href="#0">List pages</a>
                            <ul>
                              <li><Link to="/list" >List map page</Link></li>
                            </ul>
                          </li>
                          <li className="third-level"><a href="#0">Detail pages</a>
                            <ul>
                              <li>
                                <Link to= "/detail">
                                  Detail page 3
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to= "/submitReview">
                                Submit Review
                            </Link>
                          </li>

                          <li> <Link to = "/login">Login</Link></li>
                          <li> <Link to = "/registerDoctor">Working doctor register</Link></li>
                          <li> <Link to = "/register">Register</Link></li>
                          <li><Link to = "/about">About Us</Link></li>
                          <li><Link to = "/contacts">Contacts</Link></li>
                        </ul>
                      </li>
                      <li className="submenu">
                        <a href="#0" className="show-submenu">Extra Elements<i className="icon-down-open-mini"></i></a>
                        <ul>
                          <li><Link to="/booking" >Booking page</Link></li>
                          <li><Link to="/confirm" >Confirm page</Link></li>
                          <li><Link to="/error404" >404 page</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                </nav>
              </div> );
}
 
export default Navbar;