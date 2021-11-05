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

        this.state = {
            user_name: '',
            question_1: 0,

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

    displayStates() {
        console.log('States: ', this.state.user_name, "\nQ1: ", this.state.question_1)
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
                <Container>
                    <Row className="inputNameSize">
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
                    <Row>
                        <Col>
                            <h3 style={{color: '#40579a'}}><b>
                            1) How many times a week do you take out the trash?
                            </b></h3>

                            <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                                <RangeSlider
                                tooltip='auto'
                                tooltipPlacement='bottom'
                                value={this.state.question_1}
                                onChange={this.onChangeQ1}
                                min={0}
                                max={10}
                                step={1}
                                size='lg'
                                />
                            </Container>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Button 
                    className="surveyCenter" 
                    onClick={this.displayStates}
                    >
                        Submit
                    </Button>
                </Container>
            </Container>
            </div>
        );
    }
}

export default surveyPage;