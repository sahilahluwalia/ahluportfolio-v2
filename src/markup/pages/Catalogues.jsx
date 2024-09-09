import React, { useState } from "react";
import { catalogueList } from "../../utils/catalogues";
import SubHeader from "./Components/SubHeader";

console.log(process.env.REACT_APP_API_URL)
const Catalogues =  () => {
  const editedCatalogueList = catalogueList.map((item) => {
    return {
      ...item,
      serialName: item.name.split(" ")[1],
      serialTag: item.name.split(" ")[2],
    };
  });
console.log(editedCatalogueList)
  const [modal, setModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    companyName: "",
    designation: "",
    catalogue: "",
  });

  const handleChange = (e) => {
    setUserDetails({...userDetails, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails);
  // check if number is valid
    if(userDetails.mobileNumber.length !== 10) {
        alert("Please enter a valid mobile number.");
        return;
    }
    const payload = {
      email: userDetails.email,
      catalogue: userDetails.catalogue.serialName,
      name: userDetails.name,
      mobileNumber: userDetails.mobileNumber,
      companyName: userDetails.companyName,
      designation: userDetails.designation,
    }
    const result = await fetch(`${process.env.REACT_APP_API_URL}/api/catalogue`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    if(result.status !== 200) {
        alert("Error in sending email, please try again later.");
    }
    else {
      const data = await result.json();
      // check status code
      console.log(data);
      alert("Thank you! You will receive the catalogue via email.");
      setModal(false);
      setUserDetails({
        name: "",
        mobileNumber: "",
        companyName: "",
        post: "",
        email: "",
        catalogue: "",
      });
    }

};

  return (
    <div className="bg-light">
      {modal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-2">
              <div className="modal-header p-4 bg-primary">
                <h5 className="modal-title">
                  Download {userDetails.catalogue.name} Catalogue
                </h5>
                <button
                  type="button"
                  className="btn-close border-0 text-white"
                  onClick={() => setModal(false)}
                ></button>
              </div>
              <div className="modal-body ">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name*"
                      value={userDetails.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      name="mobileNumber"
                      placeholder="Mobile Number*"
                      value={userDetails.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="companyName"
                      placeholder="Company Name"
                      value={userDetails.companyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="post"
                      placeholder="Post"
                      value={userDetails.designation}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email*"
                      value={userDetails.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/*  add note that downlaod link will be sent to the email */}
                  <div className="form-text my-2">
                    Note: A download link will be sent to email.
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="bg-primary py-2 border-0">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
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
