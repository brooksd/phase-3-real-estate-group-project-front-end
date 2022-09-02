import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
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
        </div>
    )
}

export default NavBar;