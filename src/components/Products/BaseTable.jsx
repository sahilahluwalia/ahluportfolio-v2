import React from "react";

const BaseTable = ({ children }) => {
  return (
    <>
      <div className='table-responsive text-center pt-0'>{children}</div>
    </>
  );
};

export default BaseTable;
