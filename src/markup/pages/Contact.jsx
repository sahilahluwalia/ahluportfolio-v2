import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { contactForm } from "../../fetchers";
import { companyDetails, socialMediaLinks } from "../../data/websiteData";
const bg = require("../../images/banner/bnr1.jpg");

const Contact = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    success: false,
    error: false,
  });

  const alertToggle = (type) => {
    if (type === "success") {
      setAlert({ success: true, error: false });
      setTimeout(() => {
        setAlert({ success: false, error: false });
      }, 5500);
    } else if (type === "error") {
      setAlert({ success: false, error: true });
      setTimeout(() => {
        setAlert({ success: false, error: false });
      }, 5500);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
    contactForm(inputValues);
  };

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle bg-pt"
          style={{ backgroundImage: "url(" + bg + ")" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Contact</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to="/index">Home</Link>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full content-inner bg-white contact-style-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex m-b30">
                <div className="p-a30 border contact-area border-1 align-self-stretch radius-sm">
                  <h3 className="m-b5">Quick Contact</h3>
                  <p>
                    If you have any Enquires, simply use the following contact
                    details.
                  </p>
                  <ul className="no-margin">
                    <li className="icon-bx-wraper left m-b30">
                      <div className="icon-bx-xs border-1">
                        {" "}
                        <Link to="/#" className="icon-cell">
                          <i className="ti-location-pin"></i>
                        </Link>{" "}
                      </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-tb0 dlab-tilte">
                          Factory Address:
                        </h6>
                        <span
                          style={{
                            display: "block",
                            fontWeight: 600,
                            color: "black",
                          }}
                        >
                          Ahlu Engineers Pvt. Ltd.
                        </span>
                       

                        <p>{companyDetails.address}</p>
                      </div>
                    </li>
                    <li className="icon-bx-wraper left  m-b30">
                      <div className="icon-bx-xs border-1">
                        {" "}
                        <Link to="/#" className="icon-cell">
                          <i className="ti-email"></i>
                        </Link>{" "}
                      </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-tb0 dlab-tilte">
                          Email:
                        </h6>
                        <a href={`mailto:${companyDetails.email}`}>
                          <p>{companyDetails.email}</p>
                        </a>
                        <a href={companyDetails.secondaryEmailTo}>
                          <p>{companyDetails.secondaryEmail}</p>
                        </a>
                      </div>
                    </li>
                    <li className="icon-bx-wraper left">
                      <div className="icon-bx-xs border-1">
                        {" "}
                        <Link to="/#" className="icon-cell">
                          <i className="ti-mobile"></i>
                        </Link>{" "}
                      </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-tb0 dlab-tilte">
                          PHONE
                        </h6>
                        <a href={companyDetails.phoneTo}>
                          <p>{companyDetails.phone}</p>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="m-t20">
                    <ul className="dlab-social-icon border dlab-social-icon-lg">
                      {socialMediaLinks.map(({ icon, link, name }) => (
                        <li key={name}>
                          <a
                            href={link}
                            // open in new tab
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${icon} bg-primary`}
                          ></a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6  mb-4 m-b30 mb-md-0">
                <div className="p-a30 bg-gray clearfix radius-sm">
                  <h3 className="m-b10">Send Message</h3>
                  <div className="dzFormMsg"></div>
                  <form onSubmit={handleFormSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              onChange={(e) => {
                                setInputValues({
                                  ...inputValues,
                                  name: e.target.value,
                                });
                              }}
                              name="name"
                              type="text"
                              required
                              className="form-control"
                              placeholder="Your Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              onChange={(e) => {
                                setInputValues({
                                  ...inputValues,
                                  email: e.target.value,
                                });
                              }}
                              name="email"
                              type="email"
                              className="form-control"
                              required
                              placeholder="Your Email Id"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <div className="input-group">
                            <textarea
                              onChange={(e) => {
                                setInputValues({
                                  ...inputValues,
                                  message: e.target.value,
                                });
                              }}
                              name="message"
                              rows="8"
                              className="form-control"
                              required
                              placeholder="Your Message..."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button
                          name="submit"
                          type="submit"
                          value="Submit"
                          className="site-button"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="section-content box-sort-in ">
                    {
                      // show success message if form is submitted
                      (alert.success && (
                        <div className="alert alert-success mt-3 mx-auto">
                          Your message has been sent successfully.
                        </div>
                      )) ||
                        (alert.error && (
                          <div className="alert alert-danger mt-3 mx-auto">
                            There was an error sending your message. Please try
                            again.
                          </div>
                        ))
                    }
                  </div>
                </div>
              </div>

              <div className="col-lg-4 d-flex m-b30">
                <iframe
                  title="map2"
                  src={companyDetails.map}
                  className="align-self-stretch radius-sm"
                  style={{ border: "0", width: "100%", minHeight: "100%" }}
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
