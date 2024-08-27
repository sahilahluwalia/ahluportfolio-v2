import React from 'react';
// import video from '../../asserts/withouttext.mp4'
import './rawVideoStyle.css'
import Link from 'next/link'
function RawVideoComponent(props) {
    return (
        <div
            className="video-container"
        >
            <div

                className='hero-section home-bnr1'
            >
            <div className="content">
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-12 col-md-12 '>
                            <div
                                style={{
                                    textShadow:"-4px 2px 20px rgba(0,0,0,0.57)",
                                }}
                                className='hero-content'>
                                <h1 className='title '>
                                    Transform Your Manufacturing with Ahlu Engineers' Custom
                                    Machines & Automation Solutions
                                </h1>

                                <div
                                    style={{
                                        textShadow:"-4px 2px 20px rgba(0,0,0,0.57)"
                                    }}
                                    className='description'>
                                    "Automation is cost cutting by tightening the corners and
                                    not cutting them"
                                </div>

                                <div>
                                    <Link
                                        className='site-button outline outline-2 white m-r15 radius-xl'
                                        href='products#products'
                                    >
                                        Products
                                    </Link>
                                    <Link
                                        className='site-button outline outline-2 white m-r15 radius-xl'
                                        href='about'
                                    >
                                        About Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="overlay"></div>
            <video
                src={"video"}
                autoPlay loop muted />

        </div>
    );
}

export default RawVideoComponent;
