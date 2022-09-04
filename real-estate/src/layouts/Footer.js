import React from 'react';
import './footer.css';
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineMail,
  AiFillPhone,
} from 'react-icons/ai';

import {GoLocation} from "react-icons/go"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-cards'>
          <div>
            <h3>Contact Us:</h3>
            <p>
              <AiOutlineMail size={25} /> <span>thehouse@gmail.com</span>
            </p>
            <p>
              <AiFillPhone size={25} /> <span>0700000000</span>
            </p>
            <p>
              <GoLocation size={25} /> <span>thehouse@gmail.com</span>
            </p>
          </div>
          <div className='links'>
            <h3>Quick Links</h3>
            <Link to='/'>Home</Link>
            <Link to='/listings'>Listings</Link>
            <Link to='/about'>About</Link>
          </div>
        </div>
        <div className='socials'>
          <AiFillInstagram className='socials-icon' size={25} />
          <AiFillFacebook className='socials-icon' size={25} />
          <AiFillTwitterCircle className='socials-icon' size={25} />
          <AiFillYoutube className='socials-icon' size={25} />
        </div>
        <div className='credits'>&copy; {new Date().getFullYear()}</div>
      </footer>
    </>
  );
};

export default Footer;
