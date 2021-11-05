import React, { Component } from "react";
import ReactDOM from 'react-dom';

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import './style.css';

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { spacing } from '@mui/system';

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class surveyPage extends Component {
    // call constructor to be able to store data
    constructor(props) {
        super(props);

        this.onChangeNameField = this.onChangeNameField.bind(this);

        this.state = {
            user_name: '',
            question_1: null,

            record_id: null,
        }
    }

    onChangeNameField(e) {
        this.setState({
            user_name: e.target.user_name,
        });

        console.log(this.state.user_name);
    }
    
    render() {
        return (
            <div>
                <br /><br /><br />
                <br /><br /><br />

                <h2 className="centerTextBorder"><b>
                    Input Name
                </b></h2>
                
                <Container>
                    <Row className="surveySize">
                        <Form>
                            <Form.Control type="userName" placeholder="Enter email" onChange={this.onChangeNameField}/>
                        </Form>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default surveyPage;