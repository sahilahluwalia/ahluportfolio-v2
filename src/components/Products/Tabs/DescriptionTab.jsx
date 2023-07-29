import React from 'react';

function DescriptionTab({data}) {

        return (
            <>
                <h4>Description </h4>
                <div className='px-3'>
                    <ol type='1'>
                        {data.map((item, index) => {
                            return (
                                <li style={{ textAlign: "left" }} key={index}>
                                    {item}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </>
        );
    };



export default DescriptionTab;


