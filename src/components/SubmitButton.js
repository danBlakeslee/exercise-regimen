import React, { Component } from 'react';
import {Button} from 'react-bootstrap';


class SubmitButton extends Component {
    constructor(){
        super();

        this.state = {
            clicked: "false"
        }
    }
       
    handleClick = (event) => {
        event.preventDefault();
        this.setState({clicked: "true"})
    }

        
    render() {
        return (
            <Button type="submit" bsStyle="primary" onClick={this.props.validateCreatedAccount}>
             {this.props.buttonTitle}
            </Button>
        );
    }
}

export default SubmitButton;