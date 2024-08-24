import React from 'react';
import {
    storyImage,
    visionImage,
    missionImage,
    bannerImage,
    ahluSign
} from "../../../data/imagesData";
import parse from "html-react-parser";

const timeLineData = [
    {
        year: "1 Year",
        yearNumber: "2017-18",
        title: "Visual Art & Design",
        description:
            "Finally Incorporated as a Private Limited firm to build & integrate technological advanced projects to a next level <span> with a vision in building a systematic portfolio</span> to strengthen Indian Manufactures.",
    },
    {
        year: "1 Year",
        yearNumber: "2018-19",
        title: "Visual Art & Design",
        description:
            "Designed, Build & Successfully <span> commissioned 2 Axis Servo based Transfer system for a Tier 1 Automobile compoennt manufacturer</span> as a made in India product.",
    },
    {
        year: "1 Year",
        yearNumber: "2019-20",
        title: "Visual Art & Design",
        description:
            "Apart from SPMs & Press Automation solutions, <span>started delivering  Assembly machines & Vision System solutions</span> in Electrical industry respectively.",
    },
    {
        year: "2 Years",
        yearNumber: "2020-22",
        title: "Visual Art & Design",
        description:
            "Majorly involved in <span> Complete line setup </span> for Sheetmetal products starting <span> from Raw material to Finished </span> goods for Pharma & Electrical products.",
    },
    {
        year: "1 Year",
        yearNumber: "2022-23",
        title: "Visual Art & Design",
        description:
            "Designed & Successfully commisioned <span> Multi Press Transfer System </span> as a Made in India Product",
    },
];
function StoryTimelineJsx(props) {
    return (
        <>
            <div className='section-full content-inner bg-white'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12 m-b30'>
                            <div className='our-story'>
                                <span>OUR STORY</span>
                                <h2 className='title'>
                                    Revolutionizing your mass production with our cutting-edge
                                    SPM technology
                                    {/* Driving Growth & Innovation in Manufacturing */}
                                    {/* <br /> */}
                                    {/* <span className="text-primary">since 2017</span> */}
                                </h2>
                                <h4 className='title'>
                                    We are the manufacturers of{" "}
                                    <span className='text-primary'>
                        Special Purpose Machines (SPM)
                      </span>{" "}
                                    and{" "}
                                    <span className='text-primary'>
                        Power Press Automation solutions
                      </span>{" "}
                                    for mass production. We deal with technologies of Servo
                                    systems, Hydraulic & Pneumohydraulic systems, Vision
                                    Systems, I.I.O.T & Factory Automation and Rejection
                                    systems with customized accuracy as per the requirement of
                                    customers.
                                </h4>
                                <p></p>
                                {/* <Link to={"/#"} className="site-button">
                      Read More
                    </Link> */}
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 m-b30 our-story-thum'>
                            <img
                                src={storyImage}
                                style={{
                                    height: "800px",
                                    objectFit: "cover",
                                }}
                                className='radius-sm'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='container '
                style={{
                    marginTop: "50px",
                    paddingBottom: "50px",
                }}
            >
                <div className='section-head text-black text-center'>
                    <h2 className='title'>Past Timeline</h2>
                    {/* <p>Innovating Manufacuring since 2017</p> */}
                </div>
                <div className='main-timeline'>
                    {timeLineData.reverse().map((item, index) => {
                        return (
                            <div className='timeline text-black'>
                                <div className='icon'></div>
                                <div className='date-content'>
                                    <div className='date-outer'>
                        <span className='date'>
                          {/*<span className='month'> </span>*/}
                            {/* <span className="month">{item.yearNumber}</span> */}
                            <span className='year'>{item.yearNumber}</span>
                        </span>
                                    </div>
                                </div>
                                <div className='timeline-content'>
                                    {/* <h5 className="title">{item.title}</h5> */}
                                    {parse(item.description)}
                                    {/* <p className="description">{item.description}</p> */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default StoryTimelineJsx;
