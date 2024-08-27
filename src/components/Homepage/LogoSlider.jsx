'use client'
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "nuka-carousel/lib/carousel";
import { useEffect, useState } from "react";
import Image from "next/image";

function importAll(r) {
  return r.keys().map(r);
}

const PanelImagesPNG = importAll(
    require.context("../../asserts/Panel Orders/", false, /\.png$/)
);
const PanelImagesJPG = importAll(
    require.context("../../asserts/Panel Orders/", false, /\.jpg$/)
);
const TradingImagesPNG = importAll(
    require.context("../../asserts/Trading", false, /\.png$/)
);
const TradingImagesJPG = importAll(
    require.context("../../asserts/Trading", false, /\.jpg$/)
);

const shuffle = (array) => {
  let oldElement;
  for (let i = array.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    oldElement = array[i];
    array[i] = array[rand];
    array[rand] = oldElement;
  }
  return array;
};

const totalImageCombined = PanelImagesPNG.concat(PanelImagesJPG)
    .concat(TradingImagesPNG)
    .concat(TradingImagesJPG);

const removeDuplicates = (array) => {
  return [...new Set(array)];
};

const LogoSlider = ({ hideBorder, allowPadding }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const shuffledImages = removeDuplicates(shuffle(totalImageCombined));
    setImages(shuffledImages);
    console.log(shuffledImages.length);
  }, []);

  const Border = hideBorder ? "" : "border";
  const padding = allowPadding ? "p-a25" : "";

  return (
      <>
        <Carousel
            withoutControls
            autoplay
            adaptiveHeight={true}
            wrapAround={true}
            slidesToShow={4}
        >
          {images.map((item, index) => (
              <Image
                  key={index}
                  style={{
                    padding: "0px 5px 0px 5px",
                    height: "100px",
                    width: "200px",
                    objectFit: "contain",
                  }}
                  src={item}
                  alt=""
              />
          ))}
        </Carousel>
      </>
  );
};

export default LogoSlider;
