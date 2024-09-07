import React from "react";
import {  Outlet } from "react-router-dom";
import SubHeader from "../Components/SubHeader";


const Products = () => {
  return (
    <>
    <SubHeader type='Products'/>

      {/* make a section where you can download the Products on desktop it would show 4 images on one row in flex position and in mobile it would go in columne direction use bootstrap css classes */}

      <Outlet />
    </>
  );
};

export default Products;
