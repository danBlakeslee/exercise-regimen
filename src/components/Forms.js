import React, { Component } from 'react';
import { FormControl, FormGroup, Grid, Row, Col, Popover, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SubmitButton from './SubmitButton';




class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validationType: "error",
            password: "",
            username: "",
            confirmPassword: "",
            buttonTitle: "Log In",
            showPopover: false
           

        };
    }
    
    validateUsername = (event) => {
        event.preventDefault();
        const typedUsername = event.target.value;
        const localStorageUsername = localStorage.getItem("username");
        if (!this.props.createAccount && typedUsername == localStorageUsername) {
            this.setState({
                username: typedUsername
            });
        } else {
            this.setState({
                username: typedUsername
            });
        }
        
    }

   
    validatePassword = (event) => {
        event.preventDefault();
        const typedPassword = event.target.value;
        const localStoragePassword = localStorage.getItem("password");
        if (this.props.createAccount && typedPassword == localStoragePassword) {
            this.setState({
                password: typedPassword
            }, this.validateBothPasswords);
        } else {
            this.setState({
                password: typedPassword
            }, this.validateBothPasswords);
        }
        
    }


    confirmPassword = (event) => {
        event.preventDefault();
        this.setState({
            confirmPassword: event.target.value,
        }, this.validateBothPasswords);
        
    }
    
    validateCreatedAccount = (event) => {
        event.preventDefault();
        const registerUsername = this.state.username;
        const registerPassword = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        if (registerPassword === confirmPassword) {
            localStorage.setItem("username", registerUsername);
            localStorage.setItem("password", registerPassword);
            this.setState({showPopover: true})
        }
        
    }
   
    validateBothPasswords = () => {
        console.log("I'm Me");
        const typedPassword = this.state.password;
        console.log(this.state.password);
        const confirmPassword = this.state.confirmPassword;
        if(this.props.createAccount && typedPassword == confirmPassword) {
            this.setState({validationType: "success"})
            console.log("are you delayed?");
        } else {
            this.setState({validationType: "error"})
        }
    }
    

    render() {
        return (
            <form >

                <FormGroup
                    validationState={this.state.validationType}
                >
                    <h4>User Name</h4>
                    <FormControl
                        type="text"
                        placeholder="Username"
                        onChange={this.validateUsername}
                    /><br/>

                    <h4>Password</h4>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        onChange={this.validatePassword}
                    /><br/>
                    {this.props.createAccount ?
                        (<div>
                            <h4>Confirm Password</h4>
                            <FormControl
                                type="password"
                                placeholder="Confirm Password"
                                onChange={this.confirmPassword}
                            /><br/>
                            <Grid>
                                <Row>
                                    <Col xsOffset={8} mdOffset={6} lgOffset={5}>
                                        
                                            <SubmitButton 
                                                validateCreatedAccount={this.validateCreatedAccount}
                                                buttonTitle="Submit"
                                            /> 
                                            <div style={{ height: 120}}>
                                                {this.state.showPopover ? 
                                                    <Popover
                                                        id="popover-basic"
                                                        placement="left"
                                                        positionLeft={325}
                                                        positionTop={267}
                                                        title="Thanks for Registering!"
                                                    >    
                                                        <Link to="/">
                                                            <Button bsStyle="success" onClick={this.props.closeModal}>Return to Login</Button>
                                                        </Link>
                                                    </Popover> : ""
                                                }
                                            </div>                 
                                    </Col>
                                </Row>
                            </Grid>
                        </div>)
                        :   <Grid>
                                <Row>
                                    <Col xsOffset={8} mdOffset={6} lgOffset={5}>
                                        <Link to="/main-page">  
                                            <SubmitButton buttonTitle="Log In"/>
                                        </Link>
                                    </Col>
                                </Row>
                            </Grid>
                            
                                
                            
                    }
                    
                    

                </FormGroup>



            </form>

           

            
        );

    }
}

export default Forms;
