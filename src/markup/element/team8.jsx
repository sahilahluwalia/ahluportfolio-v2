import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Slider from "react-slick";

class Team8 extends Component {

    render() {

        return (
            <>
                <div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="dlab-box m-b30 dlab-team8">
							<div className="dlab-media">
								<Link to={"#"}>
									<img alt="" src={require("../../images/our-team/pic12.jpg")}/>
								</Link>
								<ul className="dlab-social-icon">
									<li><Link to={"#"} className="site-button fa fa-facebook facebook" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-twitter twitter" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-linkedin linkedin" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-pinterest pinterest" ></Link></li>
								</ul>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title"><Link to={"#"}>Nashid Martines</Link></h4>
								<span className="dlab-position">Director</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="dlab-box m-b30 dlab-team8">
							<div className="dlab-media">
								<Link to={"#"}>
									<img alt="" src={require("../../images/our-team/pic16.jpg")}/>
								</Link>
								<ul className="dlab-social-icon">
									<li><Link to={"#"} className="site-button fa fa-facebook facebook" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-twitter twitter" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-linkedin linkedin" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-pinterest pinterest" ></Link></li>
								</ul>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title"><Link to={"#"}>Konne Backfield</Link></h4>
								<span className="dlab-position">Designer</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="dlab-box m-b30 dlab-team8">
							<div className="dlab-media">
								<Link to={"#"}>
									<img alt="" src={require("../../images/our-team/pic13.jpg")}/>
								</Link>
								<ul className="dlab-social-icon">
									<li><Link to={"#"} className="site-button fa fa-facebook facebook" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-twitter twitter" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-linkedin linkedin" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-pinterest pinterest" ></Link></li>
								</ul>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title"><Link to={"#"}>Hackson Willingham</Link></h4>
								<span className="dlab-position">Developer</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="dlab-box m-b30 dlab-team8">
							<div className="dlab-media">
								<Link to={"#"}>
									<img alt="" src={require("../../images/our-team/pic15.jpg")}/>
								</Link>
								<ul className="dlab-social-icon">
									<li><Link to={"#"} className="site-button fa fa-facebook facebook" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-twitter twitter" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-linkedin linkedin" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-pinterest pinterest" ></Link></li>
								</ul>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title"><Link to={"#"}>Konne Backfield</Link></h4>
								<span className="dlab-position">Manager</span>
							</div>
						</div>
					</div>
				</div>

            </>
        )
    }
}
export default Team8;