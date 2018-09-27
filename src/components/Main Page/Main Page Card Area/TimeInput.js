import React, { Component } from 'react';
import Dropdowns from './Dropdowns';
import {Grid, Col, Row} from 'react-bootstrap';



class TimeInput extends Component {
    
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={6} md={6} lg={6}>
                        <Dropdowns 
                        title="How Much Time Can You Spare Today?"
                        firstOpt="More than 4 Hours"
                        secondOpt="Between 2 and 4 Hours"
                        thirdOpt="Between 30mins and 1 Hour"
                        fourthOpt="Between 15 mins and 30 mins"
                        fifthOpt="15 mins or less"
                        />
                    </Col>
                </Row>
            </Grid>
            
        );
    }
}

export default TimeInput;