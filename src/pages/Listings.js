import React from 'react';
import SearchBar from '../components/SearchBar';
import './listing.css';

function Listings() {


  function deleteElement(id)
{
    fetch(`http://localhost:9292/entries${id}`,{
     method: 'DELETE'   
    }) .then ((result)=>{
        result.json().then((resp)=>{
           console.warn(resp)
        })
    })
}
  return (
    <>
      <section className='listing-landing'>
        <div className='listing-landing-screen'>
            <p className="landing-tag">Find Your Perfect Home</p>
          <SearchBar />
          <button onClick={()=>deleteElement()}>Delete</button>
        </div>
      </section>
    </>
  );
}

export default Listings;
