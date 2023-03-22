import React from "react";

const LeftSection = ({ children, mainScreen }) => {
  if (mainScreen)
    return (
      <div className='col-xl-9 col-lg-8 col-md-12 col-sm-12 m-b30'>
        {children}
      </div>
    );
  else
    return <div className='col-xl-9 col-lg-8 col-md-7 m-b30'>{children}</div>;
};

export default LeftSection;
