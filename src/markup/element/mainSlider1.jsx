import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        image: require('./../../images/main-slider/slide15.jpg'),
        title: 'We Believe That Everyone Has Got Talent!',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',
    },
    {
        image: require('./../../images/main-slider/slide16.jpg'),
        title: 'We Believe That Everyone Has Got Talent!',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',
    },
    {
        image: require('./../../images/main-slider/slide17.jpg'),
        title: 'We Believe That Everyone Has Got Talent!',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',
    }
]


class MainSlider1 extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <>
                <Slider {...settings} className="testimonial-box-carousel slider-bnr">
                    {content.map((item, id) => (
                        <div className="item slide-item">
                            <div className="slide-item-img">
                                <img src={item.image} className="" alt=""/>
                            </div>
                            <div className="slide-content">
                                <div className="slide-content-box">
                                    <div className="slide-content-area">
                                        <h2 className="slider-title">{item.title}</h2>
                                        <p>{item.description}</p>
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
export default MainSlider1;