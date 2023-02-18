import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        image: require('./../../images/our-team/pic1.jpg'),
        name:"Oliver",
        title: 'Director',
    },
    {
        image: require('./../../images/our-team/pic2.jpg'),
        name:"Alexander",
        title: 'Designer',
    },
    {
        image: require('./../../images/our-team/pic3.jpg'),
        name:"Hackson Willingham",
        title: 'Developer',
    },
    {
        image: require('./../../images/our-team/pic4.jpg'),
        name:"Konne Backfield",
        title: 'Manager',
    }
]


class TeamSlider3 extends Component {

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
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
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
                <Slider {...settings} className="img-carousel btn-style-1 dots-long d-primary" >
                    {content.map((item, id) => (
                        <div className="item">
                            <div className="dlab-box m-b30 dlab-team1">
                                <div className="dlab-media">
                                    <Link to="#">
                                        <img width="358" height="460" alt="" src={item.image}/>
                                    </Link>
                                </div>
                                <div className="dlab-info">
                                    <h4 className="dlab-title"><Link to="#">{item.name}</Link></h4>
                                    <span className="dlab-position">{item.title}</span>
                                    <ul className="dlab-social-icon dez-border">
                                        <li><Link className="fa fa-facebook" to="#"></Link></li>
                                        <li><Link className="fa fa-twitter" to="#"></Link></li>
                                        <li><Link className="fa fa-linkedin" to="#"></Link></li>
                                        <li><Link className="fa fa-pinterest" to="#"></Link></li>
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
export default TeamSlider3;