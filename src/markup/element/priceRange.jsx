import React, { Component } from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

class PriceRange extends Component {
    constructor(props){
        super(props)
        this.state={
            price:{
                min:0,
                max:0
            }
        }
    }

    onUpdate = (render, handle, value, un, percent) => {
        //console.log(value)
        this.setState({
            price:{
                min:value[0].toFixed(),
                max:value[1].toFixed()
            }
        })
    };
    render(){
        const {price} = this.state
        return ( 
            <div className="price">
                <input type="text" id="amount-2" className="amount" readonly="" value={`$${price.min} - $${price.max}`} />
                <Nouislider 
                range={{ min: 0, max: 100 }} 
                start={[20, 80]} 
                onUpdate={this.onUpdate}
                connect 
                />
            </div>
        )
    }
}
 
export default PriceRange;