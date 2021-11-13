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

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Box from '@mui/material/Box'

import axios from 'axios';

class resultsPage extends Component {
    constructor(props) {
        super(props);

        this.copySiteLink = this.copySiteLink.bind(this);
    }

    copySiteLink(e) {

    }

    render() {
        return (
            <Container style={{marginTop: '10vh'}}>
                <Row>
                    <h1 style={{color: '#67ab62', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}><b>
                        Hello, [name] <br/>
                        Here are your results!
                    </b></h1> 
                </Row>

                <Box className='resultsBox'>
                    <h4 
                    style=
                        {{
                            color: '#c0c4eb',
                            padding: '1.5vh',
                            position: 'relative',
                            left: '0%',
                            bottom: '-95%',
                        }}
                    >
                        World Like Me || Team Everest
                    </h4>
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
                        <h3 style={{color: '#40579a', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left'}}>
                            <button className='hereButtons'>Here</button>
                        </h3>
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
                            <button className='hereButtons'>copy</button>
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
        );
    }
}

export default resultsPage;