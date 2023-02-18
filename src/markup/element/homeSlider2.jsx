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
      image: require("../../images/main-slider/slide11.jpg"),
      subTitle: "Luan Gjokaj",
      subTitle2: "https://i.imgur.com/JSW6mEk.png"
    },
    { 
        title: "Vulputate Mollis Ultricies Fermentum Parturient",
        description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
        image: require("../../images/main-slider/slide11.jpg"),
        subTitle: "Luan Gjokaj",
        subTitle2: "https://i.imgur.com/JSW6mEk.png"
    },

  ];
  

class HomeSlider2 extends Component {
	
	constructor(props) {
		super(props);
		
		this.navigationNextRef = React.createRef(null);
		this.navigationPrevRef = React.createRef(null)
	}
	
    render() {
        const sliderContent = this.props.data || content
        const {btnText} = this.props
        const contentCls = this.props.contentWrapperCls || ""
        const subTitleCls = this.props.subTitleCls || ""
        //const btnCls = this.props.btnCls || ""
		
	    return (
            <>          
			
				<Swiper className="home-swiper-10 "	
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
								<div>

									{item.subTitle && 
										<p data-swiper-parallax="-1000" className={`subTitle1 ${subTitleCls}`}>{item.subTitle}</p> 
									}

									<h1 data-swiper-parallax="-500">{item.title}</h1>
									<p data-swiper-parallax="-1000">{item.description}</p>

									{item.subTitle2 && 
										<p data-swiper-parallax="-1000">{item.subTitle2}</p> 
									}
									<button data-swiper-parallax="-1500"  className="text-primary">{btnText}</button>
								</div>
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
export default HomeSlider2;