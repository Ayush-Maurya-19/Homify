import React from 'react'

const Signup = () => {
  return (
    <div className="col-md-4 mx-auto">
    <div className="card shadow">
      <div className="card-body">
          <h3 className="text-center">Signup Form</h3>
          <hr />

          <label>Name</label>
          <span style={{ fontSize: "0.7em", color: "red", margineLeft: 20 }}>
            </span>
          <input
            type="text"
            className="form-control mb-4"
            name="name"

          />

          <label>Email</label>
          <span style={{ fontSize: "0.7em", color: "red", margineLeft: 20 }}>
            </span>
          <input
            className="form-control mb-4"
            name="email"

          />



    
      </div>
    </div>
  </div>    )
}

export default Signup