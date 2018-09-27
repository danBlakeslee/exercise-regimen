import React, { Component } from 'react';
import Dropdowns from './Dropdowns';
import {Grid, Col, Row} from 'react-bootstrap';



class Motivation extends Component {
    dropdownStyles = {padding: '100px'}
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={6} lg={6}>
                        <Dropdowns 
                        title="How Much Motivation Do You Have?"
                        firstOpt="I am highly motivated!"
                        secondOpt="I am motivated"
                        thirdOpt="I am lacking motivation"
                        fourthOpt="I have no motivation"
                        style={this.dropdownStyles}
                        />
                    </Col>
                </Row>
            </Grid>
            
        );
    }
}

export default Motivation;