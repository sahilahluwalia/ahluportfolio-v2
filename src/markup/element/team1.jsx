import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Slider from "react-slick";

class Team1 extends Component {

    render() {

        return (
            <>
                <div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="relative">
							<div className="dlab-box dlab-team1">
								<div className="inner">
									<div className="dlab-media">
										<Link to={"#"}>
											<img width="358" height="460" alt="" src={require("../../images/our-team/pic1.jpg")}/>
										</Link>
									</div>
									<div className="dlab-info">
										<h4 className="dlab-title"><Link to={"#"}>Nashid Martines</Link></h4>
										<span className="dlab-position">Director</span>
										<ul className="dlab-social-icon dez-border">
											<li><Link to={"#"} className="fa fa-facebook" ></Link></li>
											<li><Link to={"#"} className="fa fa-twitter"  ></Link></li>
											<li><Link to={"#"} className="fa fa-linkedin" ></Link></li>
											<li><Link to={"#"} className="fa fa-pinterest"></Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="dlab-box m-b30 dlab-team1">
							<div className="dlab-media">
								<Link to={"#"}>
									<img width="358" height="460" alt="" src={require("../../images/our-team/pic2.jpg")}/>
								</Link>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title"><Link to={"#"}>Konne Backfield</Link></h4>
								<span className="dlab-position">Designer</span>
								<ul className="dlab-social-icon dez-border">
									<li><Link to={"#"} className="fa fa-facebook" ></Link></li>
									<li><Link to={"#"} className="fa fa-twitter"  ></Link></li>
									<li><Link to={"#"} className="fa fa-linkedin" ></Link></li>
									<li><Link to={"#"} className="fa fa-pinterest"></Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="dlab-box m-b30 dlab-team1">
							<div className="dlab-media">
								<Link to={"#"}>
									<img width="358" height="460" alt="" src={require("../../images/our-team/pic3.jpg")}/>
								</Link>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title"><Link to={"#"}>Hackson Willingham</Link></h4>
								<span className="dlab-position">Developer</span>
								<ul className="dlab-social-icon dez-border">
									<li><Link to={"#"} className="fa fa-facebook" ></Link></li>
									<li><Link to={"#"} className="fa fa-twitter"  ></Link></li>
									<li><Link to={"#"} className="fa fa-linkedin" ></Link></li>
									<li><Link to={"#"} className="fa fa-pinterest"></Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="dlab-box m-b30 dlab-team1">
							<div className="dlab-media">
								<Link to={"#"}>
									<img width="358" height="460" alt="" src={require("../../images/our-team/pic4.jpg")}/>
								</Link>
							</div>
							<div className="dlab-info">
								<h4 className="dlab-title"><Link to={"#"}>Konne Backfield</Link></h4>
								<span className="dlab-position">Manager</span>
								<ul className="dlab-social-icon dez-border">
									<li><Link to={"#"} className="fa fa-facebook"  ></Link></li>
									<li><Link to={"#"} className="fa fa-twitter"   ></Link></li>
									<li><Link to={"#"} className="fa fa-linkedin"  ></Link></li>
									<li><Link to={"#"} className="fa fa-pinterest" ></Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

            </>
        )
    }
}
export default Team1;