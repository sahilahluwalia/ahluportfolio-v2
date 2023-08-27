import React from "react";
import { subProductList } from "data/productsData";
import { Link } from "react-router-dom";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const ProductList = ({ withoutImage }) => {
  if (withoutImage) {
    var randomizedSubProductList = shuffleArray(subProductList).slice(0, 6);
  } else {
    var randomizedSubProductList = shuffleArray(subProductList).slice(0, 5);
  }
  return (
    <>
      {withoutImage ? (
        <>
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              border: "1px solid #ff5e14",

              // borderRadius: "0.5rem",
            }}
          >
            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Our Products
            </div>
            <div>
              {randomizedSubProductList.map((item) => (
                <>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    {/* <div
                      style={{
                        justifyItems: "center",
                        justifySelf: "center",
                        margin: "auto",
                      }}
                    >
                      →
                    </div> */}

                    <div>
                      <Link to={item.link}>
                        <div className='d-flex my-3 gap-2' key={item.id}>
                          <div
                            style={{
                              fontSize: "0.8rem",
                              marginLeft: "10px",
                            }}
                          >
                            {item.name}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div
                    style={{
                      height: "1px",
                      backgroundColor: "lightgray",
                    }}
                  ></div>
                </>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            // className='background-primaryColor'
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "0.5rem",
              border: "1px solid #ff5e14",
            }}
          >
            <h6>Our Products</h6>
            <div>
              {randomizedSubProductList.map((item) => (
                <Link to={item.link}>
                  <div className='d-flex mb-3 gap-2' key={item.id}>
                    <div></div>
                    <img
                      src={
                        item.image
                          ? item.image
                          : "https://via.placeholder.com/50"
                      }
                      alt=''
                      style={{
                        height: "80px",
                        width: "100%",
                        maxWidth: "70px",
                        objectFit: "contain",
                        backgroundColor: "white",
                      }}
                    />

                    <div
                      style={{
                        fontSize: "0.8rem",
                        // color: "white",
                        fontWeight: "500",
                      }}
                    >
                      {item.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductList;
