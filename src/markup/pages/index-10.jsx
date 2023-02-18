import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header10'
import Footer from '../layout/footer10'
import Testimonial8 from '../element/testimonial8'
import ExibitionSlider1 from '../element/exibitionSlider1'
import {exibitionContent2,blogContent4,homeSliderContent8} from '../element/SliderContent'
import BlogSlider1 from '../element/blogSlider1'
import HomeSlider from '../element/homeSlider2' 
import Gallery2 from '../element/gallery2';
import CounterSection from '../element/counterSection';
import ScrollToTop from '../element/scrollToTop';
import Team6 from '../element/team6'

// import '../../css/skin/skin-8.min.css';


const images = [
    {
      id: 1,
      name: "healthy",
      title:"Solid Wastes",
      imgUrl: require("../../images/gallery/leather/pic1.jpg")
    },
    {
      id: 2,
      name: "food",
      title:"Leather Products",
      imgUrl: require("../../images/gallery/leather/pic2.jpg")
    },
    {
      id: 3,
      name: "organic",
      title:"Leather processing",
      imgUrl: require("../../images/gallery/leather/pic3.jpg")
    },
    {
      id: 4,
      name: "organic",
      title:"Industrial Apartment",
      imgUrl: require("../../images/gallery/leather/pic4.jpg")
    },
   
  ];
const bg = require('../../images/background/bg14.jpg' )

class Index10 extends Component {


    render() {
        return (
            <>
            <Header/>

            <div className="page-content bg-white home-slider-10">	
				<HomeSlider 
				data={homeSliderContent8}
				contentWrapperCls="sliderStyle10"
				subTitleCls="text-primary"
				btnCls="text-primary"
				btnText="CONTINUE THE JOURNEY"
				/>
                <div className="content-block">
                    <div className="section-full content-inner-2 exhibition-bx">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <ExibitionSlider1 data={exibitionContent2}/>
                                </div>
                                <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="content-bx1">
                                        <div className="section-head">
                                            <h2 className="title">The Modern Rules Of Leather Industry </h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie nec nisl eget scelerisque. Quisque placerat suscipit eros, eu tincidunt tellus blandit vel. Donec pellentesque dapibus interdum. Mauris et tellus congue, rutrum neque a, varius felis.</p>
                                        </div>
                                        <Link to="/contact-1" className="site-button btnhover21 black m-r10 m-b10">Contact us</Link>
                                        <Link to="/portfolio-details" className="site-button btnhover21 black m-b10">View portfolio</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full">
                        <div className="row spno about-industry">
                            <div className="col-lg-4 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                                <div className="dlab-img-effect zoom">
                                    <img src={require("../../images/our-work/leather/pic1.jpg")} alt="" className="img-cover"/>
                                </div>
                            </div>
                            <div className="col-lg-4 bg-secondry text-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                <div className="service-box style2">
                                    <div>
                                        <h2 className="title"><span>Grow your  </span> <br/>business.</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <Link to="/about-1" className="site-button btnhover21 outline white outline-2">ABOUT US</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.9s">
                                <div className="dlab-img-effect zoom">
                                    <img src={require("../../images/our-work/leather/pic2.jpg")} alt="" className="img-cover"/>
                                </div>
                            </div>
                            <div className="col-lg-4 bg-primary text-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                                <div className="service-box style2">
                                    <div>
                                        <h2 className="title"><span>Make smarter  </span> <br/>decisions.</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <Link to="/about-1" className="site-button btnhover21 outline white outline-2">ABOUT US</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                <div className="dlab-img-effect zoom">
                                    <img src={require("../../images/our-work/leather/pic3.jpg")} alt="" className="img-cover"/>
                                </div>
                            </div>
                            <div className="col-lg-4 bg-primary text-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                <div className="service-box style2">
                                    <div>
                                        <h2 className="title text-black"><span>Understand any </span> <br/>industry sector.</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <Link to="/about-1" className="site-button btnhover21 outline white outline-2">ABOUT US</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full bg-white content-inner-2">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">Our Gallery</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <Gallery2 images={images}/>
                        </div>
                    </div>
                    
                    <CounterSection backgroundImage={bg}/>
                    
                    <div className="section-full content-inner bg-white">
                        <div className="container">
                            <div className="section-head style2 text-center">
                                <h2 className="title">Our Team</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <Team6 />
                           
                        </div>
                    </div>
                    
                    <div className="section-full content-inner bg-gray">
                        <div className="container">
                            <div className="section-head style2 text-center">
                                <h2 className="title">Testimonials</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <Testimonial8/>
                        </div>
                    </div>
                    
                    <div className="section-full content-inner bg-white">
                        <div className="container">
                            <div className="section-head style2 text-center">
                                <h2 className="title">Latest blog post</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>

                            <BlogSlider1
                            data={blogContent4} 
                            imgEffect="zoom"
                            blogPostCls="post-style-2"
                            noDes
                            />

                        </div>
                    </div>
                </div>
            </div> 
            <Footer/> 
            <ScrollToTop className="style3"/>                
            </>
        )
    }
}
export default Index10;