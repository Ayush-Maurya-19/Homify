import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const ManageRentSpaces = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [noProductsAdded, setNoProductsAdded] = useState(false);

  const fetchProductData = async () => {
    const res = await fetch("http://localhost:5000/product/getall");
    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setProductData(data);
      if (data.every((Property) => Property.user_id !== JSON.parse(sessionStorage.user)._id)) {
        setNoProductsAdded(true);
      } else {
        setNoProductsAdded(false);
      }
    }
  };

  const handleDeleteProduct = async (productId, productImage) => {
    // Display a confirmation dialog
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      try {
        const res = await fetch(
          `http://localhost:5000/product/delete/${productId}`,
          {
            method: "DELETE",
          }
        );

        if (res.status === 200) {
          // Delete was successful
          // You may want to show a success message or update the product list
          console.log("Product deleted successfully.");
          toast.success("Product deleted successfully.");
          // Refresh the product list after deletion
          fetchProductData();
        } else {
          // Handle errors, show an error message, or take appropriate action
          console.log("Error deleting product.");
          toast.error("Error deleting product.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        toast.error("An error occurred.");
      }
      if (productImage) {
        try {
          const res = await fetch(
            `http://localhost:5000/util/deletefile/${productImage}`,
            {
              method: "DELETE",
            }
          );

          if (res.status === 200) {
            // Delete was successful
            // You may want to show a success message or update the product list
            console.log("Product's Image deleted successfully.");
            toast.success("Product's Image deleted successfully.");
            // Refresh the product list after deletion
            fetchProductData();
          } else {
            // Handle errors, show an error message, or take appropriate action
            console.log("Error deleting product's Image.");
            toast.error("Error deleting product's Image.");
          }
        } catch (error) {
          console.error("An error occurred in image deletion:", error);
          toast.error("An error occurred in image deletion.");
        }
      }
      else{
        console.log("No image found");
        toast.error("No image found");
      }
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
     <div className="container mx-auto row">
      <h1 className="text-center">Manage Your Property</h1>
      <div className="row">
        {productData.map((Property) => {
          if (Property.user_id === JSON.parse(sessionStorage.user)._id) 
          {
            return (
              <>
                <div className="col-md-3 py-2">
                  <div className="card shadow m-2">
                    {Property.image ? (
                      <img
                        className="card img-resize img-fluid"
                        src={"http://localhost:5000/" + Property.image}
                        alt=""
                      />
                    ) : (
                      <img
                        className="card img-resize img-fluid"
                        src={
                          "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
                        }
                        alt=""
                      />
                    )}

                    <div className="card-body shadow">
                    <h4>{Property.name}</h4>
                      <h6 className="text-success">{Property.category}</h6>
                      <h6>{Property.location}, {Property.city}</h6>
                      {Property.price ? (
                        <h5>&#8377; {Property.price} </h5>
                      ) : (
                        <h6 className="text-danger">Price Not Specified Yet</h6>
                      )}
                      <div className="row">
                        <div className="col-md-6 my-2">
                          <Link to={"/editallproducts/" + Property._id}>
                            <button className="btn btn-secondary shadow text-center 2 w-100 mx-auto">
                              Edit
                            </button>
                          </Link>
                        </div>
                        <div className="col-md-6 my-2">
                          <button
                            onClick={() => handleDeleteProduct(Property._id, Property.image)}
                            className="btn btn-danger shadow text-center w-100 mx-auto"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          } 

          else {
            return null;
          }

        })}
        {noProductsAdded && (
        <div className="container">
          <h2>List Your Property Here</h2>
          <hr />
          <div className="card shadow">
            <div className="card-body">
              <p>You have not listed any property yet.</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/addrentspace")}
              >
                List Property
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};


export default ManageRentSpaces