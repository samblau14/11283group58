import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import './style.css';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

import footerImg from '../assets/footer.svg'

const Footer = () => 
{
    return (
        <img src={footerImg} className="footerStyle"/>
    );
};

export default Footer;