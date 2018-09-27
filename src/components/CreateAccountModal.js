import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Forms from './Forms';

class CreateAccountModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            showModal: false
        };
    }

    handleClose = (event) => {
        event.preventDefault();
        this.setState({ showModal: false });
    }

    handleShow = (event) => {
        event.preventDefault();
        this.setState({ showModal: true });
    }


    buttonStyles = {color: "#272727"}


    render() {

        


        return (
            <div>

                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                    <span style={this.buttonStyles}>Create Account</span>
          </Button>

                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body>
                        <Forms 
                        createAccount={true}
                        closeModal={this.handleClose}
                        />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default CreateAccountModal;
