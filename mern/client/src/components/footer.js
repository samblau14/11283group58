import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import './style.css';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

const Footer = () => 
{
    return (
        <div className="footerStyle">
            <b>
                <font face="helvetica" color="white">
                    Team Everest | 2021
                </font>
            </b>
        </div>
      );
};

export default Footer;