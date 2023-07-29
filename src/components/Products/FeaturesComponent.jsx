import React from 'react';
import parse from "html-react-parser";

function FeaturesComponent({featureList}) {
    return (
        <div className='px-3'>
            {featureList.map((item, index) => {
                return (
                    <div
                        key={index}
                    >
                        <h4>{index+1}. {item.title}</h4>
                        <ol type='a'>
                            {item.list.map((item, index) => {
                                    return (
                                        <li
                                            style={{
                                                textAlign: "left",
                                            }}
                                            key={index}
                                        >
                                            {parse(item)}
                                        </li>
                                    );
                                }
                            )}
                        </ol>
                    </div>
                );
            })}
        </div>
    );
}

export default FeaturesComponent;