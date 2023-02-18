import React, { useState } from "react";
import {Link} from 'react-router-dom';




const getFilterSections = (images) => {
  const filters = [];
  images.map(()=>(image) => {
    const index = filters.findIndex(filter => filter.name === image.name);
    if(index === -1){
      filters.push({name:image.name,icon:image.icon});
    }
  });
  return filters;
}

const filterImages = (filterKey,images) => {
  const list = images.filter(image =>
    filterKey === 'all' ? image : image.name === filterKey
  );

  return list;
}

const Gallery3 = props => {
  const [state, setState] = useState({
    list: props.images,
    filterKey: "Construction"
  });

  const { list, filterKey } = state;
  
  const filteredList  = filterImages(filterKey,list);
  const filters       = getFilterSections(list);
  const collumnCls = props.col ? props.col :"card-container col-lg-4 col-md-6 col-sm-6";

  return (
    <div className="content-block">
      <div className="portfolio " id="portfolio">
            <div className="site-filters m-b20 filters2">
                {/* FILTERS */}
                <ul className="filters " data-toggle="buttons">
                    {filters.map(filter =>(
                        <li className="btn" onClick={() => setState({ ...state, filterKey: filter.name })}>
                            <Link to={"#"} className="">
                              <i class={filter.icon}></i>
                              <span>{filter.name}</span>
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
                        <div className="dlab-media dlab-img-overlay1 dlab-img-effect portbox3">
                            <img src={image.imgUrl} alt=""/>
                            <div className="overlay-bx">
                                <div className="portinner">
                                    <div className="port-up">
                                        <span className="text-primary">{image.title}</span>
                                        <h3 className="port-title"><Link to="/portfolio-details">{image.title2}</Link></h3>
                                    </div>
                                    <div className="port-down">
                                        <Link to="/portfolio-details" className="btn-link">View Detail <i className="la la-arrow-right"></i></Link>
                                    </div>
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

export default Gallery3;
