import React from "react";
import parse from "html-react-parser";

const FeaturesTab = ({ data, type }) => {
  return (
    <>
      <div className='px-3'>
        <h4>Standard Features of {type}</h4>
        <ol type='1'>
          {data.map((item, index) => {
            return (
              <li
                style={{
                  textAlign: "left",
                }}
                key={index}
              >
                {parse(item)}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default FeaturesTab;
