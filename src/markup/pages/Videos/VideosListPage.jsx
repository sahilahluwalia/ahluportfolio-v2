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
const shortsList=[{
    link:"K-0EZSRyeqE"
},{
    link:"9wFA1WkOrFE"
}]
const randomVideos = videoList.sort(() => Math.random() - Math.random()).slice(0, videoList.length);
const randomShorts = shortsList.sort(() => Math.random() - Math.random()).slice(0, shortsList.length);
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
                        <div
                        className="row justify-content-center"
                        >
                    {
                        randomShorts.map((video, index) => (
                            <div key={index} className="col-md-6 mb-4">
                                <div className="player-wrapper" style={{ paddingTop: '177.78%', position: 'relative' }}>
                                    <ReactPlayer
                                        className="react-player"
                                        width="100%"
                                        height="100%"
                                        style={{ position: 'absolute', top: 0, left: 0 }}
                                        controls
                                        muted
                                        url={`https://www.youtube.com/shorts/${video.link}`}
                                    />
                                </div>
                            </div>
                        ))
                    }
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
