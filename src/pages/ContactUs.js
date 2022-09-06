import React from "react";
import "../pages/Contact.css"
import keja from "../components/images/img-1.jpg"

function ContactUs(){
    return(
        <div>
        <p><h1>Reach to  us through</h1>
        <li>Mobile number:
        <ol>0700334455</ol></li>
        <li>Email us:
        <ol>bennoh@gmail.com</ol>
        </li>
        <li>instagram page:</li>
        <ol>#bennoh</ol>
        <li>facebook page:</li>
        <ol>#bennoh</ol>

        

        get in touch with the best offers ever... a home is a home ... everybody deserves it..
            </p>
        <img src={keja} />
        </div>
    )
}

export default ContactUs;