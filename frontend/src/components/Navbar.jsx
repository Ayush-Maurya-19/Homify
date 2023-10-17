import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import '../App.css';
import UseAppContext from '../AppContext';

const Navbar = () => {

    const { loggedin, logout } = UseAppContext();

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem("user"))
    );

    const displayUserOption = () => {
        if (loggedin) {
            return (
                <>
                    <li className="nav-item">
                        <button className="btn btn-danger" onClick={logout}>
                            Logout
                        </button>
                    </li>
                    <li>
                        <img
                            width={35}
                            height={35}
                            className="rounded-circle"
                            src={`http://localhost:5000/`}
                            alt="avatar"
                            onError={(e) => {
                                e.target.src = './Assets/admin.png'; // To Handle image load errors
                            }}
                        />
                    </li>

                </>
            );
        } else {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">
                            Login
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">
                            Signup
                        </NavLink>
                    </li>
                </>
            );
        }
    };

    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary nav-height'>
            <div className="container-fluid">
                {/* if i enter # it showing warning and nothing is shown in homepage*/}
                <a className="navbar-brand " href="/">
                    <h3 className='text-danger'>
                        Homify
                    </h3>
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    aria-controls='#navbarSupportedContend'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link" to="browser">
                                Browser
                            </NavLink>
                        </li>
                        {loggedin ? (
                            <>

                                <li className='nav-item'>
                                    <NavLink className="nav-link" to="addrentspace">
                                        AddRentSpace
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
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
}

export default Navbar;