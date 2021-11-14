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

        this.state = {
            person_name: "",
          };
    }

    // This will get the record based on the id from the database.
    componentDidMount() {
        axios
            .get("http://localhost:5000/record/" + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    person_name: response.data.user_name,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        let name;

        // name will either be the name of the survey taker, or Guest
        if (this.state.person_name === '')
            name = "Guest";
        else
            name = this.state.person_name;

        return (
            <div>

            <Container style={{marginTop: '10vh'}} ref={(el) => (this.componentRef = el)}>
                <Row>
                    <h1 style={{color: '#67ab62', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}><b>
                        Hello, {name}! <br/>
                        Here are your results!
                    </b></h1> 
                </Row>

                <Box className='resultsBox'>
                    {/* Footer */}
                    <h4 
                    style=
                        {{
                            color: '#c0c4eb',
                            padding: '1.5vh',
                            position: 'relative',
                            left: '0%',
                            bottom: '-129vh',
                        }}
                    >
                        World Like Me || Team Everest
                    </h4>

                    <h1 style={{color: '#c0c4eb', marginLeft: '4vh', marginRight: 'auto', textAlign: 'left'}}>
                        If everyone in the world shared the same lifestyle as you,
                    </h1>
                    <Row>
                        <h1 style={{color: '#c0c4eb', marginLeft: 'auto', marginRight: '2vh', textAlign: 'right', marginTop: '6vh'}}>
                            the world's ecological footprint would be&nbsp;
                        </h1>
                        <h1 style={{color: '#ffffff', textAlign: 'left', marginRight: '9vh', marginTop: '4vh', fontSize: '7vh'}}>
                            [number]%
                        </h1>
                    </Row>
                    <h1 style={{color: '#c0c4eb', marginLeft: 'auto', marginRight: '10vh', textAlign: 'right'}}>
                        as large as it is now
                    </h1>

                    <Row style={{color: '#ffffff', marginLeft: 'auto', marginRight: 'auto', marginTop: '10vh', textAlign: 'center', fontSize: '4vh'}}>
                        <Col>
                            Water Consumption
                            <Box>
                                <img
                                    src={textGraph}
                                    style={{width: '100%'}}
                                />
                            </Box>
                        </Col>
                        <Col>
                            Carbon Emmission
                            <Box>
                                <img
                                    src={textGraph}
                                    style={{width: '100%'}}
                                />
                            </Box>
                        </Col>
                        <Col>
                            Waste
                            <Box>
                                <img
                                    src={textGraph}
                                    style={{width: '100%'}}
                                />
                            </Box>
                        </Col>
                    </Row>

                    <Row style={{color: '#c0c4eb', marginLeft: 'auto', marginRight: 'auto', marginTop: '-4vh', textAlign: 'left', fontSize: '4vh', padding: '15vh'}}>
                        <Col>
                            To most quickly reduce
                            <br />
                            your carbon footprint,
                            <br />
                            try reducing:
                        </Col>
                        <Col>
                            Your most environmentally
                            <br /> 
                            friendly practice is a lack of:
                        </Col>
                    </Row>
                    <Row style={{color: '#ffffff', marginLeft: 'auto', marginRight: 'auto', marginTop: '-14vh', textAlign: 'center', fontSize: '4vh'}}>
                        <Col>
                            [STAT 1]
                        </Col>
                        <Col>
                            [STAT 2]
                        </Col>
                    </Row>

                </Box>

                <Row>
                    <h2 style={{color: '#67ab62', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}><b>
                        Thanks for your interest in improving the world around us!
                    </b></h2> 
                </Row>

                <Row style={{marginBottom: '-1vh'}}>
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
                        <h4 style={{color: '#40579a', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left', marginTop: '2vh'}}>
                            <input value='worldlikeme.com' readOnly style={{outline: 'none', border: '0', padding: '1.3vh', marginRight: '1.5vh'}}/>
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