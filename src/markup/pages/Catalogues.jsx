import React, { useState } from "react";
import { Link } from "react-router-dom";
import { catalogueList } from "../../utils/catalogues";
import { specialPurposeMachineImage as bg } from "data/imagesData";

const Catalogues = () => {
  const editedCatalogueList = catalogueList.map((item) => {
    return {
      ...item,
      serialName: item.name.split(" ")[1],
      serialTag: item.name.split(" ")[2],
    };
  });
  return (
    <>
      <div className=" bg-white ">
        <div className="midContent">
          <div
            className="dlab-bnr-inr overlay-black-middle bg-pt "
            style={{
              backgroundImage: "url(" + bg + ")",
              backgroundPosition: "center",
            }}
          >
            <div className="container ">
              <div className="dlab-bnr-inr-entry">
                <h1 className="text-white">Catalogues</h1>
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Catalogues</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* make a section where you can download the catalogues on desktop it would show 4 images on one row in flex position and in mobile it would go in columne direction use bootstrap css classes */}
          <div id="catalogues" className="section-full content-inner bg-white">
            <div className="container">
              <div className="section-head text-center">
                <h2 className="box-title m-tb0">
                  Download Our Catalogues
                  <span className="bg-primary"></span>
                </h2>
                <p>
                  We have a wide range of products and services. Please download
                  our catalogues to know more about our products and services.
                </p>
                <div className="dlab-separator bg-primary"></div>
                <div className="row">
                  {editedCatalogueList.map((catalogue, index) => {
                    return (
                      <>
                        <div
                          key={catalogue.serialName}
                          className="col-xl-3  align-items-stretch col-md-4 col-sm-6 g-3 service-box style3"
                        >
                          <h4 className="m-b10">
                            <span className="highlight-serial">
                              {catalogue.serialName}
                            </span>{" "}
                            {catalogue.serialTag}
                          </h4>

                          <a
                            href={catalogue.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={catalogue.image}
                              alt={`catalog ${index}`}
                            />
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
