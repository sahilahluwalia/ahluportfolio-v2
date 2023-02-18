import React, { useState } from "react";
import {Link} from 'react-router-dom'


const images = [
  {
    id: 1,
    name: "agriculture",
    agriculture: true,
    title:"Mining Plant Set Up",
    subTitle:"System",
    imgUrl: require("../../images/portfolio/image_1.jpg")
  },
  {
    id: 2,
    name: "agriculture",
    agriculture: true,
    title:"Mining Plant Set Up",
    subTitle:"Mining / Plants",
    imgUrl: require("../../images/portfolio/image_2.jpg")
  },
  {
    id: 3,
    name: "agriculture",
    agriculture: true,
    title:"sanfran cisco bridge",
    subTitle:"Engineering",
    imgUrl: require("../../images/portfolio/image_3.jpg")
  },
  {
    id: 4,
    name: "chemical",
    chemical: true,
    title:"Capturing Manila",
    subTitle:"Energy",
    imgUrl: require("../../images/portfolio/image_4.jpg")
  },
  {
    id: 5,
    name: "chemical",
    chemical: true,
    title:"berlin central bank",
    subTitle:"industry",
    imgUrl: require("../../images/portfolio/image_5.jpg")
  },
  {
    id: 6,
    name: "chemical",
    chemical: true,
    title:"Mining Plant Set Up",
    subTitle:"Bank / Constructions",
    imgUrl: require("../../images/portfolio/image_6.jpg")
  },
  {
    id: 7,
    name: "mechanical",
    mechanical: true,
    title:"Mining Plant Set Up",
    subTitle:"Branding and Identity",
    imgUrl: require("../../images/portfolio/image_7.jpg")
  },
  {
    id: 8,
    name: "mechanical",
    mechanical: true,
    title:"hamburg wind energy",
    subTitle:"industry",
    imgUrl:require("../../images/portfolio/image_8.jpg")
  },
  {
    id: 9,
    name: "power energy",
    powerenergy: true,
    title:"berlin central bank",
    subTitle:"industry",
    imgUrl: require("../../images/portfolio/image_1.jpg")
  },
  {
    id: 10,
    name: "power energy",
    powerenergy: true,
    title:"sanfran cisco bridge",
    subTitle:"Bank / Constructions",
    imgUrl: require("../../images/portfolio/image_9.jpg")
  },
  {
    id: 9,
    name: "plants",
    plants: true,
    title:"Muchen Railway Station",
    subTitle:"Engineering",
    imgUrl: require("../../images/portfolio/image_10.jpg")
  },

];


const getFilterSections = (images)=>{
  const filters = ['all']
  images.map(()=>(image)=>{
    if(filters.indexOf(image.name) === -1){
      filters.push(image.name)
    }
  })
  return filters
}

const filterImages = (filterKey,images)=>{
  const list = images.filter(image =>
    filterKey === 'all' ? image : image.name === filterKey
  );

  return list
}

const Portfolio = props => {
  const [state, setState] = useState({
    list: images,
    filterKey: "all"
  });

  const { list, filterKey } = state;
  
  const filteredList  = filterImages(filterKey,list)
  const filters       = getFilterSections(images)
  const collumnCls = props.col ? props.col :"col-md-3";

  return (
    <div className="content-block">
      <div className="section-full content-inner-2 portfolio text-uppercase bg-gray" id="portfolio">
        <div className="container"> 
          <div className="site-filters clearfix center  m-b40">
            {/* FILTERS */}
            <ul className="filters" data-toggle="buttons">
              {filters.map(filter =>(
                <li className="btn" onClick={() => setState({ ...state, filterKey: filter })}>
                  <div className="site-button-secondry button-sm radius-xl">
                    <span>{filter}</span>
                  </div>
                </li >
              ))}
            </ul>
          </div> 
           
            {/* FILTERED PORTFOLIO LIST */}
            <div className="portfolio_area">
              <div className="row portfolio-grid">
                  {filteredList.map(image => (
                    <div className={collumnCls}>
                      <div className="dlab-box dlab-gallery-box">
                        <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                            <Link to="/portfolio-details"> <img src={image.imgUrl}  alt=""/> </Link>
                            <div className="overlay-bx">
                                <div className="overlay-icon"> 
                                    <div className="text-white">
                                        <Link to="/portfolio-details"><i className="fa fa-link icon-bx-xs"></i></Link> 
                                        <span className="check-km" title="Factory Managment">		
                                            <i className="fa fa-picture-o icon-bx-xs"></i> 
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dez-info p-a30 bg-white">
                            <p className="dez-title m-t0"><Link to="/portfolio-details">{image.title}</Link></p>
                            <p><small>{image.subTitle}</small></p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </div>         


  );
};

export default Portfolio;
