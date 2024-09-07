import React from 'react';
import SubHeader from '../Components/SubHeader.jsx';
import ProductList from "../../../components/Products/ProductList";
import {RightSection} from "../../../components/Products/RightSection";
import LeftSection from "../../../components/Products/LeftSection";
import ProductItemBase from "../../../components/Products/ProductItemBase";
import ReactPlayer from "react-player/lazy";


const videoList=[{
    link:"HCHshvl9gUs"
},{
    link:"vHyhbBqcg2E"
},{
    link:"QPgI53pfguc",

},{
    link:"ymIeMa8neWE"
}]

const randomVideos = videoList.sort(() => Math.random() - Math.random()).slice(0, videoList.length);
const  VideosListPage=()=>{
    return (
      <>
        <SubHeader type={"Videos"} />
        <ProductItemBase>
          <LeftSection>
            <div className="container">
              <div className="row">
                {randomVideos.map((video, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="player-wrapper">
                      <ReactPlayer
                        className="react-player"
                        // height="auto"
                        width="100%"
                        controls
                        muted
                        url={`https://www.youtube.com/watch?v=${video.link}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </LeftSection>
          <RightSection>
            <div className="widget sidebar-widget ext-sidebar-menu widget_nav_menu">
              <ProductList />
            </div>
          </RightSection>
        </ProductItemBase>
      </>
    );
}

export default VideosListPage;
