import React from "react";
import "../pages/Contact.css"
import keja from "../components/images/img-1.jpg"

function ContactUs(){
    return(
        <div>
        <p><h1>get us through</h1>
        <li>Mobile number:
        <ol>0700334455</ol></li>
        <li>Email us:
        <ol>bennoh@gmail.com</ol>
        </li>

        get in touch with the best offers ever... a home is a home ...
            </p>
        <img src={keja} />
        </div>
    )
}

export default ContactUs;