import React, { useEffect, useRef, useState } from 'react';
import './rawVideoStyle.css'
import { Link } from "react-router-dom";
import Slider from 'react-slick'
import ReactPlayer from 'react-player'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// Custom hook for screen size
const useScreenSize = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isSmallScreen;
};

function TabletHeroContent({
    title,
    link,
    currentSlide,
    index,
                           }) {
    return (
        <div
            style={{
                backgroundColor: 'white',
                marginLeft: '20px',
                maxWidth: '1180px',
                display: currentSlide === index ? 'block' : 'none',
            }}
            className="position-absolute bottom-0 start-0  end-0 p-2 p-sm-3 bg-dark bg-opacity-75 text-white mb-2">
            <h2 className="fs-5 lh-base fs-sm-4 fw-bold mb-2">
                {title}
            </h2>

            <Link
                className='site-button button-sm fs-6 fs-sm-7 '
                to={link}
            >
               Know more
            </Link>
        </div>
    );
}

// make this css into effect
// .awssld__container{
//     width: 100%;
// }

const videos = [
    {
        url: 'https://ahlu.shortsgenie.ai/ast2aii.mp4',
        title: 'Transform your production line with AST2AII Series - Single Press Multi Station Transfer Presses',
        link: '/products/power-press-automation/transfer-system/ast2aii',
        // position: 'top-0 start-0'
    },
    {
        url: 'https://ahlu.shortsgenie.ai/ampts.mp4',
        title: 'Explore AMPTS Series with Multi Press Transfer Arrangement',
        link: '/products/power-press-automation/transfer-system/ampts',
    },
]. sort(() => Math.random() - 0.5)
// randomize the array

function VideoSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderRef = useRef(null)
    const isSmallScreen = useScreenSize();

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
        arrows: false,
        cssEase: "linear"
    }

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev()
        }
    }

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext()
        }
    }

    return (
        <div className="position-relative w-full">
            <Slider ref={sliderRef} {...settings}>
                {videos.map((video, idx) => (
                    <div key={idx} className="slide-item">
                        <div
                            style={{
                                maxWidth: '1180px',
                                margin: '0 auto',
                            }}
                            className="video-wrapper">
                            <ReactPlayer
                                url={video.url}
                                width="100%"
                                height="100%"
                                playing={currentSlide === idx}
                                muted
                            />
                            <div
                                style={{
                                    backgroundColor: 'white',
                                    // margin: '0 20px 10px',
                                    maxWidth: '1180px',
                                    margin: '0 auto',
                                }}
                                className="position-absolute bottom-0 start-0 d-none d-md-block  end-0 p-2 p-sm-3 bg-dark bg-opacity-75 text-white mb-2">
                                <h2 className="fs-5 fs-sm-4 fw-bold mb-0">
                                    {video.title}
                                </h2>
                                <Link
                                    className='site-button button-sm fs-6 fs-sm-7 '
                                    to={video.link}
                                >
                                    Know More
                                </Link>
                            </div>
                            {/*<div className='hero-section'>*/}
                            {/*    <div className="content d-flex justify-content-center top-0 right-20 position-absolute">*/}
                            {/*        <div*/}
                            {/*            className={`p-3 bg-white m-3 m-md-4`}*/}
                            {/*            style={{*/}
                            {/*                opacity: 0.9,*/}
                            {/*                maxWidth: '500px',*/}
                            {/*                width: '90%',*/}
                            {/*               // in bottom side and middle of the video use flexbox*/}
                            {/*            }}>*/}
                            {/*            <div className='hero-content'>*/}
                            {/*                <h1 className='title fs-4 fs-md-3 lh-base text-black fw-bold mb-3'>*/}
                            {/*                    {video.title}*/}
                            {/*                </h1>*/}
                            {/*                <Link*/}
                            {/*                    className='site-button btn btn-primary rounded-1'*/}
                            {/*                    to={video.link}*/}
                            {/*                >*/}
                            {/*                    Know More*/}
                            {/*                </Link>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <div className="d-block d-md-none">
                                {videos.map((video, idx) => (
                                    <div key={idx} >
                                        <TabletHeroContent
                                            title={video.title}
                                            link={video.link}
                                            currentSlide={currentSlide}
                                            index={idx}
                                        />
                                    </div>
                                ))}
                            {/*<TabletHeroContent/>*/}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <button
                className="carousel-control-prev d-none d-md-flex"
                onClick={goToPrev}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '20px',
                    transform: 'translateY(-50%)',
                    zIndex: 999,
                    background: 'rgba(255, 255, 255, 0.5)',
                    border: '2px solid rgba(0, 0, 0, 0.5)',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.8)';
                    e.target.style.border = '2px solid rgba(0, 0, 0, 0.8)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.boxShadow = 'none';
                    e.target.style.background = 'rgba(255, 255, 255, 0.5)';
                    e.target.style.border = '2px solid rgba(0, 0, 0, 0.5)';
                }}
            >
                <FaArrowLeft className='text-black h-50 w-50 d-none d-md-block' />
            </button>
            <button
                className="carousel-control-next d-none d-md-flex"
                onClick={goToNext}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '20px',
                    transform: 'translateY(-50%)',
                    zIndex: 999,
                    background: 'rgba(255, 255, 255, 0.5)',
                    border: '2px solid rgba(0, 0, 0, 0.5)',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.8)';
                    e.target.style.border = '2px solid rgba(0, 0, 0, 0.8)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.boxShadow = 'none';
                    e.target.style.background = 'rgba(255, 255, 255, 0.5)';
                    e.target.style.border = '2px solid rgba(0, 0, 0, 0.5)';
                }}
            >
                <FaArrowRight className='text-black h-50 w-50 d-none d-md-block' />
            </button>
        </div>
    )
}

