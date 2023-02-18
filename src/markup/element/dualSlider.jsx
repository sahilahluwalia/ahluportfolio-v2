import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
//import responsive from './slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content1 = [
    {
        icon: "flaticon-robot-arm",
        text: 'Mechanical Works',
    },
    {
        icon: "flaticon-factory-1",
        text: 'Power & Energy',
    },
    {
        icon: "flaticon-fuel-station",
        text: 'Petroleum Refinery',
    },
    {
        icon: "flaticon-engineer-1",
        text: 'Oil & Gas Industry',
    },
    
    {
        icon: "flaticon-conveyor-1",
        text: 'Automative Manufacturing',
    },
]

const content2 = [
    {
        image :require("../../images/about/pic6.jpg"),
        shortTitle :"OUR STORY",
        title:"We are Industrial  factory solutions",
        subTitle:"We are committed to provide safe industrial solutions to many factories.",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting Factory. Lorem Ipsum has been the Factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting Factory."
    },
    {
        image :require("../../images/about/pic7.jpg"),
        shortTitle :"OUR STORY",
        title:"We are Industrial  factory solutions",
        subTitle:"We are committed to provide safe industrial solutions to many factories.",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting Factory. Lorem Ipsum has been the Factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting Factory."
    },
    {
        image :require("../../images/about/pic8.jpg"),
        shortTitle :"OUR STORY",
        title:"We are Industrial  factory solutions",
        subTitle:"We are committed to provide safe industrial solutions to many factories.",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting Factory. Lorem Ipsum has been the Factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting Factory."
    },
    {
        image :require("../../images/about/pic9.jpg"),
        shortTitle :"OUR STORY",
        title:"We are Industrial  factory solutions",
        subTitle:"We are committed to provide safe industrial solutions to many factories.",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting Factory. Lorem Ipsum has been the Factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting Factory."
    },
    {
        image :require("../../images/about/pic10.jpg"),
        shortTitle :"OUR STORY",
        title:"We are Industrial  factory solutions",
        subTitle:"We are committed to provide safe industrial solutions to many factories.",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting Factory. Lorem Ipsum has been the Factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting Factory."
    },
]


  
class DualSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null
        };
    }

    componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
    }

    render() {

        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3
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

        const settings2 = {
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
        };

        return (
            <>
                <Slider 
                {...settings} 
                className=" project-list"
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
                >
                    {content1.map((item, id) => (
                        <div className="item" onClick={e=> this.slider2.slickGoTo(id)}>
                            <div className="project-owbx">
                                <i class={item.icon}></i>
                                <h4 className="title">{item.text}</h4>
                            </div>
                        </div>
                    ))}
                </Slider>

                <Slider 
                {...settings2} 
                className="primary"
                asNavFor={this.state.nav1}
                ref={slider => (this.slider2 = slider)}
                >
                    {content2.map((item, id) => (
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 m-b30">
                                    <div className="our-story">
                                        <span>{item.shortTitle}</span>
                                        <h2 className="title">{item.title}</h2>
                                        <h4 className="title">{item.subTitle}</h4>
                                        <p>{item.description}</p>
                                        <Link to="/about-2" className="site-button btnhover16">Read More</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 m-b30">
                                    <img src={item.image} className="radius-sm" alt=""/>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default DualSlider;