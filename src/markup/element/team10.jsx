import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Slider from "react-slick";

class Team10 extends Component {

    render() {

        return (
            <>
                <div className="row dlab-team10-area">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="dlab-box m-b30 dlab-team10">
							<div className="dlab-media">
								<Link to={"#"}>
									<img alt="" src={require("../../images/our-team/team-bx/pic1.jpg")}/>
								</Link>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title"><Link to={"#"}>Nashid Martines</Link></h4>
								<span className="dlab-position">Director</span>
								<ul className="dlab-social-icon">
									<li><Link to={"#"} className="site-button fa fa-facebook facebook" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-twitter twitter"   ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-linkedin linkedin" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-pinterest pinterest"></Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="dlab-box m-b30 dlab-team10">
							<div className="dlab-media">
								<Link to={"#"}>
									<img alt="" src={require("../../images/our-team/team-bx/pic2.jpg")}/>
								</Link>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title"><Link to={"#"}>Konne Backfield</Link></h4>
								<span className="dlab-position">Designer</span>
								<ul className="dlab-social-icon">
									<li><Link to={"#"} className="site-button fa fa-facebook facebook" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-twitter twitter"   ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-linkedin linkedin" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-pinterest pinterest"></Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="dlab-box m-b30 dlab-team10">
							<div className="dlab-media">
								<Link to={"#"}>
									<img alt="" src={require("../../images/our-team/team-bx/pic3.jpg")}/>
								</Link>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title"><Link to={"#"}>Hackson Willingham</Link></h4>
								<span className="dlab-position">Developer</span>
								<ul className="dlab-social-icon">
									<li><Link to={"#"} className="site-button fa fa-facebook facebook"  ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-twitter twitter"    ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-linkedin linkedin"  ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-pinterest pinterest"></Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="dlab-box m-b30 dlab-team10">
							<div className="dlab-media">
								<Link to={"#"}>
									<img alt="" src={require("../../images/our-team/team-bx/pic4.jpg")}/>
								</Link>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title"><Link to={"#"}>Konne Backfield</Link></h4>
								<span className="dlab-position">Manager</span>
								<ul className="dlab-social-icon">
									<li><Link to={"#"} className="site-button fa fa-facebook facebook" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-twitter twitter"   ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-linkedin linkedin" ></Link></li>
									<li><Link to={"#"} className="site-button fa fa-pinterest pinterest" ></Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

            </>
        )
    }
}
export default Team10;