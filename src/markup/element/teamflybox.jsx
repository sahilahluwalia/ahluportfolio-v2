import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Slider from "react-slick";

class TeamFlyBox extends Component {

    render() {

        return (
            <>
                <div className="row">
					<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
						<div className="dlab-box fly-box dlab-img-effect off-color ">
							<div className="dlab-media"> 
								<Link to={"#"}><img src={require("../../images/our-team/pic1.jpg")} alt=""/></Link> 
							</div>
							<div className="dlab-info p-a20 p-t40 border-1">
								<h5 className="dlab-title m-tb0"><Link to={"#"}>Marco Datella</Link></h5>
								<div className="bg-primary skew-content-box">
									<ul className="dlab-social-icon">
										<li><Link to={"#"} className="fa fa-facebook"></Link></li>
										<li><Link to={"#"} className="fa fa-twitter" ></Link></li>
										<li><Link to={"#"} className="fa fa-linkedin"></Link></li>
										<li><Link to={"#"} className="fa fa-google-plus"></Link></li>
									</ul>
								</div>
								<span>Developer</span>
								<p className="m-t10 m-b0">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
						<div className="dlab-box fly-box dlab-img-effect off-color ">
							<div className="dlab-media"> 
								<Link to={"#"}><img src={require("../../images/our-team/pic2.jpg")} alt=""/></Link> 
							</div>
							<div className="dlab-info p-a20 p-t40 border-1">
								<h5 className="dlab-title m-tb0"><Link to={"#"}>Konne Backfield</Link></h5>
								<div className="bg-primary skew-content-box">
									<ul className="dlab-social-icon">
										<li><Link to={"#"} className="fa fa-facebook" ></Link></li>
										<li><Link to={"#"} className="fa fa-twitter"  ></Link></li>
										<li><Link to={"#"} className="fa fa-linkedin" ></Link></li>
										<li><Link to={"#"} className="fa fa-google-plus"></Link></li>
									</ul>
								</div>
								<span>Manager</span>
								<p className="m-t10 m-b0">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
						<div className="dlab-box fly-box dlab-img-effect off-color ">
							<div className="dlab-media off-color"> 
								<Link to={"#"}><img src={require("../../images/our-team/pic3.jpg")} alt=""/></Link> 
							</div>
							<div className="dlab-info p-a20 p-t40 border-1">
								<h5 className="dlab-title m-tb0"><Link to={"#"}>Jimmy Morris</Link></h5>
								<div className="bg-primary skew-content-box">
									<ul className="dlab-social-icon">
										<li><Link to={"#"} className="fa fa-facebook" ></Link></li>
										<li><Link to={"#"} className="fa fa-twitter"  ></Link></li>
										<li><Link to={"#"} className="fa fa-linkedin" ></Link></li>
										<li><Link to={"#"} className="fa fa-google-plus" ></Link></li>
									</ul>
								</div>
								<span>Director</span>
								<p className="m-t10 m-b0">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
							</div>
						</div>
					</div>
				</div>
            </>
        )
    }
}
export default TeamFlyBox;