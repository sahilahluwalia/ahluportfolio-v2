import React from "react";
import ImageSlider from "./ImageSlider";
const FirstRow = (props) => {
  const { name, description, image, children, imageArray } = props;
  return (
    <div className='row mb-5'>
      <div className='col-xl-5'>
        {image && <img src={image} alt='astall' />}
        {imageArray && <ImageSlider images={imageArray} />}
      </div>
      <div className='col-xl-7'>
        <h2 className=' box-title m-tb0'>{name}</h2>
        <div className='dlab-separator bg-primary'></div>
        <p>{description}</p>
        {children}
      </div>
    </div>
  );
};

export default FirstRow;
