import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import icon1 from "../../images/icon/icon1.png";
import icon2 from "../../images/icon/icon2.png";
import icon3 from "../../images/icon/icon3.png";
import { ahluLogoWithName, socialMediaLinks } from "../../data/websiteData";
import { companyDetails } from "../../data/websiteData";
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
        <div className="dlab-newsletter">
          <div className="container">
            <div
              className="ft-contact wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div className="ft-contact-bx">
                <a
                  href={companyDetails.googleMapLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={icon1} alt="" />
                  <h4 className="title">Address</h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                    }}
                  >
                    {companyDetails.address}
                  </p>
                </a>
              </div>

              <div className="ft-contact-bx">
                <a href={companyDetails.phoneTo}>
                  <img src={icon2} alt="" />
                  <h4 className="title">Phone</h4>
                  <p>{companyDetails.phone}</p>
                </a>
              </div>

              <div className="ft-contact-bx">
                <a href={`mailto:${companyDetails.email}`}>
                  <img src={icon3} alt="" />
                  <h4 className="title">Email Contact</h4>
                  <p>{companyDetails.email}</p>
                </a>
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
