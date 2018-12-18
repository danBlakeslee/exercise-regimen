import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
class OutputRecommendations extends Component {
    
    render() {
        return (
            <div className="output">
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Your Recommendations</ControlLabel>
                <FormControl componentClass="textarea" readOnly />
              </FormGroup>      
            </div >
        );
    }
}

export default OutputRecommendations;
