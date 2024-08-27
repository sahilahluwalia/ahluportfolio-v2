import React from 'react';
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

function Layout(props) {
    return (
        <div>
            <Header/>
            <div>hello</div>
            {props.children}
        <Footer/>
        </div>
    );
}

export default Layout;
