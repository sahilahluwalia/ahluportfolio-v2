import React from "react";
import parse from "html-react-parser";

const FeaturesTab = ({ data, type }) => {
  return (
    <>
      <h4>Standard Features </h4>

      <div className='px-3'>
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
