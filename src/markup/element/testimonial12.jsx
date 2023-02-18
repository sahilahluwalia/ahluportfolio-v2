import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
//import responsive from './slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
    },
    {
        image: require('./../../images/testimonials/pic2.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
    },
    {
        image: require('./../../images/testimonials/pic3.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
    },
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
    },
    // {
    //     image: require('./../../images/testimonials/pic1.jpg'),
    //     author: 'Alexer Valvin',
    //     designation: 'Student',
    // },
    // {
    //     image: require('./../../images/testimonials/pic1.jpg'),
    //     author: 'Alexer Valvin',
    //     designation: 'Student',
    // },
]


  
class Testimonial1 extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            dotsClass: "slick-dots slick-thumb customCls",
            responsive: [
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			]
        };
        return (
            <>
                <Slider {...settings} className="testimonial-two-dots btn-style-1 btn-white dots-long d-primary">
                    {content.map((item, id) => (
                        <div className="item">
                            <div className="testimonial-15 text-white">
                                <div className="testimonial-text quote-left quote-right">
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.</p>
                                </div>
                                <div className="testimonial-detail clearfix">
                                    <div className="testimonial-pic radius shadow"><img src={item.image} width="100" height="100" alt=""/></div>
                                    <strong className="testimonial-name">{item.author}</strong> <span className="testimonial-position">{item.designation}</span> 
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default Testimonial1;