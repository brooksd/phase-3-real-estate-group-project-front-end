import { Grid } from "@mui/material";
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
function handleSubmit(event){
  event.preventDefault()
  fetch('http://localhost:9292/entries', {
  method: "POST",
  headers: {
  "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
  })
  .then((r) => r.json())
  .then(res=>setReviews(res)
  );
  setFormData(
  {
  name:'',
  no_of_rooms:'',
  rent_price:'',
  tell:'',
  listing_id:'',
  location_id:''
  
  }
  )
  
  }
  



function handleChange(event){
    const key = event.target.id
    setFormData({
      ...formData,
      [key]:event.target.value
    })
  }


    return(
        <div>
          <em>Add House Details Below</em>
          <form onSubmit={handleSubmit} className='form' >
<input type="text" style={{background:'white'}} id='name' onChange={handleChange} value={formData.name} placeholder='name' />
<input type="text" pattern="[0-9]*" style={{background:'white'}} id='no_of_rooms' onChange={handleChange} value={formData.no_of_rooms} placeholder='no_of_rooms' />
<input type="text" pattern="[0-9]*" style={{background:'white'}} id='rent_price' onChange={handleChange} value={formData.rent_price} placeholder='rent_price'/>
<input type="text" pattern="[0-9]*" style={{background:'white'}} id='tell' onChange={handleChange} value={formData.tell} placeholder='tell'/>
<input type="text" pattern="[0-9]*" style={{background:'white'}} id='listing_id' onChange={handleChange} value={formData.listing_id} placeholder='Enter listing id'/>
<input type="text" pattern="[0-9]*" style={{background:'white'}} id='location_id' onChange={handleChange} value={formData.location_id} placeholder='Enter location id '/>
<button style={{background:'green'}} type="submit">Submit</button>
</form>
     
      
         <h1><em>This is our home page</em></h1>
         <Grid container spacing={4}>
      {display}
      </Grid>


        </div>
    )
}

export default Home;
