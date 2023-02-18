import React, { useState } from "react";
import {Link} from 'react-router-dom';


const getFilterSections = (images)=>{
  const filters = ['all'];
  images.map(() => (image) =>{
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

const Gallery3 = props => {
  const [state, setState] = useState({
    list: props.images,
    filterKey: "all"
  });

  const { list, filterKey } = state;
  
  const filteredList  = filterImages(filterKey,list);
  const filters       = getFilterSections(list);
 // const collumnCls = props.col ? props.col :"col-md-3";

  return (
      <>
        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="site-filters m-b20">
                    <ul className="filters" data-toggle="buttons">
                        {filters.map(filter=>(
                            <li data-filter="" className="btn">
                                <Link 
                                 onClick={() => setState({ ...state, filterKey: filter })}
                                className="site-button btnhover20 outline outline-2 button-sm">
                                    <span>{filter}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        
        <ul id="masonry" className="dlab-gallery-listing text-center gallery-grid-4">
          <div className="row">
            {filteredList.map(image=>(
              <div className="col-lg-6 col-md-6 col-sm-6">
              
                <li className="card-container  beer-keg brewing wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                    <div className="dlab-media dlab-img-overlay1 dlab-img-effect portbox1 style1 m-b30 radius-sm">
                        <img src={image.imgUrl} alt=""/>
                        <div className="overlay-bx">
                            <div className="portinner">
                                <h3 className="port-title"><Link to="/portfolio-details">{image.title}</Link></h3>
                            </div>
                        </div>
                    </div>
                </li>
              </div>
            ))}
          </div>
        </ul>
      </>
    );
};

export default Gallery3;
