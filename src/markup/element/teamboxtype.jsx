import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Slider from "react-slick";

class TeamBoxType extends Component {

    render() {

        return (
            <>
                <div className="row">
					<div className="col-lg-6 col-md-12 m-b30">
						<div className="team-box-type dlab-box">
							<div className="team-mamber-img dlab-media dlab-img-overlay8">
								<img src={require("../../images/our-team/pic4.jpg")} alt=""/>
							</div>
							<div className="team-info-box">
								<h4 className="dlab-title"><Link to={"#"}>Marco Datella</Link></h4>
								<p>Lorem Ipsum is simply dummy text of the printing and.</p>
								<ul className="list-inline m-tb20">
									<li><Link to={"#"} className="site-button facebook sharp outline">
										<i className="fa fa-facebook"></i>
									</Link></li>
									<li><Link to={"#"} className="site-button google-plus sharp outline">
										<i className="fa fa-google-plus"></i>
									</Link></li>
									<li><Link to={"#"} className="site-button linkedin sharp outline">
										<i className="fa fa-linkedin"></i>
									</Link></li>
									<li><Link to={"#"} className="site-button twitter sharp outline">
										<i className="fa fa-twitter"></i>
									</Link></li>
								</ul>
								<ul className="team-p-info">
									<li><i className="ti-mobile m-r5 text-primary"></i> +01 234 567 8910</li>
									<li><i className="ti-email m-r5 text-primary"></i> info@example.com</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 m-b30">
						<div className="team-box-type dlab-box">
							<div className="team-mamber-img dlab-media dlab-img-overlay8">
								<img src={require("../../images/our-team/pic3.jpg")} alt=""/>
							</div>
							<div className="team-info-box">
								<h4 className="dlab-title"><Link to={"#"}>Konne Backfield</Link></h4>
								<p>Lorem Ipsum is simply dummy text of the printing and.</p>
								<ul className="list-inline m-tb20">
									<li><Link to={"#"} className="site-button facebook sharp outline">
										<i className="fa fa-facebook"></i>
									</Link></li>
									<li><Link to={"#"} className="site-button google-plus sharp outline">
										<i className="fa fa-google-plus"></i>
									</Link></li>
									<li><Link to={"#"} className="site-button linkedin sharp outline">
										<i className="fa fa-linkedin"></i>
									</Link></li>
									<li><Link to={"#"} className="site-button twitter sharp outline">
										<i className="fa fa-twitter"></i>
									</Link></li>
								</ul>
								<ul className="team-p-info">
									<li><i className="ti-mobile m-r5 text-primary"></i> +01 234 567 8910</li>
									<li><i className="ti-email m-r5 text-primary"></i> info@example.com</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 m-b30">
						<div className="team-box-type dlab-box">
							<div className="team-mamber-img dlab-media dlab-img-overlay8">
								<img src={require("../../images/our-team/pic2.jpg")} alt=""/>
							</div>
							<div className="team-info-box">
								<h4 className="dlab-title"><Link to={"#"}>Hackson Willingham</Link></h4>
								<p>Lorem Ipsum is simply dummy text of the printing and.</p>
								<ul className="list-inline m-tb20">
									<li><Link to={"#"} className="site-button facebook sharp outline">
										<i className="fa fa-facebook"></i>
									</Link></li>
									<li><Link to={"#"} className="site-button google-plus sharp outline">
										<i className="fa fa-google-plus"></i>
									</Link></li>
									<li><Link to={"#"} className="site-button linkedin sharp outline">
										<i className="fa fa-linkedin"></i>
									</Link></li>
									<li><Link to={"#"} className="site-button twitter sharp outline">
										<i className="fa fa-twitter"></i>
									</Link></li>
								</ul>
								<ul className="team-p-info">
									<li><i className="ti-mobile m-r5 text-primary"></i> +01 234 567 8910</li>
									<li><i className="ti-email m-r5 text-primary"></i> info@example.com</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 m-b30">
						<div className="team-box-type dlab-box">
							<div className="team-mamber-img dlab-media dlab-img-overlay8">
								<img src={require("../../images/our-team/pic1.jpg")} alt=""/>
							</div>
							<div className="team-info-box">
								<h4 className="dlab-title"><Link to={"#"}>Jimmy Morris</Link></h4>
								<p>Lorem Ipsum is simply dummy text of the printing and.</p>
								<ul className="list-inline m-tb20">
									<li><Link to={"#"} className="site-button facebook sharp outline">
										<i className="fa fa-facebook"></i>
									</Link></li>
									<li><Link to={"#"} className="site-button google-plus sharp outline">
										<i className="fa fa-google-plus"></i>
									</Link></li>
									<li><Link to={"#"} className="site-button linkedin sharp outline">
										<i className="fa fa-linkedin"></i>
									</Link></li>
									<li><Link to={"#"} className="site-button twitter sharp outline">
										<i className="fa fa-twitter"></i>
									</Link></li>
								</ul>
								<ul className="team-p-info">
									<li><i className="ti-mobile m-r5 text-primary"></i> +01 234 567 8910</li>
									<li><i className="ti-email m-r5 text-primary"></i> info@example.com</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
            </>
        )
    }
}
export default TeamBoxType;