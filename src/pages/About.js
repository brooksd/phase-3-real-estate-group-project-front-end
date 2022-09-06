import React from "react";
import "./About.css"
import bungalow from "../components/images/image.jpg"

const About = () => {
    return (
      <div className="about">
        <div className="sideA">
        <h1>Company history</h1> 
        <p> At Real Estate Company We believe that when it comes to finding a home what's outside the front door is just as important as what;s behind it.. </p>
        
        <p>That’s why we go beyond the typical listings, by sourcing insights straight from locals and offering over 34 neighborhood map overlays, to give people a deeper understanding of what living in a home and neighborhood is really like.</p>
        

        <h2>Working with others</h2>
        <p>come be a part of truly amazing,open,collaborative and innovative culture</p>
       
       <p>our people are always working together to build the next big thing, and that really keeps this place buzzin. Whether we're planning projects or grabbing a beer at our monthly Happy Hour,we all have great time here </p>
       
       
       <h3>Our leadership</h3>
       <p>lucy braton: The senior vice President</p>
       <p>Nick halinton: Chief Technology officer</p>
       
        </div>
        <div className="sideB">
        <img src={bungalow} alt="bungalow"></img>
        </div>
      </div>
    )
  }
  


export default About;