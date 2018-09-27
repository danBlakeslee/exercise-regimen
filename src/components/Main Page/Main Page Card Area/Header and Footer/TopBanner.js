import React, { Component } from 'react';
import {Navbar, Nav, Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './App.css';

class TopBanner extends Component {
   loginLinkStyles = {color: "white"}
    render() {
        return (
            <div>
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <Grid>
                            <Row>
                                <Col xs={3} m={2} lg={2}>
                                    <div styles={this.loginLinkStyles}> 
                                        <Link to="/">
                                        <span>Return to Login</span>
                                        </Link> 
                                    </div> 
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

export default TopBanner;
