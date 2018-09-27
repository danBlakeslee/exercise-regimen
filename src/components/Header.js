import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, NavbarHeader, NavbarBrand, NavbarToggle, NavbarCollapse, Nav, NavItem, NavDropdown, MenuItem, Jumbotron } from 'react-bootstrap';
import CreateAccountModal from './CreateAccountModal';
import LoginModal from './LoginModal';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    render() {

        return (

            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Exercise Regimen</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#" onClick={this.handleShow}>
                            <LoginModal />
                        </NavItem>
                        <NavItem eventKey={2} href="#" onClick={this.handleShow}>
                            <CreateAccountModal />
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default Header;
