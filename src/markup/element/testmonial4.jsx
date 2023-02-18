import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import responsive from './slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial1_content = [
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
]


class Testmonial4 extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            responsive:responsive()
        };
        return (
            <>
                <Slider {...settings} className="testimonial-six testimonial-13-area btn-style-2 out btn-color">
                    {Testimonial1_content.map((item, id) => (
                        <div className="item wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div className="testimonial-13">
                                <div className="testimonial-text">
                                    <div className="quote-left"></div>
                                    <p>{item.description}</p>
                                </div>
                                <div className="testimonial-detail clearfix">
                                    <div className="testimonial-pic radius shadow">
                                        <img src={item.image} alt=""/>
                                    </div>
                                    <h5 className="testimonial-name m-t10 m-b5">{item.author}</h5> 
                                    <span className="testimonial-position text-primary">{item.designation}</span> 
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default Testmonial4;