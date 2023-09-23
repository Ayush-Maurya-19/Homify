import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className="container-fluid">
{/* if i enter # it showing warning and nothing is shown in homepage*/}
            <a className='navbar-brand' href=" ">
                Navbar
            </a>
            {/* <button 
               className='navbar-toggler'
               type='button'
               data-bs-toggle='collapse'
               aria-controls='#navbarSupportedContend'
               aria-expanded='false'
               aria-label='Toggle navigation'
            > 
            <span className='navbar-toggler-icon' />
            </button> */}
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
                        <NavLink className="nav-link" to="browserrentspace">
                            BrowserRentSpace
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