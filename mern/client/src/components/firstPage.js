import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import './style.css';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

import Title from './title';
import Button from './buttons';

import Earth from '../assets/earth.svg';
import Dots from '../assets/dots.svg';

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
                    <br />
                    Learn more about your enviromental impact and carbon footprint by taking
                    a simple survey
                </b></h2>
            </div>

            <br /><br />
            <br /><br />

            <div>
                <img src={Earth} className="earthStyle" />
            </div>

            <br /><br />
            <br />

            <div>
                <h1 className="centerTextBorder"><b>
                    Take the quiz now!
                </b></h1>
            </div>

            <br /><br />
            <br /><br />

            <Button />

            <br /><br /><br />
            <br /><br /><br />

            <div>
                <img src={Dots} className="dotsStyle" />
            </div>

            <br /><br /><br />
            <br /><br /><br />

            <div>
                <h1 className="centerTextBorder"><b>
                    Our Mission
                </b></h1>
            </div>

            <br />

            <div class="alert alertCustom" role="alert">
                <h2><b>
                   As people, we have a responcibility to take care of the planet
                    we live on. 
                    <br />
                    <br />
                    We want to be able to help users improve their
                    carbon footprint by looking at daily routine habits that affect
                    water usage, carbon emmissions, and waste,
                    
                    <br />
                    providing
                    feedback as to how to most quickly reduce their enviromental
                    impact.
                </b></h2>
            </div>

        </div>
    );
};

export default firstPage;