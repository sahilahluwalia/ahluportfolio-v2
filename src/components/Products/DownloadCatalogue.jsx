import React from "react";

const DownloadCatalogue = (props) => {
  const { image, link } = props;

  return (
    <>
      <div className="widget">
        <div className="download-file">
          <h4 className="title">Download Catlogue </h4>
          <img src={image} alt="catalog" />
        </div>
      </div>
    </>
  );
};

export default DownloadCatalogue;
