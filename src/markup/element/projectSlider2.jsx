import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import responsive from './slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        image: require('./../../images/project/pic1.jpg'),
        title: 'Growing Fruits and Vegetables',
    },
    {
        image: require('./../../images/project/pic2.jpg'),
        title: 'Clear Water for Irrigation',
    },
    {
        image: require('./../../images/project/pic3.jpg'),
        title: 'Spring & Fall Cleanup',
    },
    {
        image: require('./../../images/project/pic2.jpg'),
        title: 'Spring & Fall Cleanup',
    }
]


class ProjectSlider2 extends Component {

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
                <Slider {...settings} className="btn-style-2" >
                    {content.map((item, id) => (
                        <div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div className="project-bx">
                                <div className="media dlab-img-effect zoom"><img src={item.image} alt=""/></div>
                                <div className="info">
                                    <h4 className="title"><Link to="/portfolio-details">{item.title}</Link></h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default ProjectSlider2;