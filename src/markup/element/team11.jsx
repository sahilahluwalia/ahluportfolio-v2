import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Slider from "react-slick";

class Team11 extends Component {

    render() {

        return (
            <>
                <div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className="dlab-box m-b30 fly-box-ho dlab-img-effect on-color">
							<div className="dlab-media dlab-img-overlay2 dlab-img-effect text-center"> 
								<Link to="/team-1"> <img width="358" height="460" src={require("../../images/our-team/pic8.jpg")} alt=""/> </Link>
								<div className="dlab-info-has ">
									<ul className="dlab-social-icon dlab-social-icon-lg border">
										<li><Link to="#" className="fa fa-facebook fb-btn"></Link></li>
										<li><Link to="#" className="fa fa-twitter tw-btn"></Link></li>
										<li><Link to="#" className="fa fa-linkedin link-btn"></Link></li>
										<li><Link to="#" className="fa fa-pinterest-p pin-btn"></Link></li>
									</ul>
								</div>
							</div>
							<div className="p-lr10 p-tb20 text-black bg-white text-center">
								<h5 className="dlab-title m-t0 m-b5"><Link to="/team-1">Nashid Martines</Link></h5>
								<span className="dlab-member-position">Director</span> 
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className="dlab-box m-b30 fly-box-ho dlab-img-effect on-color">
							<div className="dlab-media dlab-img-overlay2 dlab-img-effect text-center"> 
								<Link to="/team-1"> <img width="358" height="460" src={require("../../images/our-team/pic5.jpg")} alt=""/> </Link>
								<div className="dlab-info-has">
									<ul className="dlab-social-icon dlab-social-icon-lg border">
										<li><Link to="#" className="fa fa-facebook fb-btn"></Link></li>
										<li><Link to="#" className="fa fa-twitter tw-btn"></Link></li>
										<li><Link to="#" className="fa fa-linkedin link-btn"></Link></li>
										<li><Link to="#" className="fa fa-pinterest-p pin-btn"></Link></li>
									</ul>
								</div>
							</div>
							<div className="p-lr10 p-tb20 text-black bg-white text-center">
								<h5 className="dlab-title m-t0 m-b5"><Link to="/team-1">Nashid Martines</Link></h5>
								<span className="dlab-member-position">Director</span> 
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className="dlab-box m-b30 fly-box-ho dlab-img-effect on-color">
							<div className="dlab-media dlab-img-overlay2 dlab-img-effect text-center"> 
								<Link to="/team-1"> <img width="358" height="460" src={require("../../images/our-team/pic1.jpg")} alt=""/> </Link>
								<div className="dlab-info-has ">
									<ul className="dlab-social-icon dlab-social-icon-lg border">
										<li><Link to="#" className="fa fa-facebook fb-btn"></Link></li>
										<li><Link to="#" className="fa fa-twitter tw-btn"></Link></li>
										<li><Link to="#" className="fa fa-linkedin link-btn"></Link></li>
										<li><Link to="#" className="fa fa-pinterest-p pin-btn"></Link></li>
									</ul>
								</div>
							</div>
							<div className="p-lr10 p-tb20 text-black bg-white text-center">
								<h5 className="dlab-title m-t0 m-b5"><Link to="/team-1">Nashid Martines</Link></h5>
								<span className="dlab-member-position">Director</span> 
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
						<div className="dlab-box m-b30 fly-box-ho dlab-img-effect on-color">
							<div className="dlab-media dlab-img-overlay2 dlab-img-effect text-center"> 
								<Link to="/team-1"> <img width="358" height="460" src={require("../../images/our-team/pic6.jpg")} alt=""/> </Link>
								<div className="dlab-info-has">
									<ul className="dlab-social-icon dlab-social-icon-lg border">
										<li><Link to="#" className="fa fa-facebook fb-btn"></Link></li>
										<li><Link to="#" className="fa fa-twitter tw-btn"></Link></li>
										<li><Link to="#" className="fa fa-linkedin link-btn"></Link></li>
										<li><Link to="#" className="fa fa-pinterest-p pin-btn"></Link></li>
									</ul>
								</div>
							</div>
							<div className="p-lr10 p-tb20 text-black bg-white text-center">
								<h5 className="dlab-title m-t0 m-b5"><Link to="/team-1">Hackson Willingham</Link></h5>
								<span className="dlab-member-position">Developer</span> 
							</div>
						</div>
					</div>
				</div>

            </>
        )
    }
}
export default Team11;