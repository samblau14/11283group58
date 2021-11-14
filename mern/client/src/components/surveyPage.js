import React, { Component } from "react";
import ReactDOM from 'react-dom';
import DelayLink from 'react-delay-link';

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './style.css';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import submitBtn from '../assets/submit_button.svg'

import SurveySlider from './surveySlider'

import axios from 'axios';
import { withRouter } from "react-router";


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
        this.onChangeQ7 = this.onChangeQ7.bind(this);
        this.onChangeQ8 = this.onChangeQ8.bind(this);
        this.onChangeQ9 = this.onChangeQ9.bind(this);
        this.onChangeQ10 = this.onChangeQ10.bind(this);
        this.onChangeQ11 = this.onChangeQ11.bind(this);
        this.onChangeQ12 = this.onChangeQ12.bind(this);
        this.onChangeQ13 = this.onChangeQ13.bind(this);
        this.onChangeQ14 = this.onChangeQ14.bind(this);
        this.onChangeQ15 = this.onChangeQ15.bind(this);
        this.onChangeQ16 = this.onChangeQ16.bind(this);
        this.onChangeQ17 = this.onChangeQ17.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_name: "",
            data_id: '012345',
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
            question_16: "0",
            question_17: "",
            submitted: false,
        }
    }

    onChangeNameField(e) {
        // input validation and filtering
        let inputVal = e.target.value;
        inputVal = inputVal.replace(/[^A-Za-z ]/ig, '')

        this.setState({
            user_name: inputVal,
        },
        // () => {console.log('name is: ', this.state.user_name)}
        )
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
    onChangeQ7(e) {
        this.setState ({
            question_7: e.target.value,
        })
    }
    onChangeQ8(e) {
        this.setState ({
            question_8: e.target.value,
        })
    }
    onChangeQ9(e) {
        this.setState ({
            question_9: e.target.value,
        })
    }
    onChangeQ10(e) {
        this.setState ({
            question_10: e.target.value,
        })
    }
    onChangeQ11(e) {
        this.setState ({
            question_11: e.target.value,
        })
    }
    onChangeQ12(e) {
        this.setState ({
            question_12: e.target.value,
        })
    }
    onChangeQ13(e) {
        this.setState ({
            question_13: e.target.value,
        })
    }
    onChangeQ14(e) {
        this.setState ({
            question_14: e.target.value,
        })
    }
    onChangeQ15(e) {
        this.setState ({
            question_15: e.target.value,
        })
    }
    onChangeQ16(e) {
        this.setState ({
            question_16: e.target.value,
        })
    }
    onChangeQ17(e) {
        this.setState ({
            question_17: e.target.value,
        })
    }
    

    displayStates() {
        console.log('User Name: ', this.state.user_name, 
                    "\nQ1: ", this.state.question_1,
                    "\nQ2: ", this.state.question_2,
                    "\nQ3: ", this.state.question_3,
                    "\nQ4: ", this.state.question_4,
                    "\nQ5: ", this.state.question_5,
                    "\nQ6: ", this.state.question_6,
                    "\nQ7: ", this.state.question_7,
                    "\nQ8: ", this.state.question_8,
                    "\nQ9: ", this.state.question_9,
                    "\nQ10: ", this.state.question_10,
                    "\nQ11: ", this.state.question_11,
                    "\nQ12: ", this.state.question_12,
                    "\nQ13: ", this.state.question_13,
                    "\nQ14: ", this.state.question_14,
                    "\nQ15: ", this.state.question_15,
                    "\nQ16: ", this.state.question_16,
                    "\nQ17: ", this.state.question_17)
    }

// This function will handle the submission.
  onSubmit(e) {

    // TODO: figure out why prevent default makes <Link> not work
    // e.preventDefault();

    window.scrollTo(0, 0);
    let resData;

    // display the information before the states are changed
    console.log('User Name: ', this.state.user_name, 
            "\nQ1: ", this.state.question_1,
            "\nQ2: ", this.state.question_2,
            "\nQ3: ", this.state.question_3,
            "\nQ4: ", this.state.question_4,
            "\nQ5: ", this.state.question_5,
            "\nQ6: ", this.state.question_6,
            "\nQ7: ", this.state.question_7,
            "\nQ8: ", this.state.question_8,
            "\nQ9: ", this.state.question_9,
            "\nQ10: ", this.state.question_10,
            "\nQ11: ", this.state.question_11,
            "\nQ12: ", this.state.question_12,
            "\nQ13: ", this.state.question_13,
            "\nQ14: ", this.state.question_14,
            "\nQ15: ", this.state.question_15,
            "\nQ16: ", this.state.question_16,
            "\nQ17: ", this.state.question_17)

    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newperson = {
		user_name: this.state.user_name,
		question_1:this.state.question_1,
		question_2:this.state.question_2,
		question_3:this.state.question_3,
		question_4:this.state.question_4,
		question_5:this.state.question_5,
		question_6:this.state.question_6,
		question_7:this.state.question_7,
		question_8:this.state.question_8,
		question_9:this.state.question_9,
		question_10:this.state.question_10,
		question_11:this.state.question_11,
		question_12:this.state.question_12,
		question_13:this.state.question_13,
		question_14:this.state.question_14,
		question_15:this.state.question_15,
        question_16:this.state.question_16,
        question_17:this.state.question_17,
    };

    axios
      .post("http://localhost:5000/record/add", newperson)
      .then((res) => {
          console.log(typeof res.data);

          resData = res.data;
      });

    // We will empty the state after posting the data to the database
    this.setState({
      user_name: "",
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
      question_16: "0",
      question_17: "",

      submitted: true,
    });
  }
    
    render() {
        let canSubmit = (
            this.state.question_3 !== "" &&
            this.state.question_6 !== "" &&
            this.state.question_7 !== "" &&
            this.state.question_8 !== "" &&
            this.state.question_9 !== "" &&
            this.state.question_10 !== "" &&
            this.state.question_12 !== "" &&
            this.state.question_13 !== "" &&
            this.state.question_14 !== "" &&
            this.state.question_15 !== "" &&
            this.state.question_17 !== "" ||
            this.state.submitted
        );

        let button;
        
        if (canSubmit) {
            button =
                <DelayLink delay= {2000} to={"/results/" + this.state.data_id}>
                    <img
                    src={submitBtn} 
                    onClick={this.onSubmit}
                    // onClick={this.displayStates}
                    className="buttonFormat2"
                    />
                </DelayLink>
        } else {
            button =
                <img 
                src={submitBtn} 
                className="buttonFormatGrayed"
                />
        }

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
                    <SurveySlider 
                        number='1)' 
                        questionName='About how many domestic flights do you take per year? (flights outside the country)'
                        sliderValue={this.state.question_1}
                        updateValue={this.onChangeQ1}
                        minVal={0}
                        maxVal={5}
                        stepVal={1}
                    />

                    {/* question #2 */}
                    <SurveySlider 
                        number='2)' 
                        questionName='About how many international flights do you take per year? (flights outside the country)'
                        sliderValue={this.state.question_2}
                        updateValue={this.onChangeQ2}
                        minVal={0}
                        maxVal={5}
                        stepVal={1}
                    />

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
                    <SurveySlider 
                        number='4)' 
                        questionName='About how many hours do you spend driving a week (on average)?'
                        sliderValue={this.state.question_4}
                        updateValue={this.onChangeQ4}
                        minVal={0}
                        maxVal={20}
                        stepVal={1}
                    />
                    
                    {/* question #5 */}
                    <SurveySlider 
                        number='5)' 
                        questionName='About how many hours do you commute by bus each week (on average)?'
                        sliderValue={this.state.question_5}
                        updateValue={this.onChangeQ5}
                        minVal={0}
                        maxVal={20}
                        stepVal={1}
                    />
                    
                </Container>

                <br />
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
                                name="group3"
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
                                name="group3"
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
                                name="group3"
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
                                name="group3"
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
                                name="group3"
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

                <br />
                <h2 className="titleHeader" style={{ marginBottom: '-1.5vw', marginLeft: '1vw'}}><b>
                    Water
                </b></h2>

                <Container className="surveyWidth">
                    
                    {/* question #7 */}
                    <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            7)&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            About how long are your showers?
                        </b></h3>
                    </Row>
                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <Row>
                                <Form.Check
                                inline
                                label="<5 Minutes"
                                name="group4"
                                type="radio"
                                value="LessFiveMin"
                                checked={this.state.question_7 === 'LessFiveMin'}
                                onChange={this.onChangeQ7}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="5-10 Minutes"
                                name="group4"
                                type="radio"
                                value="FiveTenMin"
                                checked={this.state.question_7 === 'FiveTenMin'}
                                onChange={this.onChangeQ7}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="10-20 Minutes"
                                name="group4"
                                type="radio"
                                value="TenTwentyMin"
                                checked={this.state.question_7 === 'TenTwentyMin'}
                                onChange={this.onChangeQ7}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="20+ Minutes"
                                name="group4"
                                type="radio"
                                value="TwentyMoreMin"
                                checked={this.state.question_7 === 'TwentyMoreMin'}
                                onChange={this.onChangeQ7}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                        </div>
                    </Container>

                    <br /><br />

                    {/* question #8 */}
                    <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            8)&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            How frequently do you shower?
                        </b></h3>
                    </Row>
                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <Row>
                                <Form.Check
                                inline
                                label="Multiple times a day"
                                name="group5"
                                type="radio"
                                value="MultTimes"
                                checked={this.state.question_8 === 'MultTimes'}
                                onChange={this.onChangeQ8}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Once a day"
                                name="group5"
                                type="radio"
                                value="Once"
                                checked={this.state.question_8 === 'Once'}
                                onChange={this.onChangeQ8}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Once every few days"
                                name="group5"
                                type="radio"
                                value="EveryFew"
                                checked={this.state.question_8 === 'EveryFew'}
                                onChange={this.onChangeQ8}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                        </div>
                    </Container>

                    <br /><br />

                    {/* question #9 */}
                    <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            9)&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            About how frequently do you take baths?
                        </b></h3>
                    </Row>
                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <Row>
                                <Form.Check
                                inline
                                label="Daily"
                                name="group6"
                                type="radio"
                                value="Daily"
                                checked={this.state.question_9 === 'Daily'}
                                onChange={this.onChangeQ9}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Weekly"
                                name="group6"
                                type="radio"
                                value="Weekly"
                                checked={this.state.question_9 === 'Weekly'}
                                onChange={this.onChangeQ9}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Monthly"
                                name="group6"
                                type="radio"
                                value="Monthly"
                                checked={this.state.question_9 === 'Monthly'}
                                onChange={this.onChangeQ9}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Yearly"
                                name="group6"
                                type="radio"
                                value="Yearly"
                                checked={this.state.question_9 === 'Yearly'}
                                onChange={this.onChangeQ9}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Never"
                                name="group6"
                                type="radio"
                                value="Never"
                                checked={this.state.question_9 === 'Never'}
                                onChange={this.onChangeQ9}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                        </div>
                    </Container>

                    <br /><br />

                    {/* question #10 */}
                    <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            10)&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            About how many times a day do you use a sink (washing hands, brushing teeth, etc.)?
                        </b></h3>
                    </Row>
                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <Row>
                                <Form.Check
                                inline
                                label="<5 Times"
                                name="group7"
                                type="radio"
                                value="LessFiveMin"
                                checked={this.state.question_10 === 'LessFiveMin'}
                                onChange={this.onChangeQ10}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="5-10 Times"
                                name="group7"
                                type="radio"
                                value="FiveTenMin"
                                checked={this.state.question_10 === 'FiveTenMin'}
                                onChange={this.onChangeQ10}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="10-20 Times"
                                name="group7"
                                type="radio"
                                value="TenTwentyMin"
                                checked={this.state.question_10 === 'TenTwentyMin'}
                                onChange={this.onChangeQ10}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="20+ Times"
                                name="group7"
                                type="radio"
                                value="TwentyMoreMin"
                                checked={this.state.question_10 === 'TwentyMoreMin'}
                                onChange={this.onChangeQ10}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                        </div>
                    </Container>

                    <br /><br />
                    
                    {/* question #11 */}
                    <SurveySlider
                        number='11)' 
                        questionName='About how many times a day do you flush a toilet daily?'
                        sliderValue={this.state.question_11}
                        updateValue={this.onChangeQ11}
                        minVal={0}
                        maxVal={20}
                        stepVal={1}
                    />

                    <br />

                    {/* question #12 */}
                    <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            12)&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            How does your household do dishes?
                        </b></h3>
                    </Row>
                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <Row>
                                <Form.Check
                                inline
                                label="By hand"
                                name="group8"
                                type="radio"
                                value="Hand"
                                checked={this.state.question_12 === 'Hand'}
                                onChange={this.onChangeQ12}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Dishwasher"
                                name="group8"
                                type="radio"
                                value="Dishwasher"
                                checked={this.state.question_12 === 'Dishwasher'}
                                onChange={this.onChangeQ12}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Neither"
                                name="group8"
                                type="radio"
                                value="Neither"
                                checked={this.state.question_12 === 'Neither'}
                                onChange={this.onChangeQ12}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                        </div>
                    </Container>

                    <br /><br />

                    {/* question #13 */}
                    <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            13)&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            About how frequently do you do laundry?
                        </b></h3>
                    </Row>
                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <Row>
                                <Form.Check
                                inline
                                label="Daily"
                                name="group9"
                                type="radio"
                                value="Daily"
                                checked={this.state.question_13 === 'Daily'}
                                onChange={this.onChangeQ13}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Weekly"
                                name="group9"
                                type="radio"
                                value="Weekly"
                                checked={this.state.question_13 === 'Weekly'}
                                onChange={this.onChangeQ13}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Bi weekly"
                                name="group9"
                                type="radio"
                                value="BiWeekly"
                                checked={this.state.question_13 === 'BiWeekly'}
                                onChange={this.onChangeQ13}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Monthly"
                                name="group9"
                                type="radio"
                                value="Monthly"
                                checked={this.state.question_13 === 'Monthly'}
                                onChange={this.onChangeQ13}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                        </div>
                    </Container>

                    <br /><br />

                    {/* question #14 */}
                    <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            14)&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            Do you own a pool?
                        </b></h3>
                    </Row>
                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <Row>
                                <Form.Check
                                inline
                                label="Yes"
                                name="group10"
                                type="radio"
                                value="Yes"
                                checked={this.state.question_14 === 'Yes'}
                                onChange={this.onChangeQ14}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="No"
                                name="group10"
                                type="radio"
                                value="No"
                                checked={this.state.question_14 === 'No'}
                                onChange={this.onChangeQ14}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                        </div>
                    </Container>

                    <br /><br />

                    {/* question #15 */}
                    <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            15)&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            If you own a car, how frequently do you wash it?
                        </b></h3>
                    </Row>
                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <Row>
                                <Form.Check
                                inline
                                label="Never"
                                name="group11"
                                type="radio"
                                value="Never"
                                checked={this.state.question_15 === 'Never'}
                                onChange={this.onChangeQ15}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Weekly"
                                name="group11"
                                type="radio"
                                value="Weekly"
                                checked={this.state.question_15 === 'Weekly'}
                                onChange={this.onChangeQ15}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Monthly"
                                name="group11"
                                type="radio"
                                value="Monthly"
                                checked={this.state.question_15 === 'Monthly'}
                                onChange={this.onChangeQ15}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Bi annually"
                                name="group11"
                                type="radio"
                                value="Biannually"
                                checked={this.state.question_15 === 'Biannually'}
                                onChange={this.onChangeQ15}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="Annually"
                                name="group11"
                                type="radio"
                                value="Annually"
                                checked={this.state.question_15 === 'Annually'}
                                onChange={this.onChangeQ15}
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
                
                <br />
                <h2 className="titleHeader" style={{ marginBottom: '-1.5vw', marginLeft: '1vw'}}><b>
                    Living
                </b></h2>

                <Container className="surveyWidth">
                    {/* question #16 */}
                    <SurveySlider
                        number='16)' 
                        questionName='How many people live in your home (including yourself)?'
                        sliderValue={this.state.question_16}
                        updateValue={this.onChangeQ16}
                        minVal={0}
                        maxVal={8}
                        stepVal={1}
                    />

                    <br />

                    <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            17)&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            Do you recycle?
                        </b></h3>
                    </Row>
                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <Row>
                                <Form.Check
                                inline
                                label="Yes"
                                name="group12"
                                type="radio"
                                value="Yes"
                                checked={this.state.question_17 === 'Yes'}
                                onChange={this.onChangeQ17}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>
                            <Row>
                                <Form.Check
                                inline
                                label="No"
                                name="group12"
                                type="radio"
                                value="No"
                                checked={this.state.question_17 === 'No'}
                                onChange={this.onChangeQ17}
                                style={{
                                    fontSize: 'x-large',
                                    color: '#6279bc'
                                }}
                                />
                            </Row>

                            <br /><br />
                        </div>
                    </Container>

                </Container>
                <br /><br />

                {/* displays the correct button depending on if the user submitted all required fields or not */}
                <Container>
                    {button}
                </Container>

            </Container>
            </div>
        );
    }
}

export default surveyPage;
