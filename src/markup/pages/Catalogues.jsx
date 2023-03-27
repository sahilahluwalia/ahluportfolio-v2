import React, { useState } from "react";
import { Link } from "react-router-dom";
import { contactForm } from "../../fetchers";
import { catalogueList } from "../../utils/catalogues";

import { companyDetails, socialMediaLinks } from "../../data/websiteData";
const bg = require("../../images/banner/bnr1.jpg");
const Catalogues = () => {
  console.log(catalogueList);
  //   console.log();
  return (
    <>
      <div className=' bg-white '>
        <div className='midContent'>
          <div
            className='dlab-bnr-inr overlay-black-middle bg-pt '
            style={{ backgroundImage: "url(" + bg + ")" }}
          >
            <div className='container '>
              <div className='dlab-bnr-inr-entry'>
                <h1 className='text-white'>Catalogues</h1>
                <div className='breadcrumb-row'>
                  <ul className='list-inline'>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>Catalogues</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* make a section where you can download the catalogues on desktop it would show 4 images on one row in flex position and in mobile it would go in columne direction use bootstrap css classes */}
          <div id='catalogues' className='section-full content-inner bg-white'>
            <div className='container'>
              <div className='section-head text-center'>
                <h2 className='box-title m-tb0'>
                  Download Our Catalogues
                  <span className='bg-primary'></span>
                </h2>
                <p>
                  We have a wide range of products and services. Please download
                  our catalogues to know more about our products and services.
                </p>
                <div className='dlab-separator bg-primary'></div>
                <div className='row'>
                  {catalogueList.map((catalogue) => {
                    return (
                      <>
                        <div className='col-xl-3  align-items-stretch col-md-4 col-sm-6 g-3 service-box style3'>
                          <h4 className='m-b10'>{catalogue.name}</h4>
                          <a
                            href={catalogue.link}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <img src={catalogue.image} />
                          </a>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogues;
