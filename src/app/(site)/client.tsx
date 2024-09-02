'use client'
import React from 'react';
import {Accordion} from "react-bootstrap";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import onlyAhluLogo from "../../asserts/onlyAhluLogo.png";
// import { WhatsAppWidget } from 'react-whatsapp-widget';
import "react-whatsapp-chat-widget/index.css";
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

export const WhatsAppButton = () => {
    return (
           <WhatsAppWidget
               phoneNo='+918295150210'
               position='left'
               iconSize='50'
               iconColor='white'
               iconBgColor='#4dc247'
               headerIcon={onlyAhluLogo}
               // headerIconColor='pink'
               headerTxtColor='white'
               headerBgColor='#0a5f54'
               headerTitle='Ahlu Engineers'
               headerCaption='Online'
               bodyBgColor='#e5ddd5'
               chatPersonName='Ahlu Engineers Support'
               chatMessage={
                   <>
                       <div>
                           Hi there 👋
                           <br /> How can I help you?
                       </div>
                   </>
               }
               footerBgColor='white'
               btnBgColor='#4dc247'
               btnTxtColor='white'
           />
   )
}
