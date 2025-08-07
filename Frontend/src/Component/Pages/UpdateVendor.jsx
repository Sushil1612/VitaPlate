
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import { IP_ADDRS } from "../../Service/Constant";

function UpdateVendor() {
    const [vendor, setVendor] = useState({
        firstName: "",
        email: "",
        lastName: "",
        id: "",
        jwt: ""
    });

    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        let ven = JSON.parse(sessionStorage.getItem("vendor"));
        if (ven == null) {
            swal("Not Authorized", "", "error");
        } else {
            axios.get(`${IP_ADDRS}/vendors/${ven.id}`, { headers: { "Authorization": `Bearer ${ven.jwt}` } })
                .then((res) => {
                    console.log(res.data);
                    setLoggedIn(true);
                    setVendor({
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        id: ven.id,
                        email: res.data.email,
                        jwt: ven.jwt
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
                    <div className="jumbotron" style={{ marginLeft: 20 }}>
                         <img src={`${IP_ADDRS}/vendors/${vendor.id}/profileImage`} style={{ float: "right", marginRight: 18 }} height={165} width={165} />
                         <h3 style={{ marginTop: 10 }}>Hello ,
                         </h3>
                         <h1 style={{ marginLeft: 30 }}>
                             {vendor.firstName}&nbsp;{vendor.lastName}
                         </h1>

                         <h5 style={{ marginLeft: 30 }}>
                             {vendor.email}
                         </h5>
                         <br />
                     </div>
                     <hr className="my-4" />
                    <div className="container mb-5">
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/updateBasicDetails")}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6831/6831354.png"
                                        className="card-img-top"
                                        alt="Update Basic Details"
                                        style={{ height: '200px', width:'100%' }}
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
                                        src="https://cdn-icons-png.flaticon.com/512/1254/1254232.png"
                                        className="card-img-top"
                                        alt="Update Address"
                                        style={{ height: '200px', width:'100%' }}
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
                                        style={{ height: '200px', width:'100%'}}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Update Profile Picture</h5>
                                        <p className="card-text">Upload new Profile Picture</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/changePassword")}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png"
                                        className="card-img-top"
                                        alt="Change Password"
                                        style={{ height: '200px', width:'100%' }}
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
                <div className="text-center">
                    <h1>Please Log in to Access this page</h1>
                </div>
            )}
        </>
    );
}

export default UpdateVendor;
