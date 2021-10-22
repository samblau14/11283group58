import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import './style.css';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

import titleImg from '../assets/logo.svg'

const Title = () => 
{
    return (
        <img src={titleImg} className="titleStyle"/>
    );
};

export default Title;