import React from "react";
import { subProductList } from "data/productsData";
import ast2aii from "asserts/machine-pics/ast2aii.png";
import { Link } from "react-router-dom";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const randomizedSubProductList = shuffleArray(subProductList).slice(0, 5);
const ProductList = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "20px",
          borderRadius: "0.5rem",
        }}
      >
        <h6>Our Products</h6>
        <div>
          {randomizedSubProductList.map((item) => (
            <Link to={item.link}>
              <div className='d-flex mb-3 gap-2' key={item.id}>
                <img
                  src={
                    item.image ? item.image : "https://via.placeholder.com/50"
                  }
                  alt=''
                  style={{
                    height: "80px",
                    width: "70px",
                    objectFit: "contain",
                    backgroundColor: "white",
                  }}
                />
                <div
                  style={{
                    fontSize: "0.8rem",
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
  );
};

export default ProductList;
