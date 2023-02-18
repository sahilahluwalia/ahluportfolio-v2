import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

//import Slider from "react-animated-slider";
//import "react-animated-slider/build/horizontal.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Parallax,  Navigation} from 'swiper';
import "../../css/slider-animations.css";
import "swiper/css";
import "../../css/homeslider.css";

SwiperCore.use([Parallax, Autoplay,  Navigation]);

const content = [
    { 
      title: "Vulputate Mollis Ultricies Fermentum Parturient",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Read More",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png"
    },
    {
      title: "Tortor Dapibus Commodo Aenean Quam",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Discover",
      image: "https://i.imgur.com/DCdBXcq.jpg",
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png"
    },
    {
      title: "Phasellus volutpat metus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Buy now",
      image: "https://i.imgur.com/DvmN8Hx.jpg",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png"
    }
  ];
  


class HomeSlider1 extends Component {
	constructor(props) {
		super(props);
		
		this.navigationNextRef = React.createRef(null);
		this.navigationPrevRef = React.createRef(null)
	}
    render() {
        const sliderContent = this.props.data || content
        const {btnText,hideBtn,show2Btn,btn2Text,contentWrapperCls} = this.props
        const contentCls = contentWrapperCls || ""
        const btnCls = this.props.btnCls || ""
        
        
        return (
            <>
				<Swiper className="home-slider2"	
					speed= {1500}
					parallax= {true}
					loop={false}
					autoplay = {{
						delay: 3000,
					}}					
					onSwiper={(swiper) => {
						// Delay execution for the refs to be defined
						setTimeout(() => {
						  // Override prevEl & nextEl now that refs are defined
						  swiper.params.navigation.prevEl = this.navigationPrevRef.current
						  swiper.params.navigation.nextEl = this.navigationNextRef.current

						  // Re-init navigation
						  swiper.navigation.destroy()
						  swiper.navigation.init()
						  swiper.navigation.update()
						})
					}}
					 
					modules={[Autoplay, Navigation]}
				>	

					{sliderContent.map((item, index) => (						
						<SwiperSlide key={index} className="slider-content" style={{ background: `url('${item.image}') no-repeat center center` }}>
							<div className={`inner ${contentCls}`}>
								{item.title && <h1 data-swiper-parallax="-500">{item.title}</h1> }
								{item.description && <p data-swiper-parallax="-1000">{item.description}</p>}
								{ hideBtn ? "" :  show2Btn ? (
									<>
										<button data-swiper-parallax="-1500" className={btnCls}>{btnText}</button>
										<button data-swiper-parallax="-2000" className={btnCls}>{btn2Text}</button>
									</>
									) : (
										<button data-swiper-parallax="-1500" className={btnCls}>{btnText}</button>
									)
								}
							</div>
						</SwiperSlide>	
					))}	
					<div className="swiper-button" style={{zIndex : 1}}>
						<div className="swiper-button-prev previousButton" ref={this.navigationPrevRef}><i className="las la-angle-left"></i></div>
						<div className="swiper-button-next nextButton" ref={this.navigationNextRef}><i className="las la-angle-right"></i></div>
					</div>	
				</Swiper>

            </>
        )
    }
}
export default HomeSlider1;