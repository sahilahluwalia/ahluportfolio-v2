import React from 'react';
import video from '../../asserts/withouttext.m4v'
import amptsVideo from '../../asserts/ampts.m4v'
import ast2aiiVideo from '../../asserts/ast2ii.m4v'
import './rawVideoStyle.css'
import {Link} from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";

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



function RawVideoComponent(props) {
    return (
        <div className="d-flex">
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
