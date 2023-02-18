import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header12'
import Footer from '../layout/footer12'
import {blogContent6} from '../element/SliderContent'
import BlogSlider1 from '../element/blogSlider1'
import Testimonial10 from '../element/testimonial10'
import TeamSlider2 from '../element/teamSlider2';
import Gallery4 from '../element/gallery4';
import ScrollToTop from '../element/scrollToTop';

// import '../../css/skin/skin-9.min.css';

const images = [
    {
      id: 1,
      name: "beer keg",
      title:"beer keg",
      imgUrl: require("../../images/gallery/beer/pic1.jpg")
    },
    {
      id: 2,
      name: "brweing",
      title:"brweing beer",
      imgUrl: require("../../images/gallery/beer/pic2.jpg")
    },
    {
      id: 3,
      name: "bear cup",
      title:"brweing beer",
      imgUrl: require("../../images/gallery/beer/pic3.jpg")
    },
    {
      id: 4,
      name: "beer keg",
      title:"malt",
      imgUrl: require("../../images/gallery/beer/pic4.jpg")
    },
]; 

const bg = require('../../images/background/bg15.jpg' );
const bgVideo = require('../../video/video3.mp4')
const beerIcon = require('../../images/icon/beer.png')

class Index12 extends Component {


    render() {
        return (
            <>
            <Header/>

            {/* <HomeSlider 
            data={homeSliderContent9}
            show2Btn
            btnText="CONTACT US"
            btn2Text="OUR SERVICES"
            /> */}

            <div className="hero-section relative full-height video-section overlay3 home-slider-12">
                <video src={bgVideo} loop muted autoPlay className="beer-video"></video>

                <div className="hero-content text-center content-center">
                    <img src={beerIcon} alt=""  className="beer-icon"/>
                    <span className="seperator"></span>
                    <h1 className="title text-center style4">BEER FACTORY</h1>
                    <div className="description ">The concept of a traditional restaurant reimagined in a modern way. </div>
                    <Link to={"#"} className="site-button"><i className="la la-phone icon" ></i>contact us</Link>
                    <Link to={"#"} className="site-button"><i className="la la-file-text icon"></i>our services</Link>
                </div>

                <ul className="social-icons">
                    <li><Link to={"#"}><i className="fa fa-facebook"></i></Link></li>
                    <li><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
                    <li><Link to={"#"}><i className="fa fa-instagram"></i></Link></li>
                </ul>
            </div>


            

            <div className="page-content bg-white">	
                <div className="content-block">
                    <div className="section-full content-inner bg-white">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="our-story">
                                        <span>OUR STORY</span>
                                        <h2 className="title">Running a <br/>successful business <br/><span className="text-primary">since 1955</span></h2>
                                        <h4 className="title">Industrial engineering is a branch of engineering which deals with the optimization.</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting Factory. Lorem Ipsum has been the Factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting Factory.</p>
                                        <Link to="/about-2" className="site-button btnhover20">About Us</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 m-b30 our-story-thum wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <img src={require("../../images/about/pic13.jpg")} className="radius-sm" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full bg-secondry darkBlue content-inner">
                        <div className="container">
                            <div className="section-head text-center text-white">
                                <h2 className="title">Our Services</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div className="section-content row text-black">
                                <div className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper" data-name="01">
                                        <div className="icon-lg">
                                            <Link to="#" className="icon-cell"><i className="flaticon-boiler"></i></Link>
                                        </div>
                                        <div className="icon-content">
                                            <h2 className="dlab-tilte">Beer Boiler</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper" data-name="02">
                                        <div className="icon-lg">
                                            <Link to="#" className="icon-cell"><i className="flaticon-pint-of-beer"></i></Link>
                                        </div>
                                        <div className="icon-content">
                                            <h2 className="dlab-tilte">Pint Of Beer</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper" data-name="03">
                                        <div className="icon-lg">
                                            <Link to="#" className="icon-cell"><i className="flaticon-beer-keg"></i></Link>
                                        </div>
                                        <div className="icon-content">
                                            <h2 className="dlab-tilte">Beer Keg</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper" data-name="04">
                                        <div className="icon-lg">
                                            <Link to="#" className="icon-cell"><i className="flaticon-brewing"></i></Link>
                                        </div>
                                        <div className="icon-content">
                                            <h2 className="dlab-tilte">Brewing</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper" data-name="05">
                                        <div className="icon-lg">
                                            <Link to="#" className="icon-cell"><i className="flaticon-grinder"></i></Link>
                                        </div>
                                        <div className="icon-content">
                                            <h2 className="dlab-tilte">Beer Grinder</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 col-sm-12 service-box style3 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper" data-name="06">
                                        <div className="icon-lg">
                                            <Link to="#" className="icon-cell"><i className="flaticon-barrels-1"></i></Link>
                                        </div>
                                        <div className="icon-content">
                                            <h2 className="dlab-tilte">Barrels Beer</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full bg-white content-inner">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">Our Gallery</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <Gallery4 images={images}/>
                        </div>
                    </div>
                    
                    <div className="section-full content-inner bg-gray">
                        <div className="container">
                            <div className="section-head style2 text-center">
                                <h2 className="title">Our Team</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>

                            <TeamSlider2/>
                            
                        </div>
                    </div>
                    
                    <div className="section-full content-inner overlay-black-middle bg-img-fix" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="section-head style2 text-center text-white">
                                <h2 className="title">Latest blog post</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>

                            <BlogSlider1 data={blogContent6} />

                        </div>	
                    </div>
                    
                    <div className="section-full content-inner-2 bg-gray">
                        <div className="container">
                            <div className="section-head style2 text-center">
                                <h2 className="title">Our Client</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            
                            <Testimonial10/>

                        </div>
                    </div>
                </div>
            </div>  
            <Footer/>  
            <ScrollToTop className="scroltop style2 radius"/>            
            </>
        )
    }
}
export default Index12;