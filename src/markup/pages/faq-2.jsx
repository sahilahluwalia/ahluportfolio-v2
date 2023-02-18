import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
//import { Accordion, AccordionItem } from 'react-sanfona';
import { Accordion } from 'react-bootstrap';

const faqContent=[
    {
        question:"1. Web design aorem apsum dolor sit amet?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"2. Graphic design aorem apsum dolor ?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"3. Developement aorem apsum dolor sit amet ? ",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"4. True Responsiveness consectetuer adipiscing ? ",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"5. Claritas est etiam processus ?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
]

const bg = require('../../images/banner/bnr3.jpg')

const Faq2 = () =>  {
	const [activeDefault, setActiveDefault] = useState(-1);  

    
        return (
            <>
                <Header/>
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Faq 2</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to="/">Home</Link></li>
                                        <li>Faq 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="content-block">
                        <div className="section-full content-inner bg-white">
                            <div className="container">
                                <div className="section-head text-black text-left">
                                    <h3>General Questions</h3>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12">                                       
                                        <Accordion className="dlab-accordion faq-2 box-sort-in m-b30  ">
                                            {faqContent.map((faq, i) =>(
                                                <div className="panel">
                                                    <Accordion.Item eventKey={`${i}`}>
                                                        <Accordion.Header as="h6">
                                                            {faq.question} 
                                                        </Accordion.Header>
                                                        <Accordion.Body eventKey={`${i}`}>
                                                            <div>{faq.answer}</div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>  
                                                </div>                                              
                                            ))}
                                        </Accordion>
										
										{/* <Accordion className="accordian dlab-accordion faq-2 box-sort-in m-b30" defaultActiveKey='-1'>
                                            {
                                                faqContent.map((faq, i) =>(
													<div className="panel">
														<div  className="acod-head" >
															<h6 className="acod-title">
																<Accordion.Toggle as={Link} eventKey={`${i}`}
																	className={`${ activeDefault === i ? '' : 'collapsed' }`}
																	onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
																>
																	{faq.question} 
																</Accordion.Toggle>
															</h6>
														</div>  		
														<Accordion.Collapse className='acod-body' eventKey={`${i}`}>
															<div className='acod-content'>{faq.answer}</div>
														</Accordion.Collapse>
													</div> 													
                                                ))
                                            }
                                        </Accordion> 	 */}
										
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-full bg-gray content-inner">
                            <div className="container">
                                <div className="section-head text-black text-left">
                                    <h3>General Questions</h3>
                                </div>
                                <div className="row m-b30">
                                    <div className="col-lg-12 col-sm-12">
                                         
                                        <Accordion className="dlab-accordion faq-2 accord-2 box-sort-in m-b30 ">
                                            {faqContent.map((faq, i) =>(
                                                <div className="panel">
                                                    <Accordion.Item eventKey={`${i}`}>
                                                        <Accordion.Header as="h6">
                                                            {faq.question} 
                                                        </Accordion.Header>
                                                        <Accordion.Body eventKey={`${i}`}>
                                                            <div>{faq.answer}</div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>  
                                                </div>                                              
                                            ))}
                                        </Accordion>
										{/* <Accordion className="accordian dlab-accordion faq-2 box-sort-in m-b30" defaultActiveKey='-1'>
                                            {
                                                faqContent.map((faq, i) =>(
													<div className="panel">
														<div  className="acod-head" >
															<h6 className="acod-title">
																<Accordion.Toggle as={Link} eventKey={`${i}`}
																	className={`${ activeDefault === i ? '' : 'collapsed' }`}
																	onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}
																>
																	{faq.question} 
																</Accordion.Toggle>
															</h6>
														</div>  		
														<Accordion.Collapse className='acod-body' eventKey={`${i}`}>
															<div className='acod-content'>{faq.answer}</div>
														</Accordion.Collapse>
													</div> 													
                                                ))
                                            }
                                        </Accordion> 	 */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                <Footer/>                
            </>
        )
    
}
export default Faq2;