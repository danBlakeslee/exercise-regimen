import React, { Component } from 'react';
import {Navbar, Nav, Grid, Row, Col, Button} from 'react-bootstrap';


class ResultsTopBanner extends Component {
    render() {
        return (
            <div className="Footer">
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <Grid>
                            <Row>
                                <Col xs={12} m={12} lg={12}>
                                    <a href="#home">Change Selections</a>
                                </Col>
                            </Row>
                        </Grid>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}

export default ResultsTopBanner;