import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditAllProducts = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [selFile, setSelFile] = useState();

  const [productData, setProductData] = useState(null);

  const uploadFile = async (e) => {
    if (!e.target.files || e.target.files === "") return;

    const file = e.target.files[0];
    console.log(file.name);
    setSelFile(file.name);

    const fd = new FormData();
    fd.append("myfile", file);

    const res = await fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    });

    console.log("Status of upload: " + res.status);
  };

  const fetchProductData = async () => {
    const res = await fetch(`http://localhost:5000/product/getbyid/${id}`);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setProductData(data);
    }
  };

  useEffect(() => {
    fetchProductData();
    // eslint-disable-next-line
  }, []);

  const submitForm = async (values, { setSubmitting }) => {
    values.image = selFile;
    console.log(values);
    const res = await fetch(`http://localhost:5000/product/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Status of update: " + res.status);

    if (res.status === 200) {
      toast.success("Product Updated Successfully");
      navigate("/managerentspaces");
    } else {
      toast.error("Something went wrong");
    }
    setSubmitting(false);
  };

  return (
    <div>
      <div className="py-4 my-3 container-fluid">
        <div className="col-md-4 mx-auto card shadow">
          <div className="card-body">
            {productData !== null ? (
              <Formik initialValues={productData} onSubmit={submitForm}>
                {(productForm) => (
                  <form className="" onSubmit={productForm.handleSubmit}>
                    <h3 className="text-center">Edit Property Details</h3>
                    <hr />
                    <label>Name</label>
                    <span
                      style={{
                        fontSize: "0.8em",
                        color: "red",
                        marginLeft: 20,
                      }}
                    >
                      {productForm.touched.name && productForm.errors.name}
                    </span>
                    <input
                      className="form-control mb-3"
                      type="text"
                      name="name"
                      onChange={productForm.handleChange}
                      value={productForm.values.name}
                    />

                    <label>Type of Property</label>
                    <span
                      style={{
                        fontSize: "0.8em",
                        color: "red",
                        marginLeft: 20,
                      }}
                    >
                      {productForm.touched.category && productForm.errors.category}
                    </span>
                    <select
                      className="form-control mb-3"
                      name="category"
                      onChange={productForm.handleChange}
                      value={productForm.values.category}
                    >
                      <option value="">Select</option>
                      <option value="Hostel">Hostel</option>
                      <option value="Flat">Flat</option>
                      <option value="PG">PG</option>
                      <option value="Shared Apartments">Shared Apartments</option>
                    </select>

                    <label>Location</label>
                    <span
                      style={{
                        fontSize: "0.8em",
                        color: "red",
                        marginLeft: 20,
                      }}
                    >
                      {productForm.touched.description &&
                        productForm.errors.description}
                    </span>
                    <input
                      className="form-control mb-3"
                      type="text"
                      name="location"
                      onChange={productForm.handleChange}
                      value={productForm.values.location} />

                    <label>City</label>
                    <span
                      style={{
                        fontSize: "0.8em",
                        color: "red",
                        marginLeft: 20,
                      }}
                    >
                      {productForm.touched.city && productForm.errors.city}
                    </span>
                    <select
                      className="form-control mb-3"
                      name="city"
                      onChange={productForm.handleChange}
                      value={productForm.values.city}
                    >
                      <option value="">Select</option>
                      <option value="Lucknow">Lucknow</option>
                      <option value="Noida">Noida</option>
                      <option value="Banglore">Banglore</option>
                      <option value="Delhi">Delhi</option>
                    </select>

                    <label>Price</label>
                    <input
                      className="form-control mb-3"
                      type="number"
                      name="price"
                      onChange={productForm.handleChange}
                      value={productForm.values.price}
                    />

                    <label>Upload Furniture Picture</label>
                    <input
                      className="form-control"
                      name="image"
                      type="file"
                      onChange={uploadFile}
                    />
                    <button
                      disabled={productForm.isSubmitting}
                      type="submit"
                      className="btn btn-primary mt-5 w-100 mx-auto"
                    >
                      {productForm.isSubmitting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm"
                            aria-hidden="true"
                          ></span>
                          <span>Loading ...</span>
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </form>
                )}
              </Formik>
            ) : (
              <h1>Loading ... </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAllProducts