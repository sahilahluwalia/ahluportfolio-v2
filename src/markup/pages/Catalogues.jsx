import React, { useState } from "react";
import { catalogueList } from "../../utils/catalogues";
import SubHeader from "./Components/SubHeader";
import CatalogueModal from "./Components/CatalogueModal";

const Catalogues =  () => {
  const editedCatalogueList = catalogueList.map((item) => {
    return {
      ...item,
      serialName: item.name.split(" ")[1],
      serialTag: item.name.split(" ")[2],
    };
  });
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
    <div className="bg-light">
      <CatalogueModal modal={modal} userDetails={userDetails} setUserDetails={setUserDetails} setModal={setModal} singlePage />
      <SubHeader type="Catalogues" />

      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Download Our Catalogues</h2>
          <p className="lead">
            We have a wide range of products and services. Please download our
            catalogues to know more about our offerings.
          </p>
          <span className="bg-primary"></span>

          <hr
            className="my-4 mx-auto"
            style={{ width: "50px", height: "3px", backgroundColor: "#007bff" }}
          />
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {editedCatalogueList.map((catalogue) => (
            <div key={catalogue.serialName} className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src={catalogue.image}
                  className="card-img-top"
                  alt={catalogue.name}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="text-primary">{catalogue.serialName}</span>{" "}
                    {catalogue.serialTag}
                  </h5>
                  <button
                    className="readMoreButton w-100 p-1.5"
                    onClick={() => {
                      setModal(true);
                      setUserDetails({ ...userDetails, catalogue: catalogue });
                    }}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogues;
