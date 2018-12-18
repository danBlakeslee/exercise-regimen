import React, { Component } from 'react';
import {Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap';
import "./Header and Footer/App.css";
import SelectionModal from './SelectionModal';





class IntroductionJumbotron extends Component {
    headingStyles = {textAlign: "center"}
    descriptionStyles = {textAlign: "center", fontSize: "120%", fontWeight: "bold"}
    render() {
        return (
            <Jumbotron>
                <h1 style={this.headingStyles}>Let's See How You Should Exercise Today!</h1><br/><br/>
                
                <Grid>
                    <Row>
                        <Col xs={12}>
                        <p className="jumbotron-styles" style={this.descriptionStyles}>
                            To use this tool, select your target muscles, your motivation level, and your availability.
                        </p>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        <Col xs={12}>
                        <p className="jumbotron-styles" style={this.descriptionStyles}>
                            The application recommend the type of exercises to complete and how long you should do them.
                        </p>
                        </Col>
                    </Row>
                </Grid>
                
                <SelectionModal/>
            </Jumbotron>
            
        );
    }
}

export default IntroductionJumbotron;