import React from 'react'
import FooterLinks from './FooterLinks';

function Footer() {
  return (
    <footer>
            <div className="container margin_60_35">
              <div className="row">
                <div className="col-lg-3 col-md-12">
                  <p>
                    <a href="index.html" title="Findoctor">
                      <img src="./assets/img/logo.png" data-retina="true" alt="" width="163" height="36" className="img-fluid"/>
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
  )
}

export default Footer