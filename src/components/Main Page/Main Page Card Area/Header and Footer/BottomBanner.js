import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';


class BottomBanner extends Component {
    render() {
        return (
            <div className="Footer">
                <Navbar inverse collapseOnSelect fixedBottom>
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default BottomBanner;
