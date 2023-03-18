import React from "react";

const FirstRow = (props) => {
  const { name, description, image } = props;
  return (
    <div className='row mb-5'>
      <div className='col-xl-5'>
        <img src={image} alt='astall' />
      </div>
      <div className='col-xl-7'>
        <h2 className=' box-title m-tb0'>{name}</h2>
        <div className='dlab-separator bg-primary'></div>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default FirstRow;
