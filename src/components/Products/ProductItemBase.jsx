import React from "react";

const ProductItemBase = ({ children }) => {
  return (
    <div className='blue-bg '>
      <div className='midContent'>
        <div className='py-5  section-full'>
          <div className='container'>
            <div className='row'>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemBase;
