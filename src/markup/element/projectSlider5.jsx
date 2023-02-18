import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        image: require('../../images/portfolio/construct/image_1.jpg'),
    },
    {
        image: require('../../images/portfolio/construct/image_2.jpg'),
    },
    {
        image: require('../../images/portfolio/construct/image_3.jpg'),
    },
]


class ProjectSlider5 extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: this.props.slideToShow || 2,
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
				  breakpoint: 991,
				  settings: {
					slidesToShow: 1
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
                <Slider {...settings} className="project-carousel-2 btn-style-2">
                    {content.map((item, id) => (
                        <div className="item">
                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect zoom">
                                <img src={item.image} alt=""/>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default ProjectSlider5;