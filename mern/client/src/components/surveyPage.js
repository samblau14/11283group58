import React, { Component } from "react";
import ReactDOM from 'react-dom';

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './style.css';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { fontSize, spacing } from '@mui/system';

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import RangeSlider from 'react-bootstrap-range-slider'


class surveyPage extends Component {
    // call constructor to be able to store data
    constructor(props) {
        super(props);

        this.onChangeNameField = this.onChangeNameField.bind(this);
        this.displayStates = this.displayStates.bind(this);
        this.onChangeQ1 = this.onChangeQ1.bind(this);
        this.onChangeQ2 = this.onChangeQ2.bind(this);
        this.onChangeQ3 = this.onChangeQ3.bind(this);

        this.state = {
            user_name: '',
            question_1: 0,
            question_2: 0,
            question_3: 0,

            record_id: null,
        }
    }

    onChangeNameField(e) {
        this.setState({
            user_name: e.target.value,
        },
        () => {
            console.log('name is: ', this.state.user_name)
        })
    }

    onChangeQ1(e) {
        this.setState({
            question_1: e.target.value,
        })
    }
    onChangeQ2(e) {
        this.setState({
            question_2: e.target.value,
        })
    }
    onChangeQ3(e) {
        this.setState({
            question_3: e.target.value,
        })
    }

    displayStates() {
        console.log('User Name: ', this.state.user_name, 
                    "\nQ1: ", this.state.question_1,
                    "\nQ2: ", this.state.question_2,
                    "\nQ3: ", this.state.question_3)
    }
    
    render() {
        return (
            <div>
                <br /><br />
                <br /><br />

                <h3 className="centerTextBorder"><b>
                    Input Name (optional)
                </b></h3>
            <Container> 
                <Container className="inputNameSize">
                    <Row>
                        <Form.Control 
                        type="userName" 
                        size="lg"
                        placeholder="Enter Name" 
                        onChange={this.onChangeNameField}
                        style={{ textAlign: 'center'}}
                        value={this.state.user_name}
                        />
                    </Row>
                </Container>

                <h2 className="titleHeader"><b>
                    Waste
                </b></h2>

                <Container className="surveyWidth">

                    <h3 style={{color: '#40579a'}}><b>
                        1) About how many domestic flights do you take per year? (flights within the country)
                    </b></h3>

                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <RangeSlider
                        tooltip='auto'
                        tooltipPlacement='bottom'
                        value={this.state.question_1}
                        onChange={this.onChangeQ1}
                        min={0}
                        max={5}
                        step={1}
                        size='lg'
                        />
                    </Container>

                    <br /><br />

                    <h3 style={{color: '#40579a'}}><b>
                        2) About how many international flights do you take per year? (flights outside the country)
                    </b></h3>

                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <RangeSlider
                        tooltip='auto'
                        tooltipPlacement='bottom'
                        value={this.state.question_2}
                        onChange={this.onChangeQ2}
                        min={0}
                        max={5}
                        step={1}
                        size='lg'
                        />
                    </Container>

                    <br /><br />

                    <h3 style={{color: '#40579a'}}><b>
                        3) What type of car do you drive?
                    </b></h3>

                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <Row>
                            <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                <Form.Check
                                inline
                                label="None"
                                name="group1"
                                type="radio"
                                value="None"
                                checked={this.state.question_3 === 'None'}
                                onChange={this.onChangeQ3}
                                />
                                <Form.Check
                                inline
                                label="Gas Car"
                                name="group1"
                                type="radio"
                                value="Gas Car"
                                checked={this.state.question_3 === 'Gas Car'}
                                onChange={this.onChangeQ3}
                                />
                                <Form.Check
                                inline
                                label="Truck"
                                name="group1"
                                type="radio"
                                value="Truck"
                                checked={this.state.question_3 === 'Truck'}
                                onChange={this.onChangeQ3}
                                />
                                <Form.Check
                                inline
                                label="Hybrid"
                                name="group1"
                                type="radio"
                                value="Hybrid"
                                checked={this.state.question_3 === 'Hybrid'}
                                onChange={this.onChangeQ3}
                                />
                                <Form.Check
                                inline
                                label="Electric"
                                name="group1"
                                type="radio"
                                value="Electric"
                                checked={this.state.question_3 === 'Electric'}
                                onChange={this.onChangeQ3}
                                />
                            </div>
                        </Row>
                    </Container>

                    <br /><br />

                </Container>

                <Container>
                    <Button onClick={this.displayStates}>
                        Submit
                    </Button>
                </Container>
            </Container>
            </div>
        );
    }
}

export default surveyPage;