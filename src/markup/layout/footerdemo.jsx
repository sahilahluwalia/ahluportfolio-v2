import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo-light.png";
import icon1 from "../../images/icon/icon1.png";
import icon2 from "../../images/icon/icon2.png";
import icon3 from "../../images/icon/icon3.png";
import bgImage2 from "../../images/background/bg2.png";

const FooterDemo = () => {
  return (
    <>
      <footer className="site-footer style1">
        <div className="dlab-newsletter">
          <div className="container">
            <div
              className="ft-contact wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div className="ft-contact-bx">
                <img src={icon1} alt="" />
                <h4 className="title">Address</h4>
                <p>8901 Marmora Road Chi Minh City, Vietnam</p>
              </div>
              <div className="ft-contact-bx">
                <img src={icon2} alt="" />
                <h4 className="title">Phone</h4>
                <p>8901 Marmora Road Chi Minh City, Vietnam</p>
              </div>
              <div className="ft-contact-bx">
                <img src={icon3} alt="" />
                <h4 className="title">Email Contact</h4>
                <p>8901 Marmora Road Chi Minh City, Vietnam</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer-top"
          style={{
            backgroundImage: "url(" + bgImage2 + ")",
            backgroundSize: "contain",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="widget widget_about">
                  <h4 className="footer-title">About Industry</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard.
                  </p>
                  <Link to={"/about-1"} className="readmore">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="widget">
                  <h4 className="footer-title">Usefull Link</h4>
                  <ul className="list-2">
                    <li>
                      <Link to="/about-1">About Us</Link>
                    </li>
                    <li>
                      <Link to="/blog-grid-2">Blog</Link>
                    </li>
                    <li>
                      <Link to="/services-1">Services</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/portfolio-details">Projects </Link>
                    </li>
                    <li>
                      <Link to="/help-desk">Help Desk </Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/contact-1">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="widget widget_subscribe">
                  <h4 className="footer-title">Usefull Link</h4>
                  <p>
                    If you have any questions. Subscribe to our newsletter to
                    get our latest products.
                  </p>
                  <form
                    className="dzSubscribe"
                    action="script/mailchamp.php"
                    method="post"
                  >
                    <div className="dzSubscribeMsg"></div>
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          name="dzEmail"
                          required="required"
                          type="email"
                          className="form-control"
                          placeholder="Your Email Address"
                        />
                        <div className="input-group-addon">
                          <button
                            name="submit"
                            value="Submit"
                            type="submit"
                            className="site-button fa fa-paper-plane-o"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom footer-line">
          <div className="container">
            <div className="footer-bottom-in">
              <div className="footer-bottom-logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="footer-bottom-social">
                <ul className="dlab-social-icon dez-border">
                  <li>
                    <Link to={"#"} className="fa fa-facebook"></Link>
                  </li>{" "}
                  <li>
                    <Link to={"#"} className="fa fa-twitter"></Link>
                  </li>{" "}
                  <li>
                    <Link to={"#"} className="fa fa-linkedin"></Link>
                  </li>{" "}
                  <li>
                    <Link to={"#"} className="fa fa-pinterest"></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterDemo;
