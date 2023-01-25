import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                <div class="cta-text">
                  <h4>Find us</h4>
                  <span>
                    <a href="https://www.google.com/maps/place/Walchand+College+of+Engineering/@16.8457387,74.5992688,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc1237f52c65db5:0xa3535676176ded0a!8m2!3d16.8457387!4d74.6014575?shorturl=1">
                      Walchand College of Engineering, Sangli
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-phone"></i>
                <div class="cta-text">
                  <h4>Call us</h4>
                  <span>+91 94237 59443</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="far fa-envelope-open"></i>
                <div class="cta-text">
                  <h4>Mail us</h4>
                  <span>wceartcircle@walchandsangli.ac.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="footerDiv">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="http://wceartcircle.github.io">
                    <img
                      src="https://wceartcircle.github.io/images/aclogo_black.png"
                      alt=""
                      srcset="" style={{height:100}}
                    />
                  </a>
                </div>
                <div class="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit, <br />
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
                <div class="footer-social-icon">
                  <span>Follow us</span>
                  <a href="https://www.facebook.com/wceartcircle?mibextid=ZbWKwL">
                    <i class="fab fa-facebook-f " style={{fontSize:25}}></i>
                  </a>
                  <a href="#">
                  <i class="fab fa-instagram" id="insta" aria-hidden="true"  style={{fontSize:25}}></i>
                  </a>
                  <a href="https://youtube.com/@wceartcircle">
                    <i class="fab fa-brands fa-youtube "  style={{fontSize:25}}></i>
                  </a>
                </div>
            </div>
            {/* <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div> */}
            {/* <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder='Email address'/>
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div> */}
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>
                  All Rights Reserved © WCE ART CIRCLE{" "}
                  <a href="https://wceartcircle.github.io/">AC</a>
                </p>
              </div>
            </div>
            {/* <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
