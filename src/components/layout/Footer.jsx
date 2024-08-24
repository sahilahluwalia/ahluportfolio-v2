import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import icon1 from "../../images/icon/icon1.png";
import icon2 from "../../images/icon/icon2.png";
import icon3 from "../../images/icon/icon3.png";
import qrCode from "../../asserts/socialIcons/qr-code.png";
import { ahluLogoWithName, socialMediaLinks } from "../../data/websiteData";
import { companyDetails } from "../../data/websiteData";
import { subscribeToNewsletter } from "../../fetchers";
// import tripod from "../../asserts/Catalogue PDF Files/Trifold_Minimum_Clarity.pdf";
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
    link: "/products#products",
  },
  {
    title: "Enquiry",
    link: "/quote",
  },
  {
    title: "Contact Us",
    link: "/contact#contact",
  },
  {
    title: "Career",
    // link: "/career",
  },
  {
    title: "Literature",
    link: "https://blog.ahluengineers.com",
    href: true,
  },

  {
    title: "Trifold",
    link: "tripod",
    href: true,
  },

  {
    title: "Download Catalogues",
    link: "/catalogues#catalogues",
  },

  // {
  //   title: "Download Brochures",
  //   link: "/download-brochures",
  // },
];

const QrCodeComponent = ({ qrShow, setQrShow }) => {
  if (qrShow)
    return (
      <div
        style={{
          width: "300px",
          height: "300px",
          position: "absolute",
          bottom: "70px",
          right: "40px",
          cursor: "pointer",
        }}
        onClick={() => {
          setQrShow(false);
        }}
      >
        <img src={qrCode} alt='qrcode' />
      </div>
    );
};

const Footer = () => {
  const form = useRef();
  const [email, setEmail] = useState("");

  const [alert, setAlert] = useState({
    success: false,
    error: false,
  });
  const [qrShow, setQrShow] = useState(false);

  const onSuccess = () => {
    setAlert({ success: true, error: false });
    setTimeout(() => {
      setAlert({ success: false, error: false });
    }, 7500);
  };
  const onError = () => {
    setAlert({ success: false, error: true });
  };
  const handleSubmit = async (e) => {
    setAlert({ success: false, error: false });
    e.preventDefault();
    const data = {
      email,
    };
    console.log(API_URL);
    try {
      const result = await subscribeToNewsletter(data);
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
      // onSuccess();
    }
  };

  return (
    <>
      {" "}
      <footer className='site-footer style1'>
        <div className='dlab-newsletter'>
          <div className='container'>
            <div
              className='ft-contact wow fadeIn'
              data-wow-duration='2s'
              data-wow-delay='0.6s'
            >
              <div className='ft-contact-bx'>
                <a
                  href={companyDetails.googleMapLink}
                  rel='noreferrer'
                  target='_blank'
                >
                  <img src={icon1} alt='' />
                  <h4 className='title'>Company Address</h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                    }}
                  >
                    {companyDetails.address}
                  </p>
                </a>
              </div>

              <div className='ft-contact-bx'>
                <a className='footer-col' href={companyDetails.phoneTo}>
                  <img src={icon2} alt='' />
                  <h4 className='title'>Phone</h4>
                  <p>{companyDetails.phone}</p>
                </a>
              </div>

              <div
                style={{
                  wordWrap: "break-word",
                }}
                className='ft-contact-bx'
              >
                <img src={icon3} alt='' />
                <h4 className='title'>Connect us via</h4>
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
        <div className='footer-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 col-sm-6'>
                <div className='widget widget_about'>
                  <h4 className='footer-title'>About AhluEngineers</h4>
                  <p>
                    Serving in 3+ countries in Industrial Automation Solutions
                    for customized development.
                  </p>
                  <Link to={"/about"}>Read More</Link>
                </div>
              </div>
              <div className='col-md-4 col-sm-6'>
                <div className='widget'>
                  <h4 className='footer-title'>Other related Links</h4>
                  <ul
                    className='list-2'
                    style={{
                      marginBottom: "1rem",
                    }}
                  >
                    {usefulLinks.map((item, index) => {
                      if (item.href) {
                        return (
                          <li key={index}>
                            <Link
                              to={item.link}
                              target='_blank'
                              style={{
                                textDecoration: "none",
                              }}
                            >
                              {item.title}
                            </Link>
                          </li>
                        );
                      } else
                        return (
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
                        );
                    })}
                  </ul>
                </div>
              </div>
              <div className='col-md-4 col-sm-12 flex-grow-1'>
                <div className='widget widget_subscribe'>
                  <h4 className='footer-title'>Subscribe to our Newsletter</h4>

                  {alert.success ? (
                    <>
                      {" "}
                      <div>
                        <p
                          style={{
                            color: "white",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                          }}
                        >
                          Welcome aboard{" "}
                          <span role='img' aria-label='Ship'>
                            🚢
                          </span>
                          <br />
                          {email}{" "}
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
                        className='dzSubscribe'
                        ref={form}
                        onSubmit={handleSubmit}
                      >
                        <div className='dzSubscribeMsg'></div>
                        <div className='form-group'>
                          <div className='input-group'>
                            <input
                              name='dzEmail'
                              onChange={(e) => setEmail(e.target.value)}
                              required='required'
                              type='email'
                              className='form-control'
                              placeholder='Your Email Address'
                            />
                            <div className='input-group-addon'>
                              <button
                                name='submit'
                                value='Submit'
                                type='submit'
                                className='site-button fa fa-paper-plane-o'
                              ></button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </>
                  )}

                  {alert.error ? (
                    <>
                      <p
                        style={{
                          color: "white",
                        }}
                      >
                        ERROR PLEASE TRY AGAIN !!
                        <br />
                        email us at{" "}
                        <a href={`mailto:${companyDetails.secondaryEmail}`}>
                          {companyDetails.secondaryEmail}
                        </a>
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
                data-uid='569a3851ca'
                src='https://home-industries.ck.page/569a3851ca/index.js'
              ></script>
            </div>
          </div>
        </div>
        <div className='footer-bottom footer-line'>
          <div className='container'>
            <div className='footer-bottom-in'>
              <div className='footer-bottom-logo'>
                <Link to={"/"}>
                  <img src={ahluLogoWithName} alt='ahlulogo' />
                </Link>
              </div>
              <div className='footer-bottom-social'>
                <ul className='dlab-social-icon dez-border'>
                  {socialMediaLinks.map((item, index) => {
                    if (item.image)
                      return (
                        <li key={index}>
                          <a
                            className={item.icon}
                            target='_blank'
                            rel='noopener noreferrer'
                            href={item.link}
                          >
                            <img
                              style={{
                                width: "1.5rem",
                              }}
                              src={item.image}
                              alt=''
                            />
                          </a>
                        </li>
                      );
                    else
                      return (
                        <li key={index}>
                          <a
                            className={item.icon}
                            target='_blank'
                            rel='noopener noreferrer'
                            href={item.link}
                          >
                            .
                          </a>
                        </li>
                      );
                  })}
                  <li
                    style={{
                      paddingLeft: "1.5rem",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      qrShow ? setQrShow(false) : setQrShow(true);
                    }}
                  >
                    <img
                      style={{
                        width: "1.6rem",
                      }}
                      src={qrCode}
                      alt=''
                    />
                  </li>
                </ul>
                <QrCodeComponent qrShow={qrShow} setQrShow={setQrShow} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
