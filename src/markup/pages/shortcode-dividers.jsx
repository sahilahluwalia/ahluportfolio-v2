import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

var bnr4 = require('./../../images/banner/bnr4.jpg');

class shortDividers extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle text-center bg-pt"  style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Devider</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"./"}>Home</Link></li>
										<li>Element</li>
										<li>Devider</li>
									</ul>
								</div>
							</div>
                        </div>
                    </div>
					
					<div className="bg-white">
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Dividers with height</h4>
										</div>
										<div className="m-b10">
											<h5 className="text-uppercase">Dividers height 1px</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider bg-gray-dark"><i className="icon-dot c-square"></i></div>
										</div>
										<div className="m-b10">
											<h5 className="text-uppercase">Dividers height 2px</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider divider-2px bg-gray-dark"><i className="icon-dot c-square"></i></div>
										</div>
										<div className="m-b10">
											<h5 className="text-uppercase">Dividers height 3px</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider divider-3px bg-gray-dark"><i className="icon-dot c-square"></i></div>
										</div>
										<div className="m-b0">
											<h5 className="text-uppercase">Dividers height 4px</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider divider-4px bg-gray-dark"><i className="icon-dot c-square"></i></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray tb10"><i className="icon-dot c-square"></i></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Dividers with colors</h4>
										</div>
										<div className="m-b10">
											<h5 className="text-uppercase">Dividers bg primary</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider bg-primary"><i className="icon-dot c-square"></i></div>
										</div>
										<div className="m-b10">
											<h5 className="text-uppercase">Dividers bg red</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider divider-2px bg-red"><i className="icon-dot c-square"></i></div>
										</div>
										<div className="m-b10">
											<h5 className="text-uppercase">Dividers bg green</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider divider-3px  bg-green"><i className="icon-dot c-square"></i></div>
										</div>
										<div className="m-b0">
											<h5 className="text-uppercase">Dividers bg black</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider divider-4px  bg-black"><i className="icon-dot c-square"></i></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray tb10"><i className="icon-dot c-square"></i></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Dividers with circle</h4>
										</div>
										<div className="m-b10">
											<h5 className="text-uppercase">Dividers circle left</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider bg-gray-dark text-gray-dark icon-left"><i className="fa fa-circle"></i></div>
										</div>
										<div className="m-b10">
											<h5 className="text-uppercase">Dividers circle right</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider bg-gray-dark text-gray-dark icon-right"><i className="fa fa-circle"></i></div>
										</div>
										<div className="m-b10">
											<h5 className="text-uppercase">Dividers circle center</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider bg-gray-dark text-gray-dark icon-center"><i className="fa fa-circle bg-white text-gray-dark"></i></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dlab-divider bg-gray tb10"><i className="icon-dot c-square"></i></div>
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="sort-title clearfix text-center">
											<h4>Dividers with icon</h4>
										</div>
										<div className="m-b10">
											<h5 className="text-uppercase">Dividers circle left</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider divider-2px bg-gray-dark text-gray-dark icon-left"><i className="fa fa-thumbs-o-up bg-gray-dark text-white"></i></div>
										</div>
										<div className="m-b10">
											<h5 className="text-uppercase">Dividers circle right</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider divider-2px bg-gray-dark text-gray-dark icon-right"><i className="ti-user bg-gray-dark text-white"></i></div>
										</div>
										<div className="m-b10">
											<h5 className="text-uppercase">Dividers circle center</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider divider-2px bg-gray-dark text-gray-dark icon-center"><i className="fa fa-truck bg-gray-dark text-white"></i></div>
										</div>
										<div className="m-b10">
											<h5 className="text-uppercase">Dividers circle left primary</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider divider-2px bg-primary icon-left"><i className="fa fa-thumbs-o-up bg-primary text-white"></i></div>
										</div>
										<div className="m-b10">
											<h5 className="text-uppercase">Dividers circle right black</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider divider-2px bg-black icon-right"><i className="ti-user bg-black text-white"></i></div>
										</div>
										<div className="m-b10">
											<h5 className="text-uppercase">Dividers circle center red</h5>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
											<div className="dlab-divider divider-2px bg-red icon-center"><i className="fa fa-truck bg-red text-white"></i></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				
                </div>

                <Footer />
            </>
        )
    }
}

export default shortDividers;