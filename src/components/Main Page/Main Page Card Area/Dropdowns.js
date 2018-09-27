import React, { Component } from 'react';
import {ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';



class Dropdowns extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Target Muscles"
        }
    }
    render() {
        return (
            <ButtonToolbar>
                <DropdownButton title={this.props.title} id="dropdown-size-medium">
                    <MenuItem eventKey="1">{this.props.firstOpt}</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="2">{this.props.secondOpt}</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="3">{this.props.thirdOpt}</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">{this.props.fourthOpt}</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="5">{this.props.fifthOpt}</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
        );
    }
}

export default Dropdowns;
