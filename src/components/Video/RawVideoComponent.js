import React, {useEffect, useRef} from 'react';
import video from '../../asserts/withouttext.m4v'
import amptsVideo from '../../asserts/ampts.m4v'
import ast2aiiVideo from '../../asserts/ast2ii.m4v'
import vid1 from '../../asserts/videos/Extra View AMPTS.mp4'
import vid2 from '../../asserts/videos/Allfold_Animation.mp4'
import vid3 from '../../asserts/videos/Ahlu-Sandhar Working.mp4'
import './rawVideoStyle.css'
import {Link} from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import Slider from 'react-slick'
import ReactPlayer from 'react-player'
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import  { useState } from 'react'
function TabletHeroContent() {
    return (
        <div className="position-absolute bottom-0 start-0 end-0 p-2 p-sm-3 bg-dark bg-opacity-75 text-white">
            <h2 className="fs-5 fs-sm-4 fw-bold mb-0">
                Transform Your Manufacturing
            </h2>
            <p className="fs-6 fs-sm-7 mb-1 mb-sm-2">
                Custom Machines & Automation Solutions
            </p>
            <Link
                className='site-button button-sm fs-6 fs-sm-7 '
                to='products#products'
            >
                Learn More
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
        url: vid1,
        title: 'Transform Your Manufacturing',
        subtitle: 'with Ahlu Engineers\' Custom Machines & Automation Solutions',
        description: 'Automation is cost cutting by tightening the corners and not cutting them',
    },
    {
        url: vid2,
        title: 'Innovative Solutions',
        subtitle: 'Streamline Your Production Process',
        description: 'Increase efficiency and reduce costs with our cutting-edge automation',
    },
    {
        url: vid3,
        title: 'Transform Your Manufacturing with Ahlu Engineers\' Custom Machines & Automation Solutions',
        description:"Automation is cost cutting by tightening the corners and not cutting them",
    },
]
const useResizeObserver = (ref, callback) => {
    useEffect(() => {
        if (ref.current) {
            const resizeObserver = new ResizeObserver(entries => {
                if (!Array.isArray(entries) || !entries.length) {
                    return;
                }
                callback(entries[0].contentRect);
            });

            resizeObserver.observe(ref.current);

            return () => {
                resizeObserver.disconnect();
            };
        }
    }, [ref, callback]);
};
function VideoSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderRef = useRef(null)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
        arrows: false,
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
        <div className="position-relative m-10">
            <Slider ref={sliderRef} {...settings}>
                {videos.map((video, idx) => (
                    <div key={idx}>
                        <div className="video-container ">
                            <ReactPlayer
                                // url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                url={video.url}
                                width="100%"
                                height="100%"
                                playing={currentSlide === idx}
                                // controls
                            />
                            <div
                                style={{
                                    opacity: 0.9,
                                }}
                                className="position-absolute top-0 mx-auto w-40 d-flex flex-column">
                                <div className="container mt-4">
                                    <div className="bg-white p-4 shadow">
                                        <h2 className="display-6 fw-bold">{video.title}</h2>
                                        <h3 className="h4 mb-3">{video.subtitle}</h3>
                                        <p className="lead">{video.description}</p>
                                        <button className="btn btn-primary">More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </Slider>
            <button
                className="carousel-control-prev"
                onClick={goToPrev}
                style={{width: 'auto'}}
            >
        <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true">
        </span>
            </button>
            <button
                className="carousel-control-next"
                onClick={goToNext}
                style={{width: 'auto'}}
            >
        <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true">
        </span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={`${className} custom-arrow next-arrow`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            <ChevronRight size={40} />
        </div>
    )
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={`${className} custom-arrow prev-arrow`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            <ChevronLeft size={40} />
        </div>
    )
}

function RawVideoComponent(props) {
    return (
        <div className="">
            <>
                vid1, vid2, vid3
            </>
            <VideoSlideshow/>
            <AwesomeSlider

            >
                {[video, amptsVideo, ast2aiiVideo].map((videoSrc, index) => (
                    <div

                        key={index} className="position-relative">
                        <div

                            className='hero-section '>
                            <div
                                className="content">
                                <div className='p-3 bg-white position-absolute top-0 start-0 mt-3 mt-md-4 ms-3 ms-md-4 d-none d-md-block'
                                     style={{
                                         opacity: 0.9,
                                         maxWidth: '500px',
                                         width: '90%',
                                     }}>
                                    <div className='hero-content'>
                                        <h1 className='title fs-4 fs-md-3 lh-base text-black fw-bold mb-2'>
                                            Transform Your Manufacturing with Ahlu Engineers' Custom
                                            Machines & Automation Solutions
                                        </h1>
                                        <div className='description text-black fs-6 mb-3'>
                                            "Automation is cost cutting by tightening the corners and
                                            not cutting them"
                                        </div>
                                        <div>
                                            <Link
                                                className='site-button btn btn-primary rounded-1'
                                                to='products#products'
                                            >
                                                More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <video
                            src={videoSrc}
                            autoPlay loop muted
                            className="w-100 h-100 object-fit-cover"
                        />
                        <div className="d-block d-md-none">
                            <TabletHeroContent />
                        </div>
                    </div>
                ))}
            </AwesomeSlider>
        </div>
    );
}

export default RawVideoComponent;
