import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
const ImageRows = (props) => {
  const { data, noOfRows } = props;
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <div
              style={{
                display: "flex",
              }}
              key={item.link}
              className={`col-xs-12 box-images ${
                noOfRows ? `col-lg-${noOfRows}` : `col-lg-6`
              } col-md-6 col-sm-6 service-box style3`}
            >
              <div
                className='master'
                style={{
                  border: "2px solid black",
                  // border: "1px solid #B8B8B8",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "20px",
                  padding: "2px",
                  backgroundColor: "white",
                }}
              >
                <Link
                  to={item.link}
                  // href={item.link}
                  // target='_blank'
                  // rel='noopener noreferrer'
                >
                  <div className='product-image'>
                    <figure>
                      <img
                        src={item.image}
                        alt=''
                        style={{
                          height: "400px",
                          width: "350px",
                          objectFit: item.cover ? "cover" : "contain",
                        }}
                        className='card-img-top'
                      />
                    </figure>
                  </div>
                </Link>

                <h4 className='m-b10 '>
                  {item.nameHTML ? parse(item.nameHTML) : parse(item.name)}
                </h4>
                {item.subheading ? <h5>{parse(item.subheading)}</h5> : <></>}
                {/* <div className='mb-3'>View All →</div> */}
                <div
                  style={{
                    marginTop: "auto",
                  }}
                >
                  {item.hideButton ? (
                    <></>
                  ) : (
                    <Link to={item.link}>
                      <button className='readMoreButton  mb-4'>
                        Read more
                      </button>
                    </Link>
                  )}
                  {/* <Link to={item.link}>
                    <button className='readMoreButton  mb-4'>Read more</button>
                  </Link> */}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ImageRows;
