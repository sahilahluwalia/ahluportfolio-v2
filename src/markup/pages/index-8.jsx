import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header8'
import Footer from '../layout/footer8'
import MainSlider1 from '../element/mainSlider1';
import ProjectSlider2 from '../element/projectSlider2';
import TeamSlider1 from '../element/teamSlider1';
import Testimonial6 from '../element/testimonial6';
import ScrollToTop from '../element/scrollToTop';
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';

// import '../../css/skin/skin-6.min.css';


class Index8 extends Component {

    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }

    openModal = (event) => {
        event.preventDefault()
        this.setState({isOpen: true})
    }

    closeModal = () => {
        this.setState({isOpen: false})
    }

    render() {
        return (
            <>
            <Header/>
            <div className="page-content frame-box">
                <div className="content-block area-frame">
                    <div className="container">
                        <MainSlider1/> 
                        
                        <div className="section-full content-inner-1 about-bx">
                            <div className="row">
                                <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="about-box">
                                        <div className="dlab-img-effect zoom">
                                            <img src={require("../../images/about/about3.jpg")} alt=""/>
                                        </div> 
                                    </div> 
                                </div>
                                <div className="col-lg-6 m-b30 align-self-center wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div className="m-b15">
                                        <h2 className="m-b0">About <span className="text-primary">Agriculture</span></h2>
                                        <div className="dlab-separator bg-primary m-b0"></div>
                                    </div>
                                    <p><strong className="text-primary">Agriculture</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.</p>
                                    <Link to="/about-1" className="site-button btnhover14">About Us</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full content-inner-1 frame-project-area">
                            <div className="section-head text-center">
                                <h2 className="title">Project And Portfolio</h2>
                                <div className="dlab-separator bg-primary m-b0"></div>
                            </div>

                            <ProjectSlider2/>

                            <div className="m-t40 text-center">
                                <Link to="/portfolio-grid-2" className="site-button btnhover14">View All Portfolio</Link> 
                            </div>
                        </div>
                        
                        <div className="section-full content-inner-1 frame-sr-list-area">
                            <div className="section-head text-center">
                                <h2 className="title">Our Services</h2>
                                <div className="dlab-separator bg-primary m-b0"></div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <ul className="service-list">
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</li>
                                        <li>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</li>
                                        <li>it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <ul className="service-list">
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</li>
                                        <li>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</li>
                                        <li>it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="m-t40 text-center">
                                <Link to="/services" className="site-button btnhover14">View All Services</Link> 
                            </div>
                        </div>
                        
                        <div className="section-full content-inner-1">
                            <div className="section-head text-center">
                                <h2 className="title">Our Team</h2>
                                <div className="dlab-separator bg-primary m-b0"></div>
                            </div>
                            <TeamSlider1/>
                        </div>
                        
                        <ModalVideo 
                        channel='youtube'
                        allowFullScreen 
                        isOpen={this.state.isOpen} 
                        videoId='_FRZVScwggM' 
                        onClose={this.closeModal} 
                        />

                        <div className="section-full content-inner-1">
                            <div className="row gallery-bx">
                                <div className="col-lg-6 m-b30">
                                    <div className="section-head">
                                        <h2 className="title">Video Gallery</h2>
                                        <div className="dlab-separator bg-primary m-b0"></div>
                                    </div>
                                    <div className="dlab-gallery-listing row sp15 gallery video-gallery">
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                                            <div className="dlab-box m-b15">
                                                <div className="dlab-img-overlay4 dlab-img-effect zoom"> 
                                                    <Link to="#">
                                                        <img src={require("../../images/gallery/agriculture/pic1.jpg")} alt=""/>
                                                    </Link>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon"> 
                                                            <Link to="/#" onClick={this.openModal} className="popup-youtube video">
                                                                <i className="fa fa-play"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                            <div className="dlab-box m-b15">
                                                <div className="dlab-img-overlay4 dlab-img-effect zoom"> 
                                                    <Link to="#">
                                                        <img src={require("../../images/gallery/agriculture/pic2.jpg")} alt=""/>
                                                    </Link>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon"> 
                                                            <Link to="/#" onClick={this.openModal} className="popup-youtube video">
                                                                <i className="fa fa-play"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                            <div className="dlab-box m-b15">
                                                <div className="dlab-img-overlay4 dlab-img-effect zoom"> 
                                                    <Link to="#">
                                                        <img src={require("../../images/gallery/agriculture/pic3.jpg")} alt=""/>
                                                    </Link>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon"> 
                                                            <Link to="/#" onClick={this.openModal} className="popup-youtube video">
                                                                <i className="fa fa-play"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                                            <div className="dlab-box m-b15">
                                                <div className="dlab-img-overlay4 dlab-img-effect zoom"> 
                                                    <Link to="#">
                                                        <img src={require("../../images/gallery/agriculture/pic4.jpg")} alt=""/>
                                                    </Link>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon"> 
                                                            <Link to="/#" onClick={this.openModal} className="popup-youtube video">
                                                                <i className="fa fa-play"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                            <div className="dlab-box m-b15">
                                                <div className="dlab-img-overlay4 dlab-img-effect zoom"> 
                                                    <Link to="#">
                                                        <img src={require("../../images/gallery/agriculture/pic5.jpg")} alt=""/>
                                                    </Link>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon"> 
                                                            <Link to="/#" onClick={this.openModal} className="popup-youtube video">
                                                                <i className="fa fa-play"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                            <div className="dlab-box m-b15">
                                                <div className="dlab-img-overlay4 dlab-img-effect zoom"> 
                                                    <Link to="#">
                                                        <img src={require("../../images/gallery/agriculture/pic6.jpg")} alt=""/>
                                                    </Link>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon"> 
                                                            <Link to="/#" onClick={this.openModal} className="popup-youtube video">
                                                                <i className="fa fa-play"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-t20">
                                        <Link to="/#" className="site-button btnhover14">View All Video</Link> 
                                    </div>
                                </div>
                                <div className="col-lg-6 m-b30">
                                    <div className="section-head">
                                        <h2 className="title">Image Gallery</h2>
                                        <div className="dlab-separator bg-primary m-b0"></div>
                                    </div>
                                    <div id="lightgallery" className="dlab-gallery-listing row sp15 gallery">
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.1s">
                                            <div className="dlab-box m-b15">
                                                <div className="dlab-img-overlay4 dlab-img-effect zoom"> 
                                                    <Link to="#">
                                                        <img src={require("../../images/gallery/agriculture/pic1.jpg")} alt=""/>
                                                    </Link>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon"> 
                                                            <span data-exthumbimage="images/gallery/pic1.jpg" data-src="images/gallery/pic1.jpg" className="check-km" title="Image 1 Title will come here">
                                                                <i className="fa fa-search icon-bx-xs"></i>
                                                            </span> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                                            <div className="dlab-box m-b15">
                                                <div className="dlab-img-overlay4 dlab-img-effect zoom"> 
                                                    <Link to="#">
                                                        <img src={require("../../images/gallery/agriculture/pic2.jpg")} alt=""/>
                                                    </Link>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon"> 
                                                            <span className="check-km" data-exthumbimage="images/gallery/pic2.jpg" data-src="images/gallery/pic2.jpg" title="Image 2 Title will come here">
                                                                <i className="fa fa-search icon-bx-xs"></i>
                                                            </span> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                            <div className="dlab-box m-b15">
                                                <div className="dlab-img-overlay4 dlab-img-effect zoom"> 
                                                    <Link to="#">
                                                        <img src={require("../../images/gallery/agriculture/pic3.jpg")} alt=""/>
                                                    </Link>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon"> 
                                                            <span className="check-km" data-exthumbimage="images/gallery/pic3.jpg" data-src="images/gallery/pic3.jpg" title="Image 3 Title will come here">
                                                                <i className="fa fa-search icon-bx-xs"></i>
                                                            </span> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                                            <div className="dlab-box m-b15">
                                                <div className="dlab-img-overlay4 dlab-img-effect zoom"> 
                                                    <Link to="#">
                                                        <img src={require("../../images/gallery/agriculture/pic4.jpg")} alt=""/>
                                                    </Link>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon"> 
                                                            <span className="check-km" data-exthumbimage="images/gallery/pic4.jpg" data-src="images/gallery/pic4.jpg" title="Image 4 Title will come here">
                                                                <i className="fa fa-search icon-bx-xs"></i>
                                                            </span> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                            <div className="dlab-box m-b15">
                                                <div className="dlab-img-overlay4 dlab-img-effect zoom"> 
                                                    <Link to="#">
                                                        <img src={require("../../images/gallery/agriculture/pic5.jpg")} alt=""/>
                                                    </Link>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon"> 
                                                            <span className="check-km" data-exthumbimage="images/gallery/pic5.jpg" data-src="images/gallery/pic5.jpg" title="Image 5 Title will come here">
                                                                <i className="fa fa-search icon-bx-xs"></i>
                                                            </span> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.6s">
                                            <div className="dlab-box m-b15">
                                                <div className="dlab-img-overlay4 dlab-img-effect zoom"> 
                                                    <Link to="#">
                                                        <img src={require("../../images/gallery/agriculture/pic6.jpg")} alt=""/>
                                                    </Link>
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon"> 
                                                            <span className="check-km" data-exthumbimage="images/gallery/pic6.jpg" data-src="images/gallery/pic6.jpg" title="Image 6 Title will come here">
                                                                <i className="fa fa-search icon-bx-xs"></i>
                                                            </span> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-t20">
                                        <Link to="/#" className="site-button btnhover14">View All Image</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full content-inner wow fadeIn" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div className="section-head text-center">
                                <h2 className="title">Client Testimonial</h2>
                                <div className="dlab-separator bg-primary m-b0"></div>
                            </div>
                            <Testimonial6/>
                        </div>
                    </div>
                </div>
            </div>  
            <Footer/> 
            <ScrollToTop className="style3 radius"/>              
            </>
        )
    }
}
export default Index8;