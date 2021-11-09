import React, { Component } from "react";
import ReactDOM from 'react-dom';

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './style.css';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { display, fontSize, spacing } from '@mui/system';

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import RangeSlider from 'react-bootstrap-range-slider'

import submitBtn from '../assets/submit_button.svg'


class surveyPage extends Component {
    // call constructor to be able to store data
    constructor(props) {
        super(props);

        this.onChangeNameField = this.onChangeNameField.bind(this);
        this.displayStates = this.displayStates.bind(this);
        this.onChangeQ1 = this.onChangeQ1.bind(this);
        this.onChangeQ2 = this.onChangeQ2.bind(this);
        this.onChangeQ3 = this.onChangeQ3.bind(this);
        this.onChangeQ4 = this.onChangeQ4.bind(this);
        this.onChangeQ5 = this.onChangeQ5.bind(this);
        this.onChangeQ6 = this.onChangeQ6.bind(this);

        this.state = {
            user_name: '',
            question_1: 0,
            question_2: 0,
            question_3: 0,
            question_4: 0,
            question_5: 0,

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
    onChangeQ4(e) {
        this.setState({
            question_4: e.target.value,
        })
    }
    onChangeQ5(e){
        this.setState({
            question_5: e.target.value,
        })
    }
    onChangeQ6(e) {
        this.setState ({
            question_6: e.target.value,
        })
    }

    displayStates() {
        console.log('User Name: ', this.state.user_name, 
                    "\nQ1: ", this.state.question_1,
                    "\nQ2: ", this.state.question_2,
                    "\nQ3: ", this.state.question_3,
                    "\nQ4: ", this.state.question_4,
                    "\nQ5: ", this.state.question_5,
                    "\nQ6: ", this.state.question_6)
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

                <br />

                <h2 className="titleHeader" style={{ marginBottom: '-1.5vw', marginLeft: '1vw'}}><b>
                    Waste
                </b></h2>

                
                <Container className="surveyWidth">
                    {/* question #1 */}
                    <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            1)&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            About how many domestic flights do you take per year? (flights within the country)
                        </b></h3>
                    </Row>

                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <RangeSlider
                        tooltip='on'
                        tooltipPlacement='bottom'
                        value={this.state.question_1}
                        onChange={this.onChangeQ1}
                        min={0}
                        max={5}
                        step={1}
                        size='lg'
                        variant='success'
                        />
                    </Container>

                    <br /><br />

                    {/* question #2 */}
                    <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            2)&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            About how many international flights do you take per year? (flights outside the country)
                        </b></h3>
                    </Row>

                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <RangeSlider
                        tooltip='on'
                        tooltipPlacement='bottom'
                        value={this.state.question_2}
                        onChange={this.onChangeQ2}
                        min={0}
                        max={5}
                        step={1}
                        size='lg'
                        variant='success'
                        />
                    </Container>

                    <br /><br />

                    {/* question #3 */}
                    <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            3)&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            What type of car do you drive?
                        </b></h3>
                    </Row>

                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <Row>
                                <Form.Check
                                inline
                                label="None"
                                name="group1"
                                type="radio"
                                value="None"
                                checked={this.state.question_3 === 'None'}
                                onChange={this.onChangeQ3}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Gas Car"
                                name="group1"
                                type="radio"
                                value="GasCar"
                                checked={this.state.question_3 === 'GasCar'}
                                onChange={this.onChangeQ3}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Truck"
                                name="group1"
                                type="radio"
                                value="Truck"
                                checked={this.state.question_3 === 'Truck'}
                                onChange={this.onChangeQ3}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Hybrid"
                                name="group1"
                                type="radio"
                                value="Hybrid"
                                checked={this.state.question_3 === 'Hybrid'}
                                onChange={this.onChangeQ3}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Electric"
                                name="group1"
                                type="radio"
                                value="Electric"
                                checked={this.state.question_3 === 'Electric'}
                                onChange={this.onChangeQ3}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                        </div>
                    </Container>

                    <br /><br />

                    {/* question #4 */}
                    <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            4)&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            About how many hours do you spend driving a week (on average)?
                        </b></h3>
                    </Row>

                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <RangeSlider
                        tooltip='on'
                        tooltipPlacement='bottom'
                        value={this.state.question_4}
                        onChange={this.onChangeQ4}
                        min={0}
                        max={20}
                        step={1}
                        size='lg'
                        variant='success'
                        />
                    </Container>

                    <br /><br />

                    {/* question #5 */}
                    <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            5)&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            About how many hours do you commute by bus each week (on average)?
                        </b></h3>
                    </Row>

                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <RangeSlider
                        tooltip='on'
                        tooltipPlacement='bottom'
                        value={this.state.question_5}
                        onChange={this.onChangeQ5}
                        min={0}
                        max={20}
                        step={1}
                        size='lg'
                        variant='success'
                        />
                    </Container>

                    <br /><br />

                </Container>

                <br /><br />
                <h2 className="titleHeader" style={{ marginBottom: '-1.5vw', marginLeft: '1vw'}}><b>
                    Food
                </b></h2>

                <Container className="surveyWidth">
                    {/* question #6 */}
                    <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            6)&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            Which diet below most closely matches your lifestyle?
                        </b></h3>
                    </Row>

                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <Row>
                                <Form.Check
                                inline
                                label="High Meat Consumption"
                                name="group2"
                                type="radio"
                                value="HighMeat"
                                checked={this.state.question_6 === 'HighMeat'}
                                onChange={this.onChangeQ6}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Average Meat Consumption"
                                name="group2"
                                type="radio"
                                value="AverageMeat"
                                checked={this.state.question_6 === 'AverageMeat'}
                                onChange={this.onChangeQ6}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Pescatarian / No Red Meat"
                                name="group2"
                                type="radio"
                                value="Pescatarian"
                                checked={this.state.question_6 === 'Pescatarian'}
                                onChange={this.onChangeQ6}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Vegetarian"
                                name="group2"
                                type="radio"
                                value="Vegetarian"
                                checked={this.state.question_6 === 'Vegetarian'}
                                onChange={this.onChangeQ6}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Vegan"
                                name="group2"
                                type="radio"
                                value="Vegan"
                                checked={this.state.question_6 === 'Vegan'}
                                onChange={this.onChangeQ6}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                        </div>
                    </Container>

                    <br /><br />

                </Container>

                <Container>
                    <img 
                    src={submitBtn} 
                    onClick={this.displayStates}
                    className="buttonFormat2" 
                    />
                </Container>
            </Container>
            </div>
        );
    }
}

export default surveyPage;