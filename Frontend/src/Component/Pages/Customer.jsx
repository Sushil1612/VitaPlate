import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { IP_ADDRS } from "../../Service/Constant";
import 'bootstrap/dist/css/bootstrap.min.css';

function Customer() {
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
            axios.get(`${IP_ADDRS}/customers/${cust.id}`)
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
                    swal("Something went Wrong", "", "error");
                });
        }
    }, []);

    return (
        <>
            {loggedIn ? (
                <>
                    <div className="jumbotron" style={{ margin: 20, textAlign: 'center' }}>
                        <img
                            src={`${IP_ADDRS}/customers/${customer.id}/profileImage`}
                            style={{ margin: "0 auto 18px", borderRadius: '50%' }}
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
                                <div className="card h-100" onClick={() => navigate("/updateCustomer")}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/5278/5278646.png"
                                        className="card-img-top"
                                        alt="Update Profile"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Update Profile</h5>
                                        <p className="card-text">Update your account details.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/viewCustOrder")}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/4990/4990645.png"
                                        className="card-img-top"
                                        alt="View Orders"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">View Orders</h5>
                                        <p className="card-text">Display your all orders.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/customerCurrentPlan")}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3974/3974366.png"
                                        className="card-img-top"
                                        alt="Current Subscription"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Current Subscription</h5>
                                        <p className="card-text">Display details about current plan.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/vendors")}>
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/433/433087.png"
                                        className="card-img-top"
                                        alt="Vendors"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Vendors</h5>
                                        <p className="card-text">Display details about vendors.</p>
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

export default Customer;
