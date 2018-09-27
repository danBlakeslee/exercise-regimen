import React, { Component } from 'react';
import { Button, Modal, OverlayTrigger } from 'react-bootstrap';
import Forms from './Forms';
import {Grid, Row, Col} from 'react-bootstrap'

class LoginModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    buttonStyles = {color: "#272727"}

    render() {




        return (
            <div>
                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                    <span style={this.buttonStyles}>Log In</span>
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body>
                        <Forms />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default LoginModal;
