import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class CreateAccountLanding extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);
    
        this.state = {
          show: true
        };
      }
    
      handleDismiss() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

      messageHeadingStyle = {textAlign: "center"}
      render() {
        if (this.state.show) {
          return (
            <Alert bsStyle="success" onDismiss={this.handleDismiss}>
              <h4>Thank You for Creating an Account with Exercise Regimen!</h4>
              <p>
                Now that you have created an account, you can go to the recommendation generator, or back to the front page.
              </p><br/>
              <p>
                <Link to="/main-page">
                    <Button bsStyle="primary">Generate my Recommendations</Button>
                </Link>
                <span> or </span>
                
                <Link to="/">
                    <Button bsStyle="success" onClick={this.handleDismiss}>Return to Login</Button>
                </Link>
              </p>
            </Alert>
          );
        }
    
        return <Link to={"/"}><Button onClick={this.handleShow}>Show Alert</Button></Link>;
      }
    }

export default CreateAccountLanding;
