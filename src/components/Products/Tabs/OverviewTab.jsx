import React from "react";

const OverviewTab = ({ data, type }) => {
  return (
    <>
      <h4>Common Characteristics of {type}</h4>
      <div className='px-3'>
        <ol type='1'>
          {data.map((item, index) => {
            return (
              <li style={{ textAlign: "left" }} key={index}>
                {item}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default OverviewTab;
