import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial1_content = [
    {
        image: require('./../../images/our-team/pic3.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        image: require('./../../images/our-team/pic2.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        image: require('./../../images/our-team/pic3.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        image: require('./../../images/our-team/pic2.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    }
]


class Testmonial2 extends Component {

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
                <Slider {...settings} className="testimonial-box-carousel btn-style-1 client-btn">
                    {Testimonial1_content.map((item, id) => (
                        <div className="item">
                            <div className="testimonial-11 testimonial-box">
                                <div className="testimonial-pic">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="testimonial-detail quote-left quote-right">
                                    <div className="testimonial-text">
                                        <p>{item.description}</p>
                                    </div>
                                    <h5 className="testimonial-name text-primary m-t0 m-b5">{item.author}</h5> 
                                    <span className="testimonial-position">{item.designation}</span> 
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default Testmonial2;