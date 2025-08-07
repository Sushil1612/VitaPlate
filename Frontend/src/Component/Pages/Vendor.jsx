
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import { IP_ADDRS } from "../../Service/Constant";

function Vendor() {
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
            axios.get(`${IP_ADDRS}/vendors/${ven.id}`)
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
                    swal("Something went Wrong", "", "error");
                });
        }
    }, []);

    return (
        <>
            {loggedIn ? (
                <>
                    {/* <div className="jumbotron text-center">
                        <img
                            src={`${IP_ADDRS}/vendors/${vendor.id}/profileImage`}
                            className="rounded-circle float-right m-3"
                            height={165}
                            width={165}
                            alt="Vendor Profile"
                        />
                        <h3 className="mt-3">Hello,</h3>
                        <h1>{vendor.firstName} {vendor.lastName}</h1>
                        <h5>{vendor.email}</h5>
                    </div>
                    <hr className="my-4" /> */}
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
                                <div className="card h-100" onClick={() => navigate("/updateVendor")}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5278/5278646.png"
                                        className="card-img-top"
                                        alt="Update Profile"
                                        style={{ height: '200px', width:'100%' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Update Profile</h5>
                                        <p className="card-text">Update your account details.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/addSubcriptionPlan")}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3476/3476376.png"
                                        className="card-img-top"
                                        alt="Add Subscription Plan"
                                        style={{ height: '200px', width:'100%' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Add Subscription Plan</h5>
                                        <p className="card-text">Add new Subscription Plan Details.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/vendorAllPlans")}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/1260/1260204.png"
                                        className="card-img-top"
                                        alt="Display Subscription Plans"
                                        style={{ height: '200px', width:'100%' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Display Subscription Plans</h5>
                                        <p className="card-text">Show all Added Subscription Plans.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/enabledPlans")}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/256/11282/11282229.png"
                                        className="card-img-top"
                                        alt="Enabled Subscription Plans"
                                        style={{ height: '200px', width:'100%' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Enabled Subscription Plan</h5>
                                        <p className="card-text">Show Enabled Subscription Plans.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/disabledPlans")}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/6024/6024155.png"
                                        className="card-img-top"
                                        alt="Disabled Subscription Plans"
                                        style={{ height: '200px', width:'100%' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Disabled Subscription Plans</h5>
                                        <p className="card-text">Show Disabled Subscription Plans.</p>
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

export default Vendor;
