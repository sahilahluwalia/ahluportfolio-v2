import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 
const content = [
    {
        image:require("../../images/product/item2/item1.jpg"),
    },
    {
        image:require("../../images/product/item2/item2.jpg"),
    },
    {
        image:require("../../images/product/item2/item3.jpg"),
    },
    {
        image:require("../../images/product/item2/item4.jpg"),
    },
]

class ProductGallerySlider extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <>
                <Slider {...settings} className="m-b5 primary btn-style-2" id="sync1">
                    {content.map((item, id) => (
                        <div className="item">
                            <div className="mfp-gallery">
                                <div className="dlab-box">
                                    <div className="dlab-thum-bx dlab-img-overlay1 ">
                                        <img src={item.image} alt=""/>
                                        <div className="overlay-bx">
                                            <div className="overlay-icon">
                                                <span data-exthumbimage="images/product/item2/item1.jpg" data-src="images/product/item2/item1.jpg" className="check-km" title="Image 1 Title will come here">		
                                                    <i className="ti-fullscreen"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default ProductGallerySlider;