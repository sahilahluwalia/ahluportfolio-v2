import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Portfolio from '../element/portfolio';

const bg = require('../../images/banner/bnr4.jpg')

class PortfolioGrid3 extends Component {


    render() {
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }} >
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Portfolio Grid 3 Icon</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Portfolio Grid 3 Icon</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <Portfolio col="col-md-4"/>
                    
                </div>                
                <Footer/>                
            </>
        )
    }
}
export default PortfolioGrid3;