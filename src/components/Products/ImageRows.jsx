import React from "react";
import { Link } from "react-router-dom";
const ImageRows = (props) => {
  const { data, noOfRows } = props;
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <div
              key={item.link}
              className={`col-xs-12 ${
                noOfRows ? `col-lg-${noOfRows}` : `col-lg-6`
              } col-md-6 col-sm-6 service-box style3`}
            >
              <div>
                <Link
                  to={item.link}
                  // href={item.link}
                  // target='_blank'
                  // rel='noopener noreferrer'
                >
                  <img
                    src={item.image}
                    alt=''
                    style={{
                      height: "400px",
                      width: "350px",
                      objectFit: "contain",
                    }}
                    className='card-img-top'
                  />
                </Link>

                <h4 className='m-b10'>{item.name}</h4>

                {/* <div className='mb-3'>View All →</div> */}

                <Link to={item.link}>
                  <button className='readMoreButton  m-r15 m-r15 mb-4'>
                    Read more
                  </button>
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
