import React from "react";

const BaseTable = ({ children }) => {
  return (
    <>
      <div className='table-responsive text-center'>{children}</div>
    </>
  );
};

export default BaseTable;
