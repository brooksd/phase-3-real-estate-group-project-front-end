import React from 'react';
import SearchBar from '../components/SearchBar';
import './listing.css';

function Listings() {
  return (
    <>
      <section className='listing-landing'>
        <div className='listing-landing-screen'>
            <p className="landing-tag">Find Your Perfect Home</p>
          <SearchBar />
        </div>
      </section>
    </>
  );
}

export default Listings;
