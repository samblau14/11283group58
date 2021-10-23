import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import './style.css';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Button = () => 
{
    return (
        <div>
            <Link to="/survey">
                <button className="buttonFormat" onClick="window.scrollTo(0, 0);" /> 
            </Link>
        </div>
    );
};

export default Button;