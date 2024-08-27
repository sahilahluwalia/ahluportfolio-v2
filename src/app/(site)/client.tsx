'use client'
import React from 'react';
import {Accordion} from "react-bootstrap";

export const HomePageAccordion = ({
                                faqContent
                            }:{
                                faqContent: { question: string, answer: string }[]
}) => {
    return (
        <Accordion className='dlab-accordion faq-1 box-sort-in m-b30 faq'>
            {faqContent.map((faq, i) => (
                <div className='panel'>
                    <Accordion.Item eventKey={`${i}`}>
                        <Accordion.Header as='h6'>
                            {faq.question}
                        </Accordion.Header>
                        <Accordion.Body eventKey={`${i}`}>
                            <div>{faq.answer}</div>
                        </Accordion.Body>
                    </Accordion.Item>
                </div>
            ))}
        </Accordion>
  )

}
