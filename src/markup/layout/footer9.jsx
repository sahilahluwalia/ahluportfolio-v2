import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';



const Footer9 = ()=>{
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
		emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'd9b2e0f5fc72cb94792110e8ff2028f3-us16')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
	};	
    return (
        <>
            <footer className="site-footer map-footer">
                <div className="footer-top">
                    <div className="container-fluid">
                        <div className="row equal-wraper" >
                            <div className="col-md-4 col-lg-6 col-sm-12 p-a0 equal-col wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                <iframe className="" title="map3" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14444.846145183914!2d75.84806889203723!3d25.16233421040968!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1517832215254" style={{"border":"0","width":"100%","minHeight":"300px","height":"100%","verticalAlign":"middle"}} allowfullscreen></iframe>
                            </div>
                            <div className="col-md-8 col-lg-6 col-sm-12 equal-col wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                <div className="p-tb60 p-lr15">
                                    <div className="max-w600">
                                        <div className="footer-logo m-b30">
                                            <img src={require("../../images/logo-white.png")} alt="" width="120"/>
                                        </div>
                                        <div className="m-b0">
                                            <h5 className="m-b10 text-white">Subscribe To Our Newsletter</h5>
                                            <p className="text-capitalize m-b20">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the..</p>
                                            <div className="subscribe-form m-b20">
                                                <form className="dzSubscribe" ref={form} onSubmit={sendEmail}>
                                                    <div className="dzSubscribeMsg"></div>
                                                    <div className="input-group">
                                                        <input name="dzEmail" required="required"  className="form-control" placeholder="Your Email Address" type="email"/>
                                                        <span className="input-group-btn">
                                                            <button name="submit" value="Submit" type="submit" className="site-button btnhover17 radius-xl">Subscribe</button>
                                                        </span> 
                                                    </div>
                                                </form>
                                            </div>
                                            <ul className="list-inline m-a0">
                                                <li><Link to={"#"} className="site-button facebook circle "><i className="fa fa-facebook"></i></Link></li>
                                                <li><Link to={"#"} className="site-button google-plus circle "><i className="fa fa-google-plus"></i></Link></li>
                                                <li><Link to={"#"} className="site-button linkedin circle "><i className="fa fa-linkedin"></i></Link></li>
                                                <li><Link to={"#"} className="site-button instagram circle "><i className="fa fa-instagram"></i></Link></li>
                                                <li><Link to={"#"} className="site-button twitter circle "><i className="fa fa-twitter"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-bottom text-left row">
                                    <div className="col-md-12 col-sm-12 text-left p-lr30"> 
                                        <span>Copyright &copy; 2022 DexignZone</span> 
                                        <div className="widget-link m-t10 "> 
                                            <ul>
                                                <li><Link to="/"> Home</Link></li> 
                                                <li><Link to="/about-2"> About</Link></li> 
                                                <li><Link to="/help-desk"> Help Desk</Link></li> 
                                                <li><Link to="/privacy-policy"> Privacy Policy</Link></li> 
                                                <li><Link to="/contact-1"> Contact Us</Link></li> 
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>                
        </>
    )
}
export default Footer9;