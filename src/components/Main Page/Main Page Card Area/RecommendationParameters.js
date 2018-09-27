import React, { Component } from 'react';
import TargetMuscles from './TargetMuscles';
import Motivation from './Motivation';
import TimeInput from './TimeInput';
import SubmitButton from './SubmitButton';
import {Grid, Row, Col, Button} from 'react-bootstrap';


class RecommendationParameters extends Component {
    render() {
        return (
            <div>
               <TargetMuscles/><br/>
               <Motivation/><br/>
               <TimeInput/><br/>
               <Grid>
                   <Row>
                       <Col xsOffset={8} mdOffset={6} lgOffset={5}>
                            <Button bsStyle="primary">Exercise</Button> 
                       </Col>
                   </Row>
               </Grid>
               
            </div>
        );
    }
}

export default RecommendationParameters;
