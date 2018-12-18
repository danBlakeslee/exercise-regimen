import React, { Component } from 'react';
import SubmitButton from './SubmitButton';
import {Grid, Row, Col, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';


class RecommendationParameters extends Component {
    
    
    
    render() {
        return (
            <div>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>What Part of Your Body Would You Like to Focus on Today?</ControlLabel>
                    <FormControl componentClass="select" placeholder="What Part of Your Body Would You Like to Focus on Today?">
                        <option value="other">...</option>
                        <option value="other">Upper Body</option>
                        <option value="other">Core</option>
                        <option value="other">Heart/Cardio</option>
                        <option value="other">Lower Body</option>
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>How Much Motivation Do You Have?</ControlLabel>
                    <FormControl componentClass="select" placeholder="How Much Motivation Do You Have?">
                        <option value="other">...</option>
                        <option value="other">I am highly motivated!</option>
                        <option value="other">I am motivated</option>
                        <option value="other">I am lacking motivation</option>
                        <option value="other">I have no motivation :(</option>
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>How Much Time Can You Spare Today?</ControlLabel>
                    <FormControl componentClass="select" placeholder="How Much Time Can You Spare Today?">
                        <option value="other">...</option>
                        <option value="other">More than 4 hours</option>
                        <option value="other">Between 2 and 4 hours</option>
                        <option value="other">Between 30 minutes and 1 hour</option>
                        <option value="other">Between 15 minutes and 30 mins</option>
                        <option value="other">15 minutes or less</option>
                    </FormControl>
                </FormGroup>
               <Grid>
                   <Row>
                       <Col xsOffset={8} mdOffset={6} lgOffset={5}>
                            <Button bsStyle="primary" onClick={this.props.closeModal}>Exercise</Button> 
                       </Col>
                   </Row>
               </Grid>
               
            </div>
        );
    }
}

export default RecommendationParameters;
