import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary nav-height'>
        <div className="container-fluid">
{/* if i enter # it showing warning and nothing is shown in homepage*/}
            <a className='navbar-brand' href=" ">
            <h3 className='text-danger'>Homify</h3>
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
                        <NavLink className="nav-link" to="signup">
                            Signup
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="login">
                            Login
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="spacedetails">
                            SpaceDetails
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="addrentspace">
                            AddRentSpace
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="browser">
                            Browser
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" to="managerentspaces">
                            ManageRentSpaces
                        </NavLink>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
  );
}

export default Navbar;