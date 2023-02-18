import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Slider from "react-slick";

class TeamBox extends Component {

    render() {

        return (
            <>
                <div className="row text-center">
					<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
						<div className="dlab-box">
							<div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src={require("../../images/our-team/pic1.jpg")} alt=""/>
								<div className="overlay-bx">
									<div className="overlay-icon">
										<ul className="dlab-social-icon">
											<li><Link to={"#"} className="fa text-white fa-facebook"></Link></li>
											<li><Link to={"#"} className="fa text-white fa-twitter"></Link></li>
											<li><Link to={"#"} className="fa text-white fa-linkedin"></Link></li>
											<li><Link to={"#"} className="fa text-white fa-facebook"></Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="dlab-title-bx p-a10">
								<h5 className="dlab-title m-b5"><Link to={"#"} >Marco Datella</Link></h5>
								<span className="dlab-position">Director</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
						<div className="dlab-box">
							<div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src={require("../../images/our-team/pic2.jpg")} alt=""/>
								<div className="overlay-bx">
									<div className="overlay-icon">
										<ul className="dlab-social-icon">
											<li><Link to={"#"} className="fa text-white fa-facebook"></Link></li>
											<li><Link to={"#"} className="fa text-white fa-twitter"></Link></li>
											<li><Link to={"#"} className="fa text-white fa-linkedin"></Link></li>
											<li><Link to={"#"} className="fa text-white fa-facebook"></Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="dlab-title-bx p-a10">
								<h5 className="dlab-title m-b5"><Link to={"#"} >Marco Datella</Link></h5>
								<span className="dlab-position">Director</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
						<div className="dlab-box">
							<div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src={require("../../images/our-team/pic3.jpg")} alt=""/>
								<div className="overlay-bx">
									<div className="overlay-icon">
										<ul className="dlab-social-icon">
											<li><Link to={"#"} className="fa text-white fa-facebook"></Link></li>
											<li><Link to={"#"} className="fa text-white fa-twitter"></Link></li>
											<li><Link to={"#"} className="fa text-white fa-linkedin"></Link></li>
											<li><Link to={"#"} className="fa text-white fa-facebook"></Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="dlab-title-bx p-a10">
								<h5 className="dlab-title m-b5"><Link to={"#"}>Konne Backfield</Link></h5>
								<span className="dlab-position">Developer</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
						<div className="dlab-box">
							<div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> <img src={require("../../images/our-team/pic4.jpg")} alt=""/>
								<div className="overlay-bx">
									<div className="overlay-icon">
										<ul className="dlab-social-icon">
											<li><Link to={"#"} className="fa text-white fa-facebook"></Link></li>
											<li><Link to={"#"} className="fa text-white fa-twitter"></Link></li>
											<li><Link to={"#"} className="fa text-white fa-linkedin"></Link></li>
											<li><Link to={"#"} className="fa text-white fa-facebook"></Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="dlab-title-bx p-a10">
								<h5 className="dlab-title m-b5"><Link to={"#"}>Hackson Willingham</Link></h5>
								<span className="dlab-position">Manager</span>
							</div>
						</div>
					</div>
				</div>
            </>
        )
    }
}
export default TeamBox;