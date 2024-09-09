import React,{useState} from 'react';

function CatalogueModal(props:{
    modal:boolean,
    setModal:Function,
    userDetails:{
        name:string,
        email:string,
        mobileNumber:number,
        companyName:string,
        designation:string,
        catalogue:string
    },
    setUserDetails:Function,
    singlePage?:boolean
}) {
    const {modal, setModal, userDetails, setUserDetails,singlePage} = props;
    console.log(userDetails)
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
            catalogue: singlePage ? userDetails.catalogue.serialName : userDetails.catalogue,
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
        }

    return (
        <>
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
                                Download {singlePage ? userDetails.catalogue.name : userDetails.catalogue} Catalogue
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
        </>
    );
}

export default CatalogueModal;
