import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
//import responsive from './slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial1_content = [
    {
        thumb: require('./../../images/testimonials/pic1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        thumb: require('./../../images/testimonials/pic2.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        thumb: require('./../../images/testimonials/pic3.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        thumb: require('./../../images/testimonials/pic1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        thumb: require('./../../images/testimonials/pic1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        thumb: require('./../../images/testimonials/pic1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
]


class Testimonial1 extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1
				  }
				}
			]
        };
        return (
            <>
                <Slider {...settings} className="testimonial-six dots-long d-primary btn-style-1">
                    {Testimonial1_content.map((item, id) => (
                        <div className="item">
                            <div className="testimonial-8">
                                <div className="testimonial-text">
                                    <p>{item.description}</p>
                                </div>
                                <div className="testimonial-detail clearfix">
                                    <div className="testimonial-pic radius shadow"><img src={item.thumb} width="100" height="100" alt="" /></div>
                                    <h5 className="testimonial-name m-t0 m-b5">{item.author}</h5>
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
export default Testimonial1;