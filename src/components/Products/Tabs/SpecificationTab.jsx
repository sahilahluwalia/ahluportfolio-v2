import React from "react";

const SpecificationTab = ({ image, children }) => {
  return (
    <>
      <h4>Topview layout</h4>
      <img src={image} alt='' srcset='' />
      <p>
        *Shown only for easy reference purposes and may vary based on the actual
        component.
      </p>
      <h4>Specifications</h4>
      {children}
      <p>
        *The contents are subject to change by the manufacturer without prior
        notice.
      </p>
    </>
  );
};

export default SpecificationTab;
