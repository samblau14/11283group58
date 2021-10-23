import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import './style.css';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

import Earth from '../assets/earth.svg'

const firstPage = () => 
{
    return (
        <div>
            <br /><br /><br />
            <br /><br /><br />
            <div class="alert alertCustom" role="alert">
               <h2><b>
                    What would happen if everybody followed the same daily habits as you?
                    <br />
                    Learn more about your enviromental impact and carbon footprint by taking
                    a simple survey
                </b></h2>
            </div>

            <br /><br /><br />
            <br /><br /><br />

            <div>
                <img src={Earth} 
                className="titleStyle" className="earthStyle"/>
            </div>
        </div>
    );
};

export default firstPage;