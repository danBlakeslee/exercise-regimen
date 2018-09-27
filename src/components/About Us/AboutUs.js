import React, { Component } from 'react';
import {Grid, Col, Row, PageHeader, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import BottomBanner from '../Main Page/Main Page Card Area/Header and Footer/BottomBanner'



class AboutUs extends Component {
    background = {backgroundColor: "#EDEDED", fontWeight: "bold", fontSize: "125%"}
    render() {
        return (
            <div style={this.background}>
            <Grid>
                <Row>
                    <Col>
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
                                                
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        
                        
                            
                        <PageHeader>
                        <br/>WELCOME TO EXERCISE REGIMEN!<br/> 
                        <small><Link to="/">Return to Login</Link></small>
                        </PageHeader>
                            
                        <span>
                            This is my first application using React.js<br/><br/>
                            It is similar to my Reading Recommendations application, as it takes in user input and offers recommendations.
                            However, this time it suggests exercises based on the input instead of books.<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            
                        </span>
                        
                        </div>
                    </Col>
                </Row>
            </Grid>
            <BottomBanner />
            </div>
        );
    }
}

export default AboutUs;