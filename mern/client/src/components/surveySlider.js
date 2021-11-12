import React, { Component } from "react";
import ReactDOM from 'react-dom';

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './style.css';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { display, fontSize, spacing } from '@mui/system';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import RangeSlider from 'react-bootstrap-range-slider'

class surveySlider extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Row style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <h3 style={{color: '#67ab62'}}><b>
                            {this.props.number}&nbsp;
                        </b></h3> 

                        <h3 style={{color: '#40579a'}}><b>
                            {this.props.questionName}
                        </b></h3>
                    </Row>

                    <Container style={{width: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <RangeSlider
                        tooltip='on'
                        tooltipPlacement='bottom'
                        value={this.props.sliderValue}
                        onChange={(e) => this.props.updateValue(e)}
                        min={this.props.minVal}
                        max={this.props.maxVal}
                        step={this.props.stepVal}
                        size='lg'
                        variant='success'
                        />
                    </Container>

                <br /><br />
            </div>
        );
    }
}

export default surveySlider