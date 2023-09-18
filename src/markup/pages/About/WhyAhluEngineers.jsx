import React from 'react';
import ChooseAhluEngineers from "../../../components/About/ChooseAhluEngineers";

function WhyAhluEngineers(props) {
    return (
        <div
            id='whyus'
            className='section-full bg-white content-inner-2'

            // style={{ backgroundImage: "url(" + bg + ")" }}
        >
            <div className='container'>
                <div className='section-head text-black text-center'>
                    <h2 className='title'>Why to choose Ahlu Engineers</h2>
                    <p>
                        We offer a comprehensive range of innovative and high-quality
                        engineering solutions to meet the unique needs of our clients,
                        backed by our commitment to innovation, quality, and customer
                        satisfaction.
                    </p>
                </div>
                <ChooseAhluEngineers />
            </div>
        </div>
    );
}

export default WhyAhluEngineers;