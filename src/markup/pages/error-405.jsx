import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'


class Error405 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="section-full dz_error-405 content-inner bg-gray">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 text-center m-tb30">
                                    <div className="dz_error">405</div>
                                </div>
                                <div className="col-lg-7 m-b30">
                                    <h2 className="error-head">Server Error!</h2>
                                    <div className="dlab-divider bg-gray-dark"></div>
                                    <p className="font-16 error-content">You can go back to the Main Page by clicking the button.</p>
                                    <Link to="/index" className="site-button">Go To Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                <Footer/>                
            </>
        )
    }
}
export default Error405;