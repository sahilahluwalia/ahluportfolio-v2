import React from 'react';
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {WhatsAppButton} from "./client";

function Layout(props) {
    return (
        <div>
            <Header/>
            <div>hello</div>
            {props.children}
        <Footer/>
            <WhatsAppButton/>

        </div>
    );
}

export default Layout;
