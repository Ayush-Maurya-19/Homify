import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

const Checkout = () => {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState(null);
  const navigate = useNavigate();

  const OrderSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Min. 4 characters required")
      .required("Name is Required"),
    email: Yup.string().required("Email is Required"),
    check_in: Yup.date()
      .required("Check-in date Required")
      .min(new Date(), "Invalid Date"),
    address: Yup.string().required("Address is Required"),
    phone: Yup.number()
      .required("Phone is Required")
      .min(10)
      .integer()
      .positive(),
  });

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

  const orderForm = useFormik({
    initialValues: {
      property_name: "",
      name: "",
      check_in: "",
      email: "",
      address: "",
      phone: "",
      status: "Booking Confirmed",
    },
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      values.property_id = propertyData._id;
      values.property_name = propertyData.name;
      values.email = JSON.parse(sessionStorage.user).email;
      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
      }, 3000);

      // send the data to the server

      const res = await fetch("http://localhost:5000/order/add", {
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
          text: "Your Order is placed successfully",
        })
          .then((result) => {
            navigate("/");
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
    validationSchema: OrderSchema,
  });

  if (!propertyData) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h2 className="text-center m-2">
        Confirm Your Booking For{" "}
        <span className="text-success">
          {" "}
          <i>{propertyData.name}</i>
        </span>
      </h2>

      <div className="py-2 my-1 container-fluid">
        <div className="col-md-4 mx-auto">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="mb-3 text-center">Enter Your Details</h4>
              <hr />
              <form onSubmit={orderForm.handleSubmit}>
                <label>Full Name</label>
                <span
                  style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}
                >
                  {orderForm.touched.name && orderForm.errors.name}
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={orderForm.handleChange}
                  value={orderForm.values.name}
                />
                <label>Email</label>
                <span
                  style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}
                >
                  {orderForm.touched.email && orderForm.errors.email}
                </span>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={orderForm.handleChange}
                  value={orderForm.values.email}
                />

                <div className="mb-3">
                  <label>Your Address</label>

                  <span
                    style={{ fontSize: "0.8em", color: "red", marginLeft: 20 }}
                  >
                    {orderForm.touched.address && orderForm.errors.address}
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    onChange={orderForm.handleChange}
                    value={orderForm.values.address}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Check-in</label>
                    <span
                      style={{
                        fontSize: "0.8em",
                        color: "red",
                        marginLeft: 20,
                      }}
                    >
                      {orderForm.touched.check_in && orderForm.errors.check_in}
                    </span>
                    <input
                      type="date"
                      className="form-control"
                      name="check_in"
                      onChange={orderForm.handleChange}
                      value={orderForm.values.check_in}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Phone</label>
                    <span
                      style={{
                        fontSize: "0.8em",
                        color: "red",
                        marginLeft: 20,
                      }}
                    >
                      {orderForm.touched.phone && orderForm.errors.phone}
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      name="phone"
                      onChange={orderForm.handleChange}
                      value={orderForm.values.phone}
                    />
                  </div>
                </div>

                <button
                  disabled={orderForm.isSubmitting}
                  type="submit"
                  className="btn btn-primary mt-4 w-100 mx-auto"
                >
                  {orderForm.isSubmitting ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        aria-hidden="true"
                      ></span>
                      <span>Loading ...</span>
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
