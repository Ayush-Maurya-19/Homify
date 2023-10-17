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
                  process.env.REACT_APP_BACKEND_URL + `/spacedetails/getbyid/${id}`
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
   <div className="container vh-100 p-0 mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        className="card img-fluid shadow"
                        src={"http://localhost:5000/" + propertyData.image}
                        alt=""
                    />
                </div>
                <div className="col-md-8">
                    <div className="p-5">
                        <h1>{propertyData.name}</h1>
                        <h5 className="text-success">
                            MRP: {propertyData.price}
                        </h5>
                        <hr />
                        
                        <p>category: {propertyData.category}</p>
                        
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
                                className="btn btn-success"
                                onClick={() => navigate("/checkout/" + propertyData._id)}
                            >
                                Buy Now
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpaceDetails