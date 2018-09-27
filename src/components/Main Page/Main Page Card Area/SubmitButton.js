import React, { Component } from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap';


class SubmitButton extends Component {

    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <Button type="submit">
                            {this.props.buttonTitle}
                        </Button>
                    </Col>
                </Row>
            </Grid>
            
        );
    }
}

export default SubmitButton;