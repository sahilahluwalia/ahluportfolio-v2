import React from "react";
import { useRef, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import "./imagestyle.css";

const ImageSlider = ({ images }) => {
  const [img, setImg] = useState(images[0]);
  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add("active_selection");
    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove("active_selection");
      }
    }
  };
  const refs = useRef([]);
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  return (
    <div className='image-container'>
      <div className='left'>
        <div className='left_1'>
          {images.map((image, i) => (
            <div
              className={i == 0 ? "img_wrap active_selection" : "img_wrap"}
              key={i}
              onMouseOver={() => hoverHandler(image, i)}
              ref={addRefs}
            >
              <img src={image} alt='' />
            </div>
          ))}
        </div>
        <div className='left_2'>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "",
                // isFluidWidth: true,
                height: 300,
                width: 300,
                src: img,
              },
              largeImage: {
                src: img,
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: "150%",
                height: "150%",
              },
            }}
          />
        </div>
      </div>
      <div className='right'></div>
    </div>
  );
};

export default ImageSlider;
