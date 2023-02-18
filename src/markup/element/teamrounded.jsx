import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Slider from "react-slick";

class TeamRounded extends Component {

    render() {

        return (
            <>
                <div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
						<div className="rounded-team">
							<div className="round-box bg-primary">
								<div className="team-mamber">
									<div className="team-mamber">
										<img alt="" src={require("../../images/our-team/pic5.jpg")}/>
									</div>
								</div>
							</div> 
							<div className="sosial-icon-team text-center">
								<ul className="rounde-team-social-icon border">
									<li><Link to={"#"} className="fa fa-facebook fb-btn"></Link></li>
									<li><Link to={"#"} className="fa fa-twitter tw-btn m-l10"></Link></li>
									<li><Link to={"#"} className="fa fa-linkedin link-btn m-l10"></Link></li>
									<li><Link to={"#"} className="fa fa-pinterest-p pin-btn"></Link></li>
								</ul>
							</div>
							<div className="border-1 team-info text-center p-a20 p-t40">
								<h5 className="dlab-title"><Link to={"#"}>Nashid Martines</Link></h5>	
								<span>Director</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
						<div className="rounded-team">
							<div className="round-box bg-primary">
								<div className="team-mamber">
									<div className="team-mamber">
										<img alt="" src={require("../../images/our-team/pic6.jpg")}/>
									</div>
								</div>
							</div> 
							<div className="sosial-icon-team text-center">
								<ul className="rounde-team-social-icon border">
									<li><Link to={"#"} className="fa fa-facebook fb-btn"></Link></li>
									<li><Link to={"#"} className="fa fa-twitter tw-btn m-l10"></Link></li>
									<li><Link to={"#"} className="fa fa-linkedin link-btn m-l10"></Link></li>
									<li><Link to={"#"} className="fa fa-pinterest-p pin-btn"></Link></li>
								</ul>
							</div>
							<div className="border-1 team-info text-center p-a20 p-t40">
								<h5 className="dlab-title"><Link to={"#"}>Konne Backfield</Link></h5>	
								<span>Manager</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
						<div className="rounded-team">
							<div className="round-box bg-primary">
								<div className="team-mamber">
									<div className="team-mamber">
										<img alt="" src={require("../../images/our-team/pic7.jpg")}/>
									</div>
								</div>
							</div> 
							<div className="sosial-icon-team text-center">
								<ul className="rounde-team-social-icon border">
									<li><Link to={"#"} className="fa fa-facebook fb-btn"></Link></li>
									<li><Link to={"#"} className="fa fa-twitter tw-btn m-l10"></Link></li>
									<li><Link to={"#"} className="fa fa-linkedin link-btn m-l10"></Link></li>
									<li><Link to={"#"} className="fa fa-pinterest-p pin-btn"></Link></li>
								</ul>
							</div>
							<div className="border-1 team-info text-center p-a20 p-t40">
								<h5 className="dlab-title"><Link to={"#"}>Marco Datella</Link></h5>
								<span>Developer</span>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
						<div className="rounded-team">
							<div className="round-box bg-primary">
								<div className="team-mamber">
									<div className="team-mamber">
										<img alt="" src={require("../../images/our-team/pic8.jpg")}/>
									</div>
								</div>
							</div> 
							<div className="sosial-icon-team text-center">
								<ul className="rounde-team-social-icon border">
									<li><Link to={"#"} className="fa fa-facebook fb-btn"></Link></li>
									<li><Link to={"#"} className="fa fa-twitter tw-btn m-l10"></Link></li>
									<li><Link to={"#"} className="fa fa-linkedin link-btn m-l10"></Link></li>
									<li><Link to={"#"} className="fa fa-pinterest-p pin-btn"></Link></li>
								</ul>
							</div>
							<div className="border-1 team-info text-center p-a20 p-t40">
								<h5 className="dlab-title"><Link to={"#"}>Hackson Willingham</Link></h5>	
								<span>Developer</span>
							</div>
						</div>
					</div>
				</div>
            </>
        )
    }
}
export default TeamRounded;