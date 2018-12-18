import React, { Component } from 'react';
import { Button, Modal, OverlayTrigger } from 'react-bootstrap';
import RecommendationParameters from './RecommendationParameters';


class SelectionModal extends Component {
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

    buttonStyle = {textAlign: "center"}
    render() {
        return (
            <div style={this.buttonStyle}>
                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                    <span>Exercise</span>
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <h2>Let's Generate Your Recommendation</h2>
                    </Modal.Header>
                    <Modal.Body>
                        <RecommendationParameters closeModal={ this.handleClose }/>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default SelectionModal;
