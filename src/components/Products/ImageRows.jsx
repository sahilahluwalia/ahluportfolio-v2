import React from "react";
import { Link } from "react-router-dom";
const ImageRows = (props) => {
  const { data, noOfRows, link } = props;
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <div
              key={item.link}
              className={`col-xs-12 ${
                noOfRows ? `col-lg-${noOfRows}` : `col-lg-6`
              } col-md-6 col-sm-8 service-box style3`}
            >
              <div className="m-3 border border-2 ">
                <a
                  // href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      height: "450px",
                      objectFit: "contain",
                    }}
                    className="card-img-top"
                  />
                </a>

                <h4 className="m-b10">{item.name}</h4>
                <Link to={item.link}>
                  <div className="mb-3">View All →</div>
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ImageRows;
