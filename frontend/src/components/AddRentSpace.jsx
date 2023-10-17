import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

const AddRentSpace = () => {
  const navigate = useNavigate();
  const [selFile, setSelFile] = useState("");

  const ProductSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Min. 4 characters required")
      .required("Product Name is Required"),
    category: Yup.string().required("Type of Furniture is Required"),
    location: Yup.string()
      .min(4, "Min. 4 characters required")
      .required("Location is Required"),
  });

  console.log(JSON.parse(sessionStorage.user)._id);

  const productForm = useFormik({
    initialValues: {
      name: "",
      category: "",
      location: "",
      city: "",
      image: "",
      price: "",
      user_id: JSON.parse(sessionStorage.user)._id,
      user_name: JSON.parse(sessionStorage.user).name,
    },
    onSubmit: async (values, { setSubmitting }) => {
      values.image = selFile;
      setSubmitting(true);

      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
      }, 3000);

      // send the data to the server

      const res = await fetch("http://localhost:5000/product/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Nice",
          text: "Your Product is added successfully",
        })
          .then((result) => {
            navigate("/managerentspaces");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Something went wrong",
        });
      }
    },
    validationSchema: ProductSchema,
  });

  const uploadFile = async (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    console.log(file.name);
    setSelFile(file.name);

    const fd = new FormData();
    fd.append("myfile", file);

    const res = await fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    });

    console.log(res.status);
  };

  return (
    <div className='py-4 my-3 container-fluid'>
      <div className="col-md-4 mx-auto">
        <div className="card shadow">
          <div className='card-body'>
            <form onSubmit={productForm.handleSubmit}>
              <h3 className='text-center'>List Your Property</h3>
              <hr />

              <label>Name</label>
              <span style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}>
                {productForm.touched.name && productForm.errors.name}
              </span>
              <input
                className='form-control mb-4'
                type="text"
                name="name"
                onChange={productForm.handleChange}
                value={productForm.values.name} />

              <label>Type of Property</label>

              <span style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}>
                {productForm.touched.category && productForm.errors.category}
              </span>

              <select
                className="form-control"
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
              <span style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}>
                {productForm.touched.location &&
                  productForm.errors.location}
              </span>
              <input
                className="form-control mb-4"
                type="text"
                name="location"
                onChange={productForm.handleChange}
                value={productForm.values.location} />

              <label>City</label>
              <span style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}>
                {productForm.touched.city && productForm.errors.city}
              </span>
              <select
                className="form-control"
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


              <label>Price:</label>
              <input
                className="form-control mb-4"
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddRentSpace