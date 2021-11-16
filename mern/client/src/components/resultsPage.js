import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactToPrint from "react-to-print";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './style.css';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Box from '@mui/material/Box'

import axios from 'axios';

import textGraph from '../assets/testGraph.PNG';

class resultsPage extends Component {
    constructor(props) {
        super(props);

        this.getIdentifier = this.getIdentifier.bind(this);
        this.getRecords = this.getRecords.bind(this);
        this.getRecordData = this.getRecordData.bind(this);
        this.calcData = this.calcData.bind(this);
        this.calcFinalData = this.calcFinalData.bind(this);

        this.state = {
            records: [],
            survey_ID: "",
            person_name: "",
            question_1: "0",
            question_2: "0",
            question_3: "",
            question_4: "0",
            question_5: "0",
            question_6: "",
            question_7: "",
            question_8: "",
            question_9: "",
            question_10: "",
            question_11: "0",
            question_12: "",
            question_13: "",
            question_14: "",
            question_15: "",
            question_16: "1",
            question_17: "",

            water_consumption: 0,
            carbon_footprint: 0,

            num_earths_percent: 0,
            num_florida_percent: 0,
            num_USA_percent: 0,
            
          };
    }

    // called when component first boots up
    componentDidMount() {
        this.getRecords();
        window.scrollTo(0, 0);
    }

