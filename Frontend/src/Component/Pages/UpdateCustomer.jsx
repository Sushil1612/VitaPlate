
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import { IP_ADDRS } from "../../Service/Constant";
import 'bootstrap/dist/css/bootstrap.min.css';

function UpdateCustomer() {
    const [customer, setCustomer] = useState({
        firstName: "",
        email: "",
        lastName: "",
        id: "",
        jwt: ""
    });

    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let cust = JSON.parse(sessionStorage.getItem("customer"));
        if (cust == null) {
            swal("Not Authorized", "", "error");
        } else {
            axios.get(`${IP_ADDRS}/customers/${cust.id}`, { headers: { "Authorization": `Bearer ${cust.jwt}` } })
                .then((res) => {
                    console.log(res.data);
                    setLoggedIn(true);
                    setCustomer({
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        id: cust.id,
                        email: res.data.email,
                        jwt: cust.jwt
                    });
                })
                .catch((err) => {
                    console.log(err);
                    swal("Something went Wrong", `${err}`, "error");
                });
        }
    }, []);

    return (
        <>
            {loggedIn ? (
                <>
                    <div className="jumbotron text-center" style={{ margin: 20 }}>
                        <img
                            src={`${IP_ADDRS}/customers/${customer.id}/profileImage`}
                            style={{ borderRadius: '50%', marginBottom: 18 }}
                            height={165}
                            width={165}
                            alt="Profile"
                        />
                        <h1 className="display-4">Hello, {customer.firstName} {customer.lastName}</h1>
                        <p className="lead">{customer.email}</p>
                    </div>
                    <hr className="my-4" />
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/updateBasicDetails")}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/9819/9819640.png"
                                        className="card-img-top"
                                        alt="Update Basic Details"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Update Basic Details</h5>
                                        <p className="card-text">Firstname, Lastname, Email, Mobile</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/editAddress")}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/4413/4413549.png"
                                        className="card-img-top"
                                        alt="Update Address"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Update Address</h5>
                                        <p className="card-text">Edit address details here</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/uploadProfilePicture")}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/256/7057/7057878.png"
                                        className="card-img-top"
                                        alt="Update Profile Picture"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Update Profile Picture</h5>
                                        <p className="card-text">Upload new profile picture</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/changePassword")}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6358/6358065.png"
                                        className="card-img-top"
                                        alt="Change Password"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Change Password</h5>
                                        <p className="card-text">Change your password</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div style={{ textAlign: "center" }}>
                    <h1>Please Log in to Access this page</h1>
                </div>
            )}
        </>
    );
}

export default UpdateCustomer;
