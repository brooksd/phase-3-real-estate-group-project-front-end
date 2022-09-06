import React from "react";
import "./About.css"
import bungalow from "../components/images/image.jpg"

const About = () => {
    return (
      <div className="about">
        <div className="sideA">
        <h1>Company history</h1> 
        <p> At Real Estate Company We believe that when it comes to finding a home what's outside the front door is just as important as what;s behind it.. </p>

        <h2>Working with others</h2>
        <p2>come be a part of truly amazing,open,collaborative and innovative culture</p2>
       <li>
       <ul>our people are always working together to build the next big thing, and that really keeps this place buzzin. Whether we're planning projects or grabbing a beer at our monthly Happy Hour,we all have great time here </ul>
       
       
       <h3>Our leadership</h3>
       <p3>lucy braton: The senior vice President</p3>
       <ul>Nick halinton: Chief Technology officer</ul>
       </li>
        </div>
        <div className="sideB">
        <img src={bungalow} alt="bungalow"></img>
        </div>
      </div>
    )
  }
  


export default About;