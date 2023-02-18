import React, { useState } from "react";
import {Link} from 'react-router-dom';


const getFilterSections = (images)=>{
  const filters = ['all'];
  images.map(()=>(image)=>{
    if(filters.indexOf(image.name) === -1){
      filters.push(image.name);
    }
  });
  return filters;
}

const filterImages = (filterKey,images)=>{
  const list = images.filter(image =>
    filterKey === 'all' ? image : image.name === filterKey
  );

  return list;
}

const Gallery2 = props => {
  const [state, setState] = useState({
    list: props.images,
    filterKey: "all"
  });

  const { list, filterKey } = state;
  
  const filteredList  = filterImages(filterKey,list);
  const filters       = getFilterSections(list);
  const collumnCls = props.col ? props.col :"col-md-6 col-lg-3";

  return (
    <div className="content-block">
      <div className="portfolio" id="portfolio">
            <div className="site-filters clearfix center  m-b40">
                {/* FILTERS */}
                <ul className="filters " data-toggle="buttons">
                    {filters.map(filter =>(
                        <li className="btn" onClick={() => setState({ ...state, filterKey: filter })}>
                            <Link to={"#"} className="site-button btnhover10 outline outline-2 button-sm">
                                <span>{filter}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* FILTERED PORTFOLIO LIST */}
            <div className="portfolio_area">
              <div className="row sp15">
                  {filteredList.map(image => (
                    <div className={collumnCls}>
                        <div className="dlab-media dlab-img-overlay1 dlab-img-effect portbox1 style1">
                            <img src={image.imgUrl} alt=""/>
                            <div className="overlay-bx">
                                <div className="portinner">
                                    <h3 className="port-title">
                                        <Link to="/portfolio-details">{image.title}</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                  ))}
              </div>
            </div>
        
      </div>
    </div>         


  );
};

export default Gallery2;
