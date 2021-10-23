import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import './style.css';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import startButton from '../assets/beginButton.svg';

const Button = () => 
{
    return (
        <div>
            <Link to="/survey">
                <button className="buttonFormat" /> 
            </Link>
        </div>
    );
};

export default Button;