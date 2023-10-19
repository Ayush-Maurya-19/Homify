import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SpaceDetails = () => {
    const { id } = useParams();
    const [propertyData, setPropertyData] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/product/getbyid/${id}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setPropertyData(data);
                    console.log(data.name);
                } else {
                    navigate("/404");
                }
            } catch (error) {
                console.error("Error fetching product data:", error);
                navigate("/404");
            }
        };

        fetchData();
    }, [id, navigate]);

    if (!propertyData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container vh-75 mt-5" >
            <div className="row">
                {/* Name of the property */}

                <div className="col-md-3">
                    <img
                        className="card img-fluid shadow"
                        src={"http://localhost:5000/" + propertyData.image}
                        alt=""
                    />
                </div>

                <div className="col-md-8">

                    <div>
                    <h6 className="text-success">{propertyData.category}</h6>

                        <h2>{propertyData.name}</h2>
                        <h5>{propertyData.location}, {propertyData.city}</h5>
                    </div>
                    <hr />
                    <p>This is an amazing flat come with the facilities like AC, Great view, free parking and lot more.
                        Best place to stay in {propertyData.city} at the most affordable price.
                    </p>
                    
                    <h5>&#8377; {propertyData.price}</h5>
                    <br/>
                    
                    {sessionStorage.user &&
                        propertyData.user_id === JSON.parse(sessionStorage.user)._id ? (
                        <button
                            className="btn btn-warning"
                            onClick={() => navigate("/editallproducts/" + propertyData._id)}
                        >
                            Edit Product
                        </button>
                    ) : (
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate("/checkout/" + propertyData._id)}
                        >
                            Book Now
                        </button>
                    )}
                </div>
            </div>

            <div className="mx-auto text-center">
                <div className="row mt-5 container mx-auto">
                    <div className="col-lg-2 m-0 p-0">
                        <img className="w-25 mx-auto " src="../Assets/mattress.png" alt="Service" />
                        <h6>Room Service</h6>
                    </div>
                    <div className="col-lg-2 m-0 p-0">
                        <img className="w-25 mx-auto" src="../Assets/free-wifi.png" alt="free-wifi" />
                        <h6>Free Wifi</h6>
                    </div>
                    <div className="col-lg-2 m-0 p-0">
                        <img className="w-25 mx-auto" src="../Assets/air-conditioner.png" alt="free-wifi" />
                        <h6>Air conditioning</h6>
                    </div>
                    <div className="col-lg-2 m-0 p-0">
                        <img className="w-25 mx-auto" src="../Assets/information-desk.png" alt="information-desk" />
                        <h6>24-hours</h6>
                        <h6>front desk</h6>
                    </div>
                    <div className="col-lg-2 m-0 p-0">
                        <img className="w-25 mx-auto" src="../Assets/luggage.png" alt="Service" />
                        <h6>Luggage Security</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpaceDetails