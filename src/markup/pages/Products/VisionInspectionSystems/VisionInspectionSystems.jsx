import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { companyDetails, socialMediaLinks } from "../../data/websiteData";

const productList = [];

const VisionInspectionSystems = () => {
  //   console.log(catalogueList);
  //   console.log();
  return (
    <>
      <div className="bg-white ">
        <div className="midContent">
          {/* make a section where you can download the Products on desktop it would show 4 images on one row in flex position and in mobile it would go in columne direction use bootstrap css classes */}
          <div className="py-5 bg-white section-full">
            <div className="container">
              <div className="text-center section-head">
                <h2 className=" box-title m-tb0">
                  Vision Inspection Systems
                  <span className="bg-primary"></span>
                </h2>
                <p>We have a wide range of VisionInspectionSystems.</p>
                <div className="dlab-separator bg-primary"></div>

                {/* create a reponsive 3 columns in desktop and 1 colum in mobile screen in bootstrap */}
                <div className="container"></div>

                <div className="row gx-5">
                  {productList?.map((item) => {
                    return (
                      <>
                        <div
                          key={item.link}
                          className="col-xs-12 col-lg-4 col-md-6 col-sm-8 service-box style3"
                        >
                          <div className="m-3 border border-2 ">
                            <a
                              // href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={item.image}
                                alt=""
                                style={{
                                  height: "450px",
                                  objectFit: "contain",
                                }}
                                className="card-img-top"
                              />
                            </a>

                            <h4 className="m-b10">{item.name}</h4>
                            <Link to={item.link}>
                              <div className="mb-3">View All →</div>
                            </Link>
                          </div>
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

export default VisionInspectionSystems;
