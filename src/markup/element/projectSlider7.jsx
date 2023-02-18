import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        image: require("../../images/our-services/construct/pic1.jpg"),
    },
    {
        image: require("../../images/our-services/construct/pic2.jpg"),
    },
]


class ProjectSlider7 extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
        return (
            <>
                <Slider {...settings} className="project-carousel-1 btn-style-1 btn-white">
                    {content.map((item, id) => (
                        <div className="item">
                        <div className="project-info-box">
                            <div className="project-media">
                                <img src={item.image} alt=""/>
                            </div>
                            <div className="project-content">
                                <ul className="list-details">
                                    <li>
                                        <strong>Clients:</strong>
                                        <span>Ethan Hunt</span>
                                    </li>
                                    <li>
                                        <strong>Completion:</strong>
                                        <span>February 5th, 2017</span>
                                    </li>
                                    <li>
                                        <strong>Project Type:</strong>
                                        <span>Villa, Residence</span>
                                    </li>
                                    <li>
                                        <strong>Architects:</strong>
                                        <span>Logan Cee</span>
                                    </li>
                                    <li>
                                        <Link to="/portfolio-details" className="site-button btnhover20 m-t10">View Portfolio</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default ProjectSlider7;