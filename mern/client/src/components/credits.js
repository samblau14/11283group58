import React, { Component } from "react";
import ReactDOM from 'react-dom';

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './style.css';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { display, fontSize, spacing } from '@mui/system';
import { Link } from "react-router-dom";

import Earth from '../assets/earth.svg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Credits = () => 
{
    return (
        <div>
            <br /><br /><br />
            
            <h1 style={{color: '#67ab62', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}><b>
                Behind the Scenes
            </b></h1> 

            <br /><br />

            <div class="alert alertCustom2" role="alert">
                <h2 style={{color: 'white', fontSize: '5vh'}}><b>
                    Team Everest
                </b></h2>
                <b><h2>
                    <br />
                    <Row>
                        <Col>
                        Sam Blau
                        </Col><Col>
                        Lily Maloney
                        </Col>
                    </Row><Row>
                        <Col>
                        Nick Strawser
                        </Col><Col>
                        Rachel West
                        </Col>
                    </Row>

                </h2></b>
            </div>

            <br />
            <div>
                <img src={Earth} className="earthStyle" />
            </div>
            <br />

            <div class="alert alertCustom" role="alert">
            <h2 style={{color: '#2f7a34', fontSize: '5vh'}}><b>
                    How were my results calculated?
            </b></h2>
            <h2 style={{fontSize: '4vh'}}>
            <b>Carbon Footprint</b>
            </h2><h2 style={{fontSize: '3vh'}}>
            The average C02 emmisions one person produces in the state of Florida is <b>10.764 tons/year</b>. This statistic (and subcategories) will be used 
            to compare with each user's inputs to determine a carbon emmission surplus or decifit from the average.
            <br /><br />
            <b>House/Apartment Number of Occupants</b><br />
            The average depends on type of housing quarters, with the average carbon emission from a household contains between 4 and 5 residents, 
            and the average from an apartment contains between 2 and 3 residents.
            <br /><br />
            <b>Diet Style</b><br />
            The average person follows an average meat diet. A high meat diet will add a carbon emission surplus, where pescatarian, vegetarian, 
            and vegan diets provide an increasing deficit, respectively.
            <br /><br />
            <b>Recycling</b><br />
            Since the average person does not recycle, there is no deviation from tha average. If recycling is checked, an emission decifit is marked
            <br /><br />
            <b>Flights</b><br />
            These calculations use an average flight distance for domestic and international flights of 805 km and 27

            </h2></div>
        </div>
    );
};

export default Credits;