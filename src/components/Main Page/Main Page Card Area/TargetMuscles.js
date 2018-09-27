import React, { Component } from 'react';
import Dropdowns from './Dropdowns';
import {Grid, Col, Row} from 'react-bootstrap';



class TargetMuscles extends Component {
    
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={6} lg={6}>
                        <Dropdowns 
                        title="What Part of Your Body Would You Like to Focus on Today?"
                        firstOpt="Upper Body"
                        secondOpt="Core"
                        thirdOpt="Heart/Cardio"
                        fourthOpt="Lower Body"
                        />
                    </Col>
                </Row>
            </Grid>
            
        );
    }
}

export default TargetMuscles;
