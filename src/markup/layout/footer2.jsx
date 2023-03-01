import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Footer2 = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "d9b2e0f5fc72cb94792110e8ff2028f3-us16"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <footer className="site-footer style2">
        <div
          className="section-full p-t50 p-b20 bg-primary text-white overlay-primary-dark footer-info-bar wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                  <div className="icon-content">
                    <h5 className="dlab-tilte">
                      <span className="icon-sm">
                        <i className="ti-location-pin"></i>
                      </span>
                      Company Address
                    </h5>
                    <p className="op7">
                      Demo address #8901 Marmora Road Chi Minh City, Vietnam
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                  <div className="icon-content">
                    <h5 className="dlab-tilte">
                      <span className="icon-sm">
                        <i className="ti-email"></i>
                      </span>
                      E-mail
                    </h5>
                    <p className="m-b0 op7">info@example.com</p>
                    <p className="op7">company@example.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                  <div className="icon-content">
                    <h5 className="dlab-tilte">
                      <span className="icon-sm">
                        <i className="ti-mobile"></i>
                      </span>
                      Phone Numbers
                    </h5>
                    <p className="m-b0 op7">Mobile : +00 234 678 9012</p>
                    <p className="op7">Phone : +0 1234 5678 90</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                  <div className="icon-content">
                    <h5 className="dlab-tilte">
                      <span className="icon-sm">
                        <i className="ti-alarm-clock"></i>
                      </span>
                      Office Hours
                    </h5>
                    <p className="m-b0 op7">Mon To Sat - 08.00-18.00</p>
                    <p className="op7">Sunday - Close</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="widget widget_about">
                  <div className="footer-logo">
                    <Link to="/">
                      <img src={require("../../images/logo.png")} alt="" />
                    </Link>
                  </div>
                  <p>
                    Industry Lorem Ipsum has been the industry's standard dummy
                    text ever since the when an printer took a galley of type
                    and scrambled it to make.
                  </p>
                  <div className="widget widget_getintuch">
                    <ul>
                      <li>
                        <i className="ti-location-pin"></i> demo address #8901
                        Marmora Road Chi Minh City, Vietnam{" "}
                      </li>
                      <li>
                        <i className="ti-mobile"></i> 0800-123456 (24/7 Support
                        Line)
                      </li>
                      <li>
                        <i className="ti-email"></i> info@example.com
                      </li>
                    </ul>
                  </div>
                  <ul className="list-inline m-a0">
                    <li>
                      <Link
                        to="#"
                        className="site-button-link facebook button-md"
                      >
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="site-button-link google-plus button-md"
                      >
                        <i className="fa fa-google-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="site-button-link linkedin button-md"
                      >
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="site-button-link instagram button-md"
                      >
                        <i className="fa fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="site-button-link twitter button-md"
                      >
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="widget">
                  <h4 className="footer-title">Usefull Link</h4>
                  <ul className="list-2">
                    <li>
                      <Link to="/about-1">About Uss</Link>
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
                <div className="widget">
                  <h4 className="footer-title mb-2">Newsletter</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="subscribe-form m-b20 m-t30">
                    <form
                      className="dzSubscribe"
                      ref={form}
                      onSubmit={sendEmail}
                    >
                      <div className="dzSubscribeMsg"></div>
                      <div className="input-group">
                        <input
                          name="dzEmail"
                          required="required"
                          className="form-control radius-no"
                          placeholder="Your Email Address"
                          type="email"
                        />
                        <span className="input-group-btn">
                          <button
                            name="submit"
                            value="Submit"
                            type="submit"
                            className="site-button radius-no"
                          >
                            SEND
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="widget recent-posts-entry">
                  <h4 className="footer-title">Recent Post</h4>
                  <div className="widget-post-bx">
                    <div className="widget-post clearfix">
                      <div className="dlab-post-media">
                        <img
                          src={require("../../images/blog/recent-blog/pic1.jpg")}
                          width="200"
                          height="143"
                          alt=""
                        />
                      </div>
                      <div className="dlab-post-info">
                        <div className="dlab-post-meta">
                          <ul>
                            <li className="post-date">
                              {" "}
                              <strong>13 Aug</strong>{" "}
                            </li>
                            <li className="post-author">
                              {" "}
                              By <Link to="#">Jack </Link>{" "}
                            </li>
                          </ul>
                        </div>
                        <div className="dlab-post-header">
                          <h6 className="post-title">
                            <Link to="/blog-single-left-sidebar">
                              How To Get People To Like Industry
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="widget-post clearfix">
                      <div className="dlab-post-media">
                        <img
                          src={require("../../images/blog/recent-blog/pic2.jpg")}
                          width="200"
                          height="160"
                          alt=""
                        />
                      </div>
                      <div className="dlab-post-info">
                        <div className="dlab-post-meta">
                          <ul>
                            <li className="post-date">
                              {" "}
                              <strong>13 Aug</strong>{" "}
                            </li>
                            <li className="post-author">
                              {" "}
                              By <Link to="#">Jamie </Link>{" "}
                            </li>
                          </ul>
                        </div>
                        <div className="dlab-post-header">
                          <h6 className="post-title">
                            <Link to="/blog-single-left-sidebar">
                              Seven Doubts You Should Clarify About
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="widget-post clearfix">
                      <div className="dlab-post-media">
                        <img
                          src={require("../../images/blog/recent-blog/pic3.jpg")}
                          width="200"
                          height="160"
                          alt=""
                        />
                      </div>
                      <div className="dlab-post-info">
                        <div className="dlab-post-meta">
                          <ul>
                            <li className="post-date">
                              {" "}
                              <strong>13 Aug</strong>{" "}
                            </li>
                            <li className="post-author">
                              {" "}
                              By <Link to="#">Winnie </Link>{" "}
                            </li>
                          </ul>
                        </div>
                        <div className="dlab-post-header">
                          <h6 className="post-title">
                            <Link to="/blog-single-left-sidebar">
                              Why You Should Not Go To Industry
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer2;
