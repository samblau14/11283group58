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
                <h2>
                    <br />
                    <Row>
                        <Col>
                        <b>Sam Blau</b>
                        </Col><Col>
                        <b>Lily Maloney</b>
                        </Col>
                    </Row><Row>
                        <Col>
                        <b>Nick Strawser</b>
                        </Col><Col>
                        <b>Rachel West</b>
                        </Col>
                    </Row>

                </h2>
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
            <h2 style={{fontSize: '3vh'}}><b>
                Most carbon footprint calculators ask for very specific information that not everybody can easily provide. That's why we aim to ask simple questions 
                that anybody can answer. Of course, this results in less accurate calculations, but it can help users get a rough idea of where they stand.
            </b></h2>

            <h2 style={{color: '#2f7a34', fontSize: '4vh'}}>
            <b>Carbon Footprint</b>
            </h2><h2 style={{fontSize: '3vh'}}>
                The average CO2 emmisions one person produces in the state of Florida is <b>10.764 tons/year</b>. This statistic (and subcategories) will be used 
                to compare with each user's inputs to determine a carbon emission surplus or decifit from the average.
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
                Since the average person does not recycle, there is no deviation from the average. If the user recycles, an emission decifit is marked
            <br /><br />
            <b>Flights</b><br />
                These calculations use an average flight distance for domestic and international flights of 805 km and 2735 km respectively. Short 
                distance flights average 257 grams of CO2 emission per km while long distance flights average 113 grams of CO2 emission per km. Surpluses
                and deficits are based on the fact that the user takes one domestic and one international flight a year.
            <br /><br />
            <b>Cars</b><br />
                Calculations use an average vehicle speed of 60 km/hr and a driver aged 20-34 drives an average of 24,300 km per year. We assume that the 
                user only uses one car. The average grams of CO2 emission per km for each vehicle is as follows:<br />
                Gas: 200, Truck: 280, Hybrid: 120, Electric: 60
                <br /><br />
            <b>Bus</b><br />
                The average speed of a public city bus is 21 km/hr, and the average grams of CO2 emission per km per person in a bus is 37.28. The average 
                American does not use the bus.
            <br /><br />
            <b>A surplus (positive value) or deficit (negative value) is calculated from each category. Therefore, when these values are all added up with 
                the average resident value stated at the top, the user's carbon footprint can be estimated.
            </b></h2>

            <br /><br />

            <h2 style={{color: '#2f7a34', fontSize: '4vh'}}>
            <b>Water Usage</b>
            </h2><h2 style={{fontSize: '3vh'}}>
                The average direct water usage is <b>140 gallons per day</b>. All calculations will be done in gallons per day to stay consistent.
            <br /><br />
            <b>Shower Length and Frequency</b><br />
                "Every few days" option is averaged to 3 days a week, and "Multiple times a day" option is averaged to 2.5 times a day. The flow 
                of an average showerhead/faucet is 5 gallons per minute. 
            <br /><br />
            <b>Bath Frequency</b><br />
                The average bath uses 35 gallons of water. This is multiplied by the frequency to calculate gallons per day.
            <br /><br />
            <b>Sink Use</b><br />
                The average faucet operates at 5 gallons per minute. The average sink time is estimated to be 30 seconds. Frequencies are estimated as such: <br />
                "Less than 5 times" uses an estimate of 3<br />
                "5-10" uses an estimate of 7<br />
                "10-20" uses an estimate of 15<br />
                "20+"" uses an estimate of 25
            <br /><br />
            <b>Toilet Flush Frequency</b><br />
                The average flush uses 5 gallons of water. This value is multiplied by the number the user selects.
            <br /><br />
            <b>Dish Washing Method</b><br />
                The average hand wash uses 27 gallons of water per load.<br />
                The average dishwasher uses 15 gallons of water per load.<br />
                "Neither" assumes the user never does dishes and uses disposable materials. We assumes a frequency of one load per day.
            <br /><br />
            <b>Laundry Frequency</b><br />
                The average load of laundry uses 41 gallons per load.
            <br /><br />
            <b>Pool</b><br />
                The average pool needs 1000 gallons per month to make up for evaporation.
            <br /><br />
            <b>Car Wash Frequency</b><br />
                The average hand car wash uses 100 gallons of water.
            <br /><br />
            <b>Each value obtained from the following categories are added together and compared to the average use number at the top of this section.</b>
            </h2></div>
        </div>
    );
};

export default Credits;