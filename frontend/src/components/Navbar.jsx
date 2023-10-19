import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import UseAppContext from "../AppContext";

const Navbar = () => {
  const userJSON = sessionStorage.user;
  const user = userJSON ? JSON.parse(userJSON) : null;

  const { loggedin, logout } = UseAppContext();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const displayUserOption = () => {
    if (loggedin) {
      return (
        <>
          <li className="nav-item">
            <button className="btn btn-danger mx-3" onClick={logout}>
              Logout
            </button>
          </li>
          <li>
            {user.avatar ? (
              <img
                src={"http://localhost:5000/" + user.avatar}
                width={40}
                className="rounded-circle pfp"
                alt=""
              />
            ) : (
              <img
                src={"./Assets/Admin.png"}
                className="rounded-circle pfp"
                alt=""
                width={40}
              />
            )}
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              <button className="btn btn-primary">Login</button>
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="navbar p-1 navbar-expand-lg bg-body-tertiary nav-height">
      <div className="container-fluid">
        {/* if i enter # it showing warning and nothing is shown in homepage*/}
        <a className="navbar-brand " href="/">
          <h4 className="p-0 m-0 text-danger">Homify</h4>
        </a>
        <button
          className="navbar-toggler bg-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="browser">
                Browser
              </NavLink>
            </li>
            {loggedin ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="addrentspace">
                    AddRentSpace
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="managerentspaces">
                    ManageRentSpaces
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/manageuser">
                    Manage User
                  </NavLink>
                </li>
              </>
            ) : null}
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {displayUserOption()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
