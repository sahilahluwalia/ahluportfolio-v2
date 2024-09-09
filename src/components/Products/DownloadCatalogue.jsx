import React,{useState} from "react";
import CatalogueModal from "../../markup/pages/Components/CatalogueModal";
const DownloadCatalogue = (props:{
    image:string,
    code:string
}) => {
  const { image, code } = props;
  console.log(code);
  const [modal, setModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    companyName: "",
    designation: "",
    catalogue: "",
  });

  return (
    <>
      <CatalogueModal modal={modal} userDetails={userDetails} setUserDetails={setUserDetails} setModal={setModal} />

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
              <button
                  className='bg-black w-100 border-0 text-white d-flex py-3  mb-0 justify-content-center gap-2 align-items-center font-weight-500 rounded-1'
                  onClick={() => {
                    setModal(true);
                    setUserDetails({ ...userDetails, catalogue: code.toUpperCase() });
                  }}
              >
                <div
                  style={{
                    fontSize: "13px",
                  }}
                  className='text'
                >
                  Download Catalogue
                </div>
                <i className='fa fa-download'></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DownloadCatalogue;
