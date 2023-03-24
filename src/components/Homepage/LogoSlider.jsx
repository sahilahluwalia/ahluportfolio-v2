import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import image from "../../asserts/Panel Orders/"
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

// randomize array
// const images = images.sort(() => Math.random() - 0.5);
const totalImageCombined = PanelImagesPNG.concat(PanelImagesJPG)
  .concat(TradingImagesPNG)
  .concat(TradingImagesJPG);

const removeDuplicates = (array) => {
  return [...new Set(array)];
};
// const images = totalImageCombined.sort(() => Math.random() - 0.5);
const images = removeDuplicates(shuffle(totalImageCombined));
console.log(images.length);
// console.log(images);

class LogoSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 350,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };

    const Border = this.props.hideBorder ? "" : "border";
    const padding = this.props.allowPadding ? "p-a25" : "";

    return (
      <>
        <Slider
          {...settings}
          //   className="client-logo-carousel btn-style-1 icon-2"
          className='client-logo-carousel'
        >
          {images.map((item, id) => (
            <div className='item' key={id}>
              <div className={`ow-client-logo ${padding}`}>
                <div className={`client-logo ${Border}`}>
                  <Link to='#'>
                    <img src={item} alt='' />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}
export default LogoSlider;
