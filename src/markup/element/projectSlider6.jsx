import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        image: require('../../images/gallery/plastic/pic1.jpg'),
        title:"Plastics Institute"
    },
    {
        image: require('../../images/gallery/plastic/pic2.jpg'),
        title:"Institute of Packaging"
    },
    {
        image: require('../../images/gallery/plastic/pic3.jpg'),
        title:"Merchant's Chamber"
    },
    {
        image: require('../../images/gallery/plastic/pic4.jpg'),
        title:"Chemical Council"
    },
]


class ProjectSlider6 extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
			arrows:false,
            slidesToScroll: 1,
            autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3
				  }
				},
				{
				  breakpoint: 991,
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
                <Slider {...settings} className="portfolio-carousel-nogap ">
                    {content.map((item, id) => (
                        <div className="item wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.8s">
                            <div className="dlab-media dlab-img-overlay1 dlab-img-effect portbox1 style1">
                                <img src={item.image} alt=""/>
                                <div className="overlay-bx">
                                    <div className="portinner">
                                        <h3 className="port-title"><Link to="/services-details">{item.title}</Link></h3>
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
export default ProjectSlider6;