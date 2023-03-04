import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import icon1 from "../../images/icon/icon1.png";
import icon2 from "../../images/icon/icon2.png";
import icon3 from "../../images/icon/icon3.png";
import { ahluLogoWithName, socialMediaLinks } from "../../data/websiteData";
import { companyDetails } from "../../data/websiteData";
import SubscribeForm from "../SubscribeForm";
import axios from "axios";
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const API_URL = process.env.REACT_APP_API_URL;

const usefulLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Products",
    link: "/products",
  },
  {
    title: "Enquiry",
    link: "/quote",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
  {
    title: "Career",
    link: "/career",
  },
  {
    title: "Download Catalogues",
    link: "/catalogues",
  },
  // {
  //   title: "Download Brochures",
  //   link: "/download-brochures",
  // },
];
const Footer = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onSuccess = () => {
    setSuccess(true);
    setError(false);
    setTimeout(() => {
      setSuccess(false);
    }, 6000);
  };
  const onError = () => {
    setError(true);
    setSuccess(false);
    setTimeout(() => {
      setError(false);
    }, 10000);
  };
  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    const data = {
      email,
    };
    console.log(API_URL);
    try {
      const result = await axios.post(`${API_URL}/api/subscribe`, data);
      console.log(result);
      if (result.status === 200) {
        console.log("success");
        onSuccess();
      } else {
        console.log("error");
        onError();
      }
    } catch (err) {
      console.log(err);
      onError();
    }
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
                  <h4 className="title">Company Address</h4>
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
                <a className="footer-col" href={companyDetails.phoneTo}>
                  <img src={icon2} alt="" />
                  <h4 className="title">Phone</h4>
                  <p>{companyDetails.phone}</p>
                </a>
              </div>

              <div
                style={{
                  wordWrap: "break-word",
                }}
                className="ft-contact-bx"
              >
                <img src={icon3} alt="" />
                <h4 className="title">Connect us via</h4>
                <a href={`mailto:${companyDetails.email}`}>
                  <p>{companyDetails.email}</p>
                </a>

                <a href={companyDetails.secondaryEmailTo}>
                  <p>{companyDetails.secondaryEmail}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="widget widget_about">
                  <h4 className="footer-title">About AhluEngineers</h4>
                  <p>
                    Serving in 3+ countries in Industrial automation solutions
                    for customized developement.
                  </p>
                  <Link to={"/about"}>Read More</Link>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="widget">
                  <h4 className="footer-title">Other related Links</h4>
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

                  {success ? (
                    <>
                      {" "}
                      <div>
                        <p>
                          Welcome aboard {email ? `, ${email}` : ""}{" "}
                          <span role="img" aria-label="Ship">
                            🚢
                          </span>
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <p>
                        If you have any questions. Subscribe to our newsletter
                        to get our latest products.
                      </p>
                      <form
                        className="dzSubscribe"
                        ref={form}
                        onSubmit={handleSubmit}
                      >
                        <div className="dzSubscribeMsg"></div>
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              name="dzEmail"
                              onChange={(e) => setEmail(e.target.value)}
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
                    </>
                  )}

                  {error ? (
                    <>
                      <p
                        style={{
                          color: "white",
                        }}
                      >
                        ERROR PLEASE TRY AGAIN !!
                        <br />
                        email us at {companyDetails.email}
                      </p>
                    </>
                  ) : (
                    <></>
                  )}

                  <div></div>
                </div>
              </div>
              <script
                async
                data-uid="569a3851ca"
                src="https://home-industries.ck.page/569a3851ca/index.js"
              ></script>
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
                  {socialMediaLinks.map((item, index) => {
                    if (item.image)
                      return (
                        <li key={index}>
                          <a
                            className={item.icon}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.link}
                          >
                            <img
                              style={{
                                width: "1.5rem",
                              }}
                              src={item.image}
                              alt=""
                            />
                          </a>
                        </li>
                      );
                    else
                      return (
                        <li key={index}>
                          <a
                            className={item.icon}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.link}
                          >
                            .
                          </a>
                        </li>
                      );
                  })}
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

// mid-> other related links srtart icons remove underline
// left -> ahlu enigneers
// serving in 3 plus conutriy  read me about pageXOffset
// right -> subscribe to our newsletter

// const response = await axios.get(
//   "https://gmail.us21.list-manage.com/subscribe/post-jsongd",
//   {
//     params: {
//       u: "aa81d3bfc0c1f3ba793280b88",
//       id: "b7f07f685e",
//       f_id: "00238be1f0",
//       EMAIL: email,
//       subscribe: "Subscribe",
//     },
//   }
// );
// if (response.data.result == "success") {
//   setSuccess(true);
//   setTimeout(() => {
//     setSuccess(false);
//   }, 10000);
// } else {
//   setError(true);
//   setTimeout(() => {
//     setError(false);
//   }, 7000);
// }

//  const sendEmail = (e) => {
//    e.preventDefault();
//    //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
//    emailjs.sendForm("gmail", "YOUR_TEMPLATE_ID", email, publicKey).then(
//      (result) => {
//        console.log(result.text);
//      },
//      (error) => {
//        console.log(error.text);
//      }
//    );
//    e.target.reset();
//  };
//  const handleSubmit = async (e) => {
//    e.preventDefault();

//    // console.log(response.data);
//  };