    getRecords() {
        // put the records into the response state variable
        console.log("getting records...");

        axios
        .get("http://localhost:5000/record/")
        .then((response) => {
        this.setState({ records: response.data }, this.getIdentifier);
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    getIdentifier() {
        console.log("getting identifier...");
        console.log("record list length: " + this.state.records.length);

        for (let i = 0; i < this.state.records.length; i++)
            if (this.state.records[i].identifier == this.props.match.params.id)
            {
                console.log("found identifier")
                this.setState({ survey_ID: this.state.records[i]._id }, this.getRecordData);
            }
    }

    getRecordData() {
        axios
            .get("http://localhost:5000/record/" + this.state.survey_ID)
            .then((response) => {
                this.setState({
                    person_name: response.data.user_name,
                    question_1: response.data.question_1,
                    question_2: response.data.question_2,
                    question_3: response.data.question_3,
                    question_4: response.data.question_4,
                    question_5: response.data.question_5,
                    question_6: response.data.question_6,
                    question_7: response.data.question_7,
                    question_8: response.data.question_8,
                    question_9: response.data.question_9,
                    question_10: response.data.question_10,
                    question_11: response.data.question_11,
                    question_12: response.data.question_12,
                    question_13: response.data.question_13,
                    question_14: response.data.question_14,
                    question_15: response.data.question_15,
                    question_16: response.data.question_16,
                    question_17: response.data.question_17,
                }, this.calcData);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    calcData() {
        let HOUSEval, DIETval, RECYCLEval, DOMESTICval, INTERNATval, CARTYPEval, BUSval
        let SHOWERval, BATHval, SINKval, TOILETval, DISHval, LAUNDRYval, POOLval, CARval;

        // calculating carbon footprint
        let HOUSEoccupants = parseInt(this.state.question_16);
        switch(HOUSEoccupants) {
            case 1:
                HOUSEval = 3.22;
                break;
            case 2:
                HOUSEval = 0.912;
                break;
            case 3:
                HOUSEval = -0.498;
                break;
            case 4:
                HOUSEval = -1.198;
                break;
            case 5:
                HOUSEval = -1.668;
                break;
            case 6:
                HOUSEval = -2.298;
                break;
        }

        switch(this.state.question_6) {
            case "HighMeat":
                DIETval = 0.8;
                break;
            case "AverageMeat":
                DIETval = 0;
                break;
            case "Pescatarian":
                DIETval = -0.6;
                break;
            case "Vegetarian":
                DIETval = -0.8;
                break;
            case "Vegan":
                DIETval = -1.0;
                break;
        }

        switch(this.state.question_17) {
            case "Yes":
                RECYCLEval = 0;
                break;
            case "No":
                RECYCLEval = -0.132;
                break;
        }

        DOMESTICval = (parseInt(this.state.question_1) - 1) * 805 * (0.000257);
        INTERNATval = (parseInt(this.state.question_2) - 1) * 2735 * (0.000113);

        let CARaverage = 24300;
        let CARhour = parseInt(this.state.question_4);
        switch(this.state.question_3) {
            case "None":
                CARTYPEval = 0;
                break;
            case "GasCar":
                CARTYPEval = ((CARhour * 52.1429 * 60) - CARaverage) * 0.0002;
                break;
            case "Truck":
                CARTYPEval = ((CARhour * 52.1429 * 60) - CARaverage) * 0.00028;
                break;
            case "Hybrid":
                CARTYPEval = ((CARhour * 52.1429 * 60) - CARaverage) * 0.00012;
                break;
            case "Electric":
                CARTYPEval = ((CARhour * 52.1429 * 60) - CARaverage) * 0.00006;
                break;
        }

        BUSval = (parseInt(this.state.question_5)) * 52.1429 * 21 * 0.00003728;

        // calculating water usage
        let SHOWERLength;
        switch(this.state.question_7) {
            case "LessFiveMin":
                SHOWERLength = 2.5;
                break;
            case "FiveTenMin":
                SHOWERLength = 7.5;
                break;
            case "TenTwentyMin":
                SHOWERLength = 15.0;
                break;
            case "TwentyMoreMin":
                SHOWERLength = 30.0;
                break;
        }
        switch(this.state.question_8)
        {
            case "MultTimes":
                SHOWERval = SHOWERLength * 5 * 2.5;
                break;
            case "Once":
                SHOWERval = SHOWERLength * 5 * 1.0;
                break;
            case "EveryFew":
                SHOWERval = SHOWERLength * 5 * 0.33;
                break;
        }

        switch(this.state.question_9)
        {
            case "Daily":
                BATHval = 35;
                break;
            case "Weekly":
                BATHval = 5;
                break;
            case "Monthly":
                BATHval = 2.917;
                break;
            case "Yearly":
                BATHval = 0.0959;
                break;
            case "Never":
                BATHval = 0;
                break;
        }

        switch(this.state.question_10)
        {
            case "LessFiveMin":
                SINKval = 7.5;
                break;
            case "FiveTenMin":
                SINKval = 17.5;
                break;
            case "TenTwentyMin":
                SINKval = 37.5;
                break;
            case "TwentyMoreMin":
                SINKval = 62.5;
                break;
        }

        TOILETval = parseInt(this.state.question_11) * 5;

        switch(this.state.question_12)
        {
            case "Hand":
                DISHval = 27;
                break;
            case "Dishwasher":
                DISHval = 15;
                break;
            case "Neither":
                DISHval = 0;
                break;
        }

        switch(this.state.question_13)
        {
            case "Daily":
                LAUNDRYval = 41;
                break;
            case "Weekly":
                LAUNDRYval = 5.857;
                break;
            case "BiWeekly":
                LAUNDRYval = 2.9286;
                break;
            case "Monthly":
                LAUNDRYval = 1.34793;
                break;
        }

        switch(this.state.question_14)
        {
            case "Yes":
                POOLval = 32.8764;
                break;
            case "No":
                POOLval = 0;
                break;
        }

        switch(this.state.question_15)
        {
            case "Never":
                CARval = 0;
                break;
            case "Weekly":
                CARval = 14.2857;
                break;
            case "Monthly":
                CARval = 3.2876;
                break;
            case "Biannually":
                CARval = 0.548;
                break;
            case "Annually":
                CARval = 0.274;
                break;
        }

        let CARBON = 15.6 + HOUSEval + DIETval + RECYCLEval + DOMESTICval + INTERNATval + CARTYPEval + BUSval;
        let WATER = SHOWERval + BATHval + SINKval + TOILETval + DISHval + LAUNDRYval + POOLval + CARval;

        this.setState ({
            carbon_footprint: CARBON.toFixed(2),
            water_consumption: WATER.toFixed(2),
        }, this.calcFinalData);
    }

    calcFinalData() {
        this.setState ({
            num_earths_percent: Math.floor((this.state.carbon_footprint / 4.97) * 100),
            num_florida_percent: Math.floor((this.state.carbon_footprint / 10.764) * 100),
            num_USA_percent: Math.floor((this.state.carbon_footprint / 15.6) * 100),
        });
    }

    render() {

        let name;

        // name will either be the name of the survey taker, or Guest
        if (this.state.person_name === '')
            name = "Guest";
        else
            name = this.state.person_name;
            
        let usa_str;
        let florida_str;
        let earth_str;
        let usa_num;
        let florida_num;
        let earth_num;
        
        if (this.state.num_USA_percent < 100) {
		usa_str = "% less than the average American's current carbon footprint! Great job!"
		usa_num = 100 - this.state.num_USA_percent;
		}
		else {
		usa_str = "x the average American's current carbon footprint"
		usa_num = this.state.num_USA_percent / 100;
		}
		if (this.state.num_florida_percent < 100) {
		florida_str = "% less than the average Floridian's current carbon footprint! Great job!"
		florida_num = 100 - this.state.num_florida_percent;
		}
		else {
		florida_str = "x the average Floridian's current carbon footprint"
		florida_num = this.state.num_florida_percent / 100;
		}
		if (this.state.num_earths_percent < 100) {
		earth_str = "% less than the average human's current carbon footprint! Great job!"
		earth_num = 100 - this.state.num_earths_percent;
		}
		else {
		earth_str = "x the average human's current carbon footprint"
		earth_num = this.state.num_earths_percent / 100;
		}

        return (
            <div>

            <Container style={{marginTop: '8%'}} ref={(el) => (this.componentRef = el)}>
                <Row>
                    <h1 style={{color: '#67ab62', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}><b>
                        Hello, {name}! <br/>
                        Here are your results!
                    </b></h1> 
                </Row>

                <Container className='resultsBox'>
                    {/* Footer */}
                    <h4 
                    style=
                        {{
                            color: '#c0c4eb',
                            padding: '2%',
                            position: 'relative',
                            left: '0%',
                            bottom: '-94%',
                        }}
                    >
                        World Like Me || Team Everest
                    </h4>

                    <h1 style={{color: '#c0c4eb', marginLeft: '3%', marginRight: 'auto', textAlign: 'left'}}>
                        If everyone in the world shared the same lifestyle as you,
                    </h1>
                    <Row>
                        <h1 style={{color: '#c0c4eb', marginLeft: 'auto', marginRight: '5%', textAlign: 'left', marginTop: '3%'}}>
                            it would take&nbsp;<b style={{color: '#ffffff'}}>{this.state.num_earths_percent/100} earths </b> to sustain everyone's living habits
                        </h1>
                    </Row>
                    

                    <Row style={{color: '#ffffff', marginLeft: 'auto', marginRight: 'auto', marginTop: '7%', textAlign: 'center', fontSize: '250%'}}>
                        <Col>
                            Water Usage
                            <Box>
                                <b>
                                    {this.state.water_consumption} GALLONS
                                </b>
                                <br /> 
                                per day
                            </Box>
                        </Col>
                        <Col>
                            Carbon Footprint
                            <Box>
                                <b>
                                    {this.state.carbon_footprint} TONS
                                </b>
                                <br /> 
                                of CO2e / year
                            </Box>
                        </Col>
                    </Row>

                    <Row style={{color: '#c0c4eb', marginLeft: 'auto', marginRight: 'auto', marginTop: '-2%', fontSize: '200%', padding: '10%'}}>
                        <Col style={{textAlign: 'left'}}>
                            To most quickly reduce
                            <br />
                            your carbon footprint,
                            <br />
                            try reducing:
                        </Col>
                        <Col style={{textAlign: 'right'}}>
                            Your most environmentally
                            <br /> 
                            friendly practice is a lack of:
                        </Col>
                    </Row>
                    <Row style={{color: '#ffffff', marginLeft: 'auto', marginRight: 'auto', marginTop: '-10%', textAlign: 'center', fontSize: '200%'}}>
                        <Col>
                            [WIP]
                        </Col>
                        <Col>
                            [WIP]
                        </Col>
                    </Row>

                    <Row style={{color: '#ffffff', marginLeft: 'auto', marginRight: 'auto', fontSize: '200%', padding: '5%', textAlign: 'center'}}>
                        <Col>
                            Your carbon footprint is {usa_num}{usa_str}
                        </Col>
                        <Col>
                            Your carbon footprint is {florida_num}{florida_str}
                        </Col>
                        <Col>
                            Your carbon footprint is {earth_num}{earth_str}
                        </Col>
                    </Row>

                </Container>

                <Row>
                    <h2 style={{color: '#67ab62', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}><b>
                        Thanks for your interest in improving the world around us!
                    </b></h2> 
                </Row>

                <Row style={{marginBottom: '1%'}}>
                    <Col>
                        <h3 style={{color: '#40579a', marginLeft: 'auto', marginRight: 'auto', textAlign: 'right'}}>
                            Print your results
                        </h3>
                    </Col>
                    <Col>
                        {/* TODO: DOES NOT FULLY WORK, STYLES AND GRAPHICS DO NOT CARRY THROUGH */}
                        <ReactToPrint
                            trigger=
                            {() => 
                                <h3 style={{color: '#40579a', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left'}}>
                                    <button className='hereButtons'>Here</button>
                                </h3>
                            }
                            content={() => this.componentRef}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 style={{color: '#40579a', marginLeft: 'auto', marginRight: 'auto', textAlign: 'right'}}>
                            Share the survey with others
                        </h3>
                    </Col>
                    <Col>
                        <h4 style={{color: '#40579a', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left', marginTop: '2%'}}>
                            <input value='worldlikeme.com' readOnly style={{outline: 'none', border: '0', padding: '1.5%', marginRight: '1.5%'}}/>
                            <button 
                                className='hereButtons'
                                onClick={() => {navigator.clipboard.writeText("worldlikeme.com")}}
                            >
                                copy
                            </button>
                        </h4>
                    </Col>
                </Row>

                <br /><br />

                <Row>
                    <h2 style={{color: '#67ab62', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}><b>
                        Curious about how your statistics are calculated?
                        <br /><br/>
                            Learn more&nbsp;
                        </b>
                        <Link to="/credits">
                            <button className='hereButtons'>Here</button>
                        </Link>
                    </h2>
                </Row>
            </Container>
            </div>
        );
    }
}

export default resultsPage;
