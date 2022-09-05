import './NavBar.css'
import React from 'react'
import "./NavBar.css"
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="nav-bar">
        
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/contact-us" activeClassName='active'>
               <span className="routes-color">ContactUs</span> 
            </NavLink>
            <NavLink to="/about" activeClassName='active'>
                <span className="routes-color">About</span>
            </NavLink>
            <NavLink to="/listings" activeClassName='active'>
                <span className="routes-color">Listings</span>
            </NavLink>
            <NavLink to="/location" activeClassName='active'>
                <span className="routes-color">Location</span>
            </NavLink>
            <NavLink to="/entries" activeClassName='active'>
                <span className="routes-color">Entries</span>
            </NavLink>
        </div>
    )
}

export default NavBar;