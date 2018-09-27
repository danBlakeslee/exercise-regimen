import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, NavbarHeader, NavbarBrand, NavbarToggle, NavbarCollapse, Nav, NavItem, NavDropdown, MenuItem, Jumbotron } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    frontPageTextStyling = {color: "rgb(156, 156, 156)", position: "relative", left: "auto", right: "auto"}
    render() {
        return (
            <div style={this.frontPageTextStyling}>
                <Navbar inverse collapseOnSelect fixedBottom>
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse style={this.frontPageTextStyling}>
                        <Nav style={this.frontPageTextStyling}>
                            <Grid>
                                <Row className="text-center">
                                    <Link to="/about-us" style={this.frontPageTextStyling}>
                                        <span style={this.frontPageTextStyling}>About Us</span>
                                    </Link>
                                </Row>
                            </Grid>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
// cannot get the about us link to center or pull left with large or md columns. Css and other styling will not affect it. Align center does not work either
export default Footer;
