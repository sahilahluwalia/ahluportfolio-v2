import React from "react";
import { Link } from "react-router-dom";
const DownloadCatalogue = (props) => {
  const { image, link } = props;

  return (
    <>
      <div className='widget'>
        <div className='download-file'>
          {/* <h4 className='title'>Download Catalog</h4> */}
          {/* <Link to={link} target='_blank'> */}
          <img
            style={{
              marginBottom: "10px",
            }}
            src={image}
            alt='catalog'
          />
          {/* </Link> */}
          <ul>
            <li>
              <Link to={link} target='_blank'>
                <div
                  style={{
                    fontSize: "13px",
                  }}
                  className='text'
                >
                  Download Catlogue
                </div>
                <i className='fa fa-download'></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DownloadCatalogue;
