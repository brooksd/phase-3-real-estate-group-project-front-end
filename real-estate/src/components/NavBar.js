import './NavBar.css'
import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="nav-bar">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/contact-us">
                ContactUs
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
            <NavLink to="/listings">
                Listings
            </NavLink>
            <NavLink to="/location">
                Location
            </NavLink>
        </div>
    )
}

export default NavBar;