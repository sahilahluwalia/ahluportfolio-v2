import React, { Component } from "react";
import { Link } from "react-router-dom";

import Sidebar from "components/Blog/Sidebar";
import { Outlet } from "react-router-dom";
const bg = require("images/banner/bnr1.jpg");

const BlogLeftBase = () => {
  return (
    <>
      <div className='page-content bg-white'>
        <div className='content-area'>
          <div className='container'>
            <div className='row'>
              <Sidebar />
              <div className='col-lg-9'>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogLeftBase;
