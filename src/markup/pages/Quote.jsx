import React, { useEffect, useReducer, useState } from "react";
// import { Link } from 'react-router-dom';
// import Footer from "../layout/footer";
import {
  freeQuote,
  currentUrlSender,
  ipDataToLocalStorage,
} from "../../fetchers";
import { companyDetails, headerDetails } from "../../data/websiteData";
import { specialPurposeMachineImage as bg } from "data/imagesData";

// const bg = require("../../images/background/bg5.jpg");

const Quote = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.payload };
      case "phone":
        // accept only numbers
        if (action.payload.match(/^[0-9]*$/)) {
          return { ...state, phone: action.payload };
        }
        return state;
      case "email":
        return { ...state, email: action.payload };
      case "industry":
        return { ...state, industry: action.payload };
      case "message":
        return { ...state, message: action.payload };
      case "success":
        return { name:"", phone:"", email:"", industry:"", message:"" };
      default:
        return state;
    }
  };

  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const [state, dispatch] = useReducer(reducer, {
    name: "",
    phone: "",
    email: "",
    industry: "",
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
      }, 7500);
    } else if (type === "error") {
      setAlert({ success: false, error: true });
      setTimeout(() => {
        setAlert({ success: false, error: false });
      }, 7500);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
    try {
      const result = await freeQuote(state);
      if (result.status === 200) {
        alertToggle("success");
        dispatch({ type: "success" });
      } else {
        alertToggle("error");
      }
    } catch (error) {
      alertToggle("error");
    }
  };



  return (
    <>
      <div className='page-content bg-white'>
        <div
          id='quote'
          className='section-full content-inner contact-page-9 overlay-black-dark'
          style={{ background: "url(" + bg + ") 30% 100%" }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-12 text-white'>
                <div className='row'>
                  <div className='col-lg-12 col-md-12 m-b30'>
                    <div className='icon-bx-wraper bx-style-1 p-a20 radius-sm'>
                      <div className='icon-content'>
                        <h5 className='dlab-tilte'>
                          <span className='icon-sm text-primary'>
                            <i className='ti-location-pin'></i>
                          </span>
                          Factory Address
                        </h5>
                        <p>{companyDetails.address}</p>
                        <h6 className='m-b15 font-weight-400'>
                          <i className='ti-alarm-clock'></i> Office Hours
                        </h6>
                        <p className='m-b0'>{headerDetails.officeHoursTitle}</p>
                        <p>{headerDetails.officeHours}</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-6 m-b30'>
                    <div className='icon-bx-wraper bx-style-1 p-a20 radius-sm'>
                      <div className='icon-content'>
                        <h5 className='dlab-tilte'>
                          <span className='icon-sm text-primary'>
                            <i className='ti-email'></i>
                          </span>
                          E-mail
                        </h5>
                        <a href={`mailto:${companyDetails.email}`}>
                          <p className='m-b0'>{companyDetails.email}</p>
                        </a>
                        <a href={companyDetails.secondaryEmailTo}>
                          <p className='m-b0'>
                            {companyDetails.secondaryEmail}
                          </p>
                        </a>
                        {/* <p className="m-b0">hr@example.com</p>
                        <p className="m-b0">support@example.com</p> */}
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-6 m-b30'>
                    <div className='icon-bx-wraper bx-style-1 p-a20 radius-sm'>
                      <div className='icon-content'>
                        <h5 className='dlab-tilte'>
                          <span className='icon-sm text-primary'>
                            <i className='ti-mobile'></i>
                          </span>
                          Phone Numbers
                        </h5>
                        <a href={companyDetails.phoneTo}>
                          <p className='m-b0'>{companyDetails.phone}</p>
                        </a>
                        {/* <p className="m-b0">+91-12345-67890</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-8 col-md-12 m-b30'>
                <form
                  className='inquiry-form wow box-shadow bg-white fadeInUp'
                  data-wow-delay='0.2s'
                  onSubmit={handleSubmit}
                >
                  <h3 className='title-box font-weight-300 m-t0 m-b10'>
                    Let's Automate your Application into Reality{" "}
                    <span className='bg-primary'></span>
                  </h3>
                  <p>Discover the Power of Innovative Manufacturing Solutions Tailored to Your Unique Needs</p>
                  {/* <p>
                    Provide us the oppocuity to understand/ study your application requirements, so that we can come up with custimzed solution to fit effecietyly  cHATGPT
                  </p> */}
                  <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='form-group'>
                        <div className='input-group'>
                          <span className='input-group-addon'>
                            <i className='ti-user text-primary'></i>
                          </span>
                          <input
                            name='name'
                            value={state.name}
                            onChange={handleChange}
                            type='text'
                            required
                            className='form-control'
                            placeholder='First Name'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <div className='form-group'>
                        <div className='input-group'>
                          <span className='input-group-addon'>
                            <i className='ti-mobile text-primary'></i>
                          </span>
                          <input
                            name='phone'
                            value={state.phone}
                            onChange={handleChange}
                            type='text'
                            required
                            className='form-control'
                            placeholder='Phone'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-12 col-md-12'>
                      <div className='form-group'>
                        <div className='input-group'>
                          <span className='input-group-addon'>
                            <i className='ti-email text-primary'></i>
                          </span>
                          <input
                            name='email'
                            value={state.email}
                            onChange={handleChange}
                            type='email'
                            className='form-control'
                            required
                            placeholder='Your Email Id'
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-6"> */}
                    <div className='col-lg-12 col-md-12'>
                      <div className='form-group'>
                        <div className='input-group'>
                          <span className='input-group-addon'>
                            <i className='ti-check-box text-primary'></i>
                          </span>
                          <select
                            className='input-select form-control'
                            name='industry'
                            onChange={handleChange}
                          >
                            <option>Select Industry</option>
                            <option>Oil/Gas Plant</option>
                            <option>Steel Plant</option>
                            <option>Factory</option>
                            <option>Construct</option>
                            <option>Solar Plant</option>
                            <option>Food Industry</option>
                            <option>Agriculture</option>
                            <option>Ship Industry</option>
                            <option>Leather Industry</option>
                            <option>Nuclear Plant</option>
                            <option>Beer Factory</option>
                            <option>Mining Industry</option>
                            <option>Car Industry</option>
                            <option>Plastic Industry</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <div className="input-group gap-3 align-items-center">
                          <span className="input-group-addon"></span>
                          <i className="ti-file text-primary"></i>
                          <i className="ti-file text-primary "></i>

                          <button className="btn btn-secondary">
                            Upload File
                          </button>
                        </div>
                      </div>
                    </div> */}
                    <div className='col-lg-12 col-md-12'>
                      <div className='form-group'>
                        <div className='input-group'>
                          <span className='input-group-addon'>
                            <i className='ti-agenda text-primary'></i>
                          </span>
                          <textarea
                            value={state.message}
                            onChange={handleChange}
                            name='message'
                            rows='6'
                            className='form-control'
                            required
                            placeholder='Tell us about your project or idea'
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-12 col-md-12'>
                      <button
                        name='submit'
                        type='submit'
                        value='Submit'
                        className='site-button button-md'
                      >
                        {" "}
                        <span>Get A Free Quote!</span>{" "}
                      </button>

                      <div className='section-content box-sort-in '>
                        {(alert.success && (
                          <div className='alert alert-success mt-3 mx-auto'>
                            Your message has been sent successfully.
                          </div>
                        )) ||
                          (alert.error && (
                            <div className='alert alert-danger mt-3 mx-auto'>
                              There was an error sending your message. Please
                              try again.
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Quote;
