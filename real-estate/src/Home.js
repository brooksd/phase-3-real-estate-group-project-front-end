import React from "react";

import { useState,useEffect } from "react";

import Display from "./components/Display";
function Home(){
  const [reviews,setReviews] = useState ([])
  const [formData,setFormData]= useState(
    {
      name:'',
      no_of_rooms:'',
      rent_price:'',
      tell:'',
      listing_id:'',
      location_id:''
  
    }
  )
  

     
  useEffect(()=>{
    fetch('http://localhost:9292/entries')
    .then((res)=>res.json())
    .then((res)=>setReviews(res))},[])


const display = reviews.map((item)=><Display 
key={item.id}
name = {item.name}
no_of_rooms = {item.no_of_rooms}
rent_price = {item.rent_price}
tell= {item.contact}
/>)
//###########################################

  



function handleChange(event){
    const key = event.target.id
    setFormData({
      ...formData,
      [key]:event.target.value
    })
  }


    return(
        <div>
     
      
         <h1><em>This is our home page</em></h1>
        
      {display}


        </div>
    )
}

export default Home;