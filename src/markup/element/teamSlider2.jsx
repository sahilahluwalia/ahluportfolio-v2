import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
//import responsive from './slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        image: require('./../../images/our-team/team-bx/pic1.jpg'),
        name:"Oliver",
        title: 'Director',
    },
    {
        image: require('./../../images/our-team/team-bx/pic2.jpg'),
        name:"Alexander",
        title: 'Designer',
    },
    {
        image: require('./../../images/our-team/team-bx/pic3.jpg'),
        name:"Hackson Willingham",
        title: 'Developer',
    },
    {
        image: require('./../../images/our-team/team-bx/pic4.jpg'),
        name:"Konne Backfield",
        title: 'Manager',
    }
]


class TeamSlider2 extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
			centerMode: true,
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
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 767,
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
                <Slider {...settings} className="team-carousel btn-style-1" >
                    {content.map((item, id) => (
                        <div className="item wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                            <div className="dlab-box m-b30 dlab-team7">
                                <div className="dlab-media">
                                    <Link to="/team-1">
                                        <img alt="" src={item.image}/>
                                    </Link>
                                </div>
                                <div className="dlab-info">
                                    <h4 className="dlab-title"><Link to="/team-1">{item.name}</Link></h4>
                                    <span className="dlab-position">{item.title}</span>
                                    <ul className="dlab-social-icon">
                                        <li><Link className="site-button circle-sm gray-light fa fa-facebook" to="#"></Link></li>
                                        <li><Link className="site-button circle-sm gray-light fa fa-twitter" to="#"></Link></li>
                                        <li><Link className="site-button circle-sm gray-light fa fa-linkedin" to="#"></Link></li>
                                        <li><Link className="site-button circle-sm gray-light fa fa-pinterest" to="#"></Link></li>
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
export default TeamSlider2;