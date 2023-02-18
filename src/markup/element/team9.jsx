import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Slider from "react-slick";

class Team9 extends Component {

    render() {

        return (
            <>
                <div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="dlab-box m-b30 dlab-team9">
							<div className="dlab-media dlab-media-right">
								<Link to={"#"} >
									<img alt="" src={require("../../images/our-team/pic1.jpg")}/>
								</Link>
								<div className="dlab-info-has">
									<ul className="dlab-social-icon">
										<li><Link to={"#"} className="site-button fa fa-facebook" ></Link></li>
										<li><Link to={"#"} className="site-button fa fa-twitter" ></Link></li>
										<li><Link to={"#"} className="site-button fa fa-linkedin" ></Link></li>
										<li><Link to={"#"} className="site-button fa fa-pinterest" ></Link></li>
									</ul>
								</div>
								<div className="clearfix">
									<h4 className="dlab-title"><Link to={"#"} >Nashid Martines</Link></h4>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="dlab-box m-b30 dlab-team9">
							<div className="dlab-media dlab-media-right">
								<Link to={"#"} >
									<img alt="" src={require("../../images/our-team/pic2.jpg")}/>
								</Link>
								<div className="dlab-info-has">
									<ul className="dlab-social-icon">
										<li><Link to={"#"} className="site-button fa fa-facebook" ></Link></li>
										<li><Link to={"#"} className="site-button fa fa-twitter" ></Link></li>
										<li><Link to={"#"} className="site-button fa fa-linkedin" ></Link></li>
										<li><Link to={"#"} className="site-button fa fa-pinterest" ></Link></li>
									</ul>
								</div>
								<div className="clearfix">
									<h4 className="dlab-title"><Link to={"#"} >Konne Backfield</Link></h4>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="dlab-box m-b30 dlab-team9">
							<div className="dlab-media dlab-media-right">
								<Link to={"#"} >
									<img alt="" src={require("../../images/our-team/pic3.jpg")}/>
								</Link>
								<div className="dlab-info-has">
									<ul className="dlab-social-icon">
										<li><Link to={"#"} className="site-button fa fa-facebook" ></Link></li>
										<li><Link to={"#"} className="site-button fa fa-twitter" ></Link></li>
										<li><Link to={"#"} className="site-button fa fa-linkedin" ></Link></li>
										<li><Link to={"#"} className="site-button fa fa-pinterest" ></Link></li>
									</ul>
								</div>
								<div className="clearfix">
									<h4 className="dlab-title"><Link to={"#"} >Hackson Willingham</Link></h4>									
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="dlab-box m-b30 dlab-team9">
							<div className="dlab-media dlab-media-right">
								<Link to={"#"} >
									<img alt="" src={require("../../images/our-team/pic4.jpg")}/>
								</Link>
								<div className="dlab-info-has">
									<ul className="dlab-social-icon">
										<li><Link to={"#"} className="site-button fa fa-facebook" ></Link></li>
										<li><Link to={"#"} className="site-button fa fa-twitter" ></Link></li>
										<li><Link to={"#"} className="site-button fa fa-linkedin" ></Link></li>
										<li><Link to={"#"} className="site-button fa fa-pinterest" ></Link></li>
									</ul>
								</div>
								<div className="clearfix">
									<h4 className="dlab-title"><Link to={"#"} >Konne Backfield</Link></h4>
								</div>
							</div>
						</div>
					</div>
				</div>

            </>
        )
    }
}
export default Team9;