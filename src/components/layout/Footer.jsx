import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ahluLogoWithName, socialMediaLinks } from "../../data/websiteData";

const Footer = () => {
  const usefulLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Products",
      link: "/products",
    },
    {
      title: "Enquiry",
      link: "/enquiry",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Career",
      link: "/career",
    },
    {
      title: "Download Catalogues",
      link: "/download-catalogues",
    },
    {
      title: "Download Brochures",
      link: "/download-brochures",
    },
  ];
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    emailjs
      .sendForm(
        "gmail",
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
      <footer className="site-footer style1">
        <div className="section-full p-t50 p-b20 bg-primary text-white overlay-primary-dark footer-info-bar">
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
                    <p className="op7">Phone : +00 1234 5678 90</p>
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
          <div className="container">
            <div className="row">
              {/* <div className="col-md-4 col-sm-6">
                <div className="widget widget_about">
                  <h4 className="footer-title">About AhluEngineers</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard.
                  </p>
                  <Link to={"/about-2"} className="readmore">
                    Read More
                  </Link>
                </div>
              </div> */}
              <div className="col-md-4 col-sm-6">
                <div className="widget">
                  <h4 className="footer-title">Usefull Link</h4>
                  <ul
                    className="list-2"
                    style={{
                      marginBottom: "1rem",
                    }}
                  >
                    {usefulLinks.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.link}
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 flex-grow-1">
                <div className="widget widget_subscribe">
                  <h4 className="footer-title">Subscribe to our Newsletter</h4>
                  <p>
                    If you have any questions. Subscribe to our newsletter to
                    get our latest products.
                  </p>
                  <form className="dzSubscribe" ref={form} onSubmit={sendEmail}>
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
              <div
                className="col-lg-4 col-md-12 col-sm-12 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <div className="icon-bx-wraper bx-style-1 m-b15 p-a30 radius-sm br-col-w1 bg-tpw1">
                  <h5 className="text-white font-weight-300">
                    Serving in 70+ countries for web, software and mobile app
                    development
                  </h5>
                  <p>
                    United States (USA), United Kingdom (UK), Singapore, Kenya,
                    South Africa Germany, Canada, Australia, Netherlands,
                    Norway, United Arab Emirates (UAE) , Finland etc.{" "}
                  </p>
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
                  <img src={ahluLogoWithName} alt="ahlulogo" />
                </Link>
              </div>
              <div className="footer-bottom-social">
                <ul className="dlab-social-icon dez-border">
                  {socialMediaLinks.map((item, index) => (
                    <li key={index}>
                      <a
                        className={item.icon}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.link}
                      ></a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