function RawVideoComponent(props) {
    return (
        <div >

            <VideoSlideshow />
            {/*<AwesomeSlider*/}

            {/*>*/}
            {/*    {[video, amptsVideo, ast2aiiVideo].map((videoSrc, index) => (*/}
            {/*        <div*/}

            {/*            key={index} className="position-relative">*/}
            {/*            <div*/}

            {/*                className='hero-section '>*/}
            {/*                <div*/}
            {/*                    className="content">*/}
            {/*                    <div className='p-3 bg-white position-absolute top-0 start-0 mt-3 mt-md-4 ms-3 ms-md-4 d-none d-md-block'*/}
            {/*                         style={{*/}
            {/*                             opacity: 0.9,*/}
            {/*                             maxWidth: '500px',*/}
            {/*                             width: '90%',*/}
            {/*                         }}>*/}
            {/*                        <div className='hero-content'>*/}
            {/*                            <h1 className='title fs-4 fs-md-3 lh-base text-black fw-bold mb-2'>*/}
            {/*                                Transform Your Manufacturing with Ahlu Engineers' Custom*/}
            {/*                                Machines & Automation Solutions*/}
            {/*                            </h1>*/}
            {/*                            <div className='description text-black fs-6 mb-3'>*/}
            {/*                                "Automation is cost cutting by tightening the corners and*/}
            {/*                                not cutting them"*/}
            {/*                            </div>*/}
            {/*                            <div>*/}
            {/*                                <Link*/}
            {/*                                    className='site-button btn btn-primary rounded-1'*/}
            {/*                                    to='products#products'*/}
            {/*                                >*/}
            {/*                                    More*/}
            {/*                                </Link>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <video*/}
            {/*                src={videoSrc}*/}
            {/*                autoPlay loop muted*/}
            {/*                className="w-100 h-100 object-fit-cover"*/}
            {/*            />*/}
            {/*            <div className="d-block d-md-none">*/}
            {/*                <TabletHeroContent />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</AwesomeSlider>*/}
        </div>
    );
}

export default RawVideoComponent;
