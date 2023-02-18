import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header7'
import Footer from '../layout/footer7'
import {blogContent3,ExibitionContent1,homeSliderContent7} from '../element/SliderContent'
import BlogSlider1 from '../element/blogSlider1'
import Testmonial5 from '../element/testmonial5';
import ExibitionSlider1 from '../element/exibitionSlider1'; 
 import HomeSlider from '../element/homeSlider2' 
import Gallery2 from '../element/gallery2';
import ScrollToTop from '../element/scrollToTop';
import Team4 from '../element/team4'

// import '../../css/skin/skin-5.min.css';

const images = [
    {
      id: 1,
      name: "healthy food",
      title:"cookies",
      imgUrl: require("../../images/gallery/food/pic1.jpg")
    },
    {
      id: 2,
      name: "food",
      title:"ice cream",
      imgUrl: require("../../images/gallery/food/pic2.jpg")
    },
    {
      id: 3,
      name: "organic",
      title:"bear cup",
      imgUrl: require("../../images/gallery/food/pic3.jpg")
    },
    {
      id: 4,
      name: "organic",
      title:"burger",
      imgUrl: require("../../images/gallery/food/pic4.jpg")
    },
   
  ];

class Index7 extends Component {


    render() {
        return (
            <>
            <Header/>
            
            <div className="page-content bg-white home-slider-7">	

                <HomeSlider 
                data={homeSliderContent7}
                contentWrapperCls="sliderStyle7"
                btnText="VIEW PORTFOLIO"
                />
                
                <div className="content-block">
                    <div className="section-full call-action bg-primary">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 text-white">
                                    <h2 className="title">Amazing things happen to your business </h2>
                                    <p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                <div className="col-lg-3 d-flex">
                                    <Link to="/contact-1" className="site-button btnhover10 white align-self-center outline ms-auto radius-xl outline-2">Contact Us </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full content-inner-2 exhibition-bx">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <ExibitionSlider1 data={ExibitionContent1}/>
                                </div>
                                <div className="col-lg-6 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="content-bx1">
                                        <div className="section-head">
                                            <h2 className="title">Quality Products <br/>With Sweet eggs a breads </h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie nec nisl eget scelerisque. Quisque placerat suscipit eros, eu tincidunt tellus blandit vel. Donec pellentesque dapibus interdum. Mauris et tellus congue, rutrum neque a, varius felis.</p>
                                        </div>
                                        <Link to="/contact-2" className="site-button btnhover10 black m-r10 m-b10">Contact us</Link>
                                        <Link to="/portfolio-details" className="site-button btnhover10 black m-b10">View portfolio</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full">
                        <div className="row m-lr0">
                            <div className="col-xl-6 col-lg-12 p-lr0 wow bounceInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                <div className="row m-a0 lightgallery" id="lightgallery">
                                    <div className="col-lg-12 col-md-12 col-sm-12 p-lr0">
                                        <div className="dlab-box overlay-gallery-bx1">
                                            <div className="dlab-thum dlab-img-overlay1 primary dlab-img-effect zoom"> 
                                                <Link to="#;"> <img className="img-cover" src={require("../../images/gallery/food/pic7.jpg")}  alt=""/> </Link>
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon"> 
                                                        <Link to="#;"> <i className="fa fa-play icon-bx-xs"></i> </Link> 
                                                        <span data-exthumbimage="images/gallery/food/pic7.jpg" data-src="images/gallery/food/pic7.jpg" className="check-km" title="Cookies">		
                                                            <i className="fa fa-search icon-bx-xs"></i> 
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 p-lr0">
                                        <div className="dlab-box overlay-gallery-bx1">
                                            <div className="dlab-thum dlab-img-overlay1 primary dlab-img-effect zoom"> 
                                                <Link to="#;"> <img className="img-cover" src={require("../../images/gallery/food/pic5.jpg")}  alt=""/> </Link>
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon"> 
                                                        <Link to="#;"> <i className="fa fa-play icon-bx-xs"></i> </Link> 
                                                        <span data-exthumbimage="images/gallery/food/pic5.jpg" data-src="images/gallery/food/pic5.jpg" className="check-km" title="Burger">		
                                                            <i className="fa fa-search icon-bx-xs"></i> 
                                                        </span>												
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 p-lr0">
                                        <div className="dlab-box overlay-gallery-bx1">
                                            <div className="dlab-thum dlab-img-overlay1 primary dlab-img-effect zoom"> 
                                                <Link to="#;"> <img className="img-cover" src={require("../../images/gallery/food/pic6.jpg")}  alt=""/> </Link>
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon"> 
                                                        <Link to="#;"> <i className="fa fa-play icon-bx-xs"></i> </Link>
                                                        <span data-exthumbimage="images/gallery/food/pic6.jpg" data-src="images/gallery/food/pic6.jpg" className="check-km" title="Bear cup">		
                                                            <i className="fa fa-search icon-bx-xs"></i> 
                                                        </span>	
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info bg-primary wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                <div className="text-white align-self-center ">
                                    <h2>Our Latest Item Food Industry</h2>
                                    <p>Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper <span className="text-white">metus in erat viverra</span>, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada vel. Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper <span className="text-white">metus in erat viverra</span>, vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus malesuada vel.</p>
                                    <Link to="/portfolio-details" className="site-button btnhover10 white">View Project</Link>
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
                    
                    <div className="section-full bg-primary content-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper sr-iconbox1">
                                        <div className="icon-lg m-b20 icon-up">
                                            <Link to="#" className="icon-cell"><img src={require("../../images/icon/food/icon1.png")} alt=""/></Link>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="dlab-tilte">Cookies</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper sr-iconbox1">
                                        <div className="icon-lg m-b20 icon-up">
                                            <Link to="#" className="icon-cell"><img src={require("../../images/icon/food/icon2.png")} alt=""/></Link>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="dlab-tilte">Pizza</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper sr-iconbox1">
                                        <div className="icon-lg m-b20 icon-up">
                                            <Link to="#" className="icon-cell"><img src={require("../../images/icon/food/icon3.png")} alt=""/></Link>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="dlab-tilte">Ice cream</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper sr-iconbox1">
                                        <div className="icon-lg m-b20 icon-up">
                                            <Link to="#" className="icon-cell"><img src={require("../../images/icon/food/icon4.png")} alt=""/></Link>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="dlab-tilte">Bear cup</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper sr-iconbox1">
                                        <div className="icon-lg m-b20 icon-up">
                                            <Link to="#" className="icon-cell"><img src={require("../../images/icon/food/icon5.png")} alt=""/></Link>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="dlab-tilte">Chikan</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="icon-bx-wraper sr-iconbox1">
                                        <div className="icon-lg m-b20 icon-up">
                                            <Link to="#" className="icon-cell"><img src={require("../../images/icon/food/icon6.png")} alt=""/></Link>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="dlab-tilte">Burger</h4>
                                            <p>I have worked with many companies offering supplemental industrial services, and out of all those companies </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	
                    </div>
                    
                    <div className="section-full bg-white content-inner">
                        <div className="container">
                            <div className="section-head text-center">
                                <h2 className="title">Our Team</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <Team4 />
                        </div>
                    </div>
                    
                    <div className="section-full content-inner-2 bg-primary wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s"> 
                        <div className="container">
                            <div className="section-head style2 text-center text-white">
                                <h2 className="title">Testimonials</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>
                            <div className="section-content">
                                <Testmonial5/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-full content-inner bg-gray">
                        <div className="container">
                            <div className="section-head style2 text-center">
                                <h2 className="title">Latest blog post</h2>
                                <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                            </div>

                            <BlogSlider1
                            data={blogContent3} 
                            imgEffect="zoom"
                            blogPostCls="post-style-2"
                            noDes
                            />

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>    
            <ScrollToTop className="icon-up"/>            
            </>
        )
    }
}
export default Index7;