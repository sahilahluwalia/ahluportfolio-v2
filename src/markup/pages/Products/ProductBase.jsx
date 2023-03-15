import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const bg = require("../../../images/banner/bnr1.jpg");

const Products = (props) => {
  //   console.log(catalogueList);
  //   console.log();
  const location = useLocation();
  console.log(location);
  const { pathname } = location;
  const pathArray = pathname.split("/");
  const basePath = pathArray[1];
  const subPath = pathArray[2];
  const subSubPath = pathArray[3];
  const subSubSubPath = pathArray[4];
  //   const { id } = useParams();
  //   console.log(id);
  const removeSpace = (str) => {
    return str.replace(/-/g, " ");
  };
  return (
    <>
      <div
        className="dlab-bnr-inr overlay-black-middle bg-pt "
        style={{ backgroundImage: "url(" + bg + ")" }}
      >
        <div className="container ">
          <div className="dlab-bnr-inr-entry">
            <h1 className="text-white">Products</h1>
            <div className="breadcrumb-row">
              <ul className="list-inline">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="text-capitalize">
                  <Link to={`/${basePath}`}>{basePath}</Link>
                </li>
                {subPath && (
                  <li className="text-capitalize">
                    <Link to={`${subPath}`}>{removeSpace(subPath)}</Link>
                  </li>
                )}
                {subSubPath && (
                  <li className="text-capitalize">
                    <Link to={`${subPath}/${subSubPath}`}>
                      {removeSpace(subSubPath)}
                    </Link>
                  </li>
                )}
                {subSubSubPath && (
                  <li className="text-capitalize">
                    <Link to={`${subPath}/${subSubPath}/${subSubSubPath}`}>
                      {removeSpace(subSubSubPath)}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* make a section where you can download the Products on desktop it would show 4 images on one row in flex position and in mobile it would go in columne direction use bootstrap css classes */}

      <Outlet />
    </>
  );
};

export default Products;
