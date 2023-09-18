import React from 'react';
import {ahluSign, missionImage, visionImage} from "../../../data/imagesData";

function VisionMission(props) {
    return (
        <div
            style={{
                marginTop: "3rem",
            }}

            className="page-content">
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-12 m-b30 our-story-thum'>
                    <img
                        style={{
                            height: "700px",
                            objectFit: "cover",
                        }}
                        src={visionImage}
                        className='radius-sm'
                        alt=''
                    />
                </div>
                <div className='col-lg-6 col-md-12 m-b30'>
                    <div className='our-story'>
                        <span>OUR VISION</span>
                        <h2 className='title'>At Ahlu Engineers,</h2>
                        <h4 className='title'>
                            Our vision is to be the leading provider of{" "}
                            <span className='text-primary'>
                      cutting-edge manufacturing automation solutions
                    </span>{" "}
                            that drive growth and success for our clients
                        </h4>
                        <p>
                            <ul>
                                <li>
                                    To empower our clients to stay ahead of the competition
                                    and achieve long-term success
                                </li>
                                <li>
                                    To drive growth and success for our clients by staying
                                    at the forefront of technological advances
                                </li>
                                <li>
                                    To be recognized as a trusted partner and industry
                                    leader
                                </li>
                                <li>
                                    To develop new technologies and techniques that push the
                                    boundaries of what's possible
                                </li>
                                <li>
                                    To focus on innovation, quality, and customer
                                    satisfaction
                                </li>
                                <li>
                                    To build a brighter future for the manufacturing
                                    industry.
                                </li>
                            </ul>
                        </p>
                        {/* <Link to={"/#"} className="site-button">
                      Read More
                    </Link> */}
                    </div>
                </div>
            </div>
        </div>

    <div
        id='mission'
        className='section-full content-inner bg-white video-section'

        // style={{ backgroundImage: "url(" + bg1 + ")" }}
    >
        <div className='container '>
            <div className='section-content'>
                <div className='row d-flex'>
                    <div className='col-lg-6 col-md-12 m-b30 align-self-center video-infobx'>
                        <div className='content-bx1'>
                            <span className='titlespan'>OUR MISSION</span>

                            <p className='m-b30'>
                                To equip shop floor teams with{" "}
                                <span className='strong-text'>
                          advanced automation technology{" "}
                        </span>
                                to compete globally. We design innovative solutions that{" "}
                                <span className='strong-text'> boost efficiency</span>,{" "}
                                <span className='strong-text'>cut costs</span>, and
                                <span className='strong-text'> improve safety.</span>
                            </p>
                            <h2 className='m-b15 title'>
                                A company involved in
                                <br />
                                <span className='text-primary'>
                          customized manufacturing
                        </span>{" "}
                                and
                                <span className='text-primary'>
                          {" "}
                                    industrial automation solutions
                        </span>{" "}
                                provider.
                            </h2>
                            {/* <img
                        src={require("../../images/sign.png")}
                        width="200"
                        alt=""
                      />
                      <h4 className="m-b0">Tejendra Singh Ahluwalia</h4>
                      <span className="font-14">Company Director</span> */}
                            <img
                                src={ahluSign}
                                width='200'
                                alt='ahlu signature'
                            />
                            <h4 className='m-b0'>Satyam Ahluwalia</h4>
                            <span className='font-14'>Project Manager</span>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 m-b30'>
                        <div className='video-bx'>
                            <img src={missionImage} alt='Signature' />
                            {/* <div className='video-play-icon'>
                        <a
                          href='https://www.youtube.com/watch?v=_FRZVScwggM'
                          className='popup-youtube video bg-primary'
                        >
                          <i className='fa fa-play'></i>
                        </a>
                      </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
);
}

export default VisionMission;