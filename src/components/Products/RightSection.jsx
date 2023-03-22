import React from "react";

export const RightSection = ({ children, mainScreen }) => {
  if (mainScreen)
    return <div className='col-xl-3 col-lg-4 col-md-12'>{children}</div>;
  else return <div className='col-xl-3 col-lg-4 col-md-5'>{children}</div>;
};
