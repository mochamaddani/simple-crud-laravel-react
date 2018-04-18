import React, { Component } from 'react';
import { Modal, Button, FieldGroup, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Login extends Component {
  constructor(){
  	super();
  	this.state = {
  		email: '',
  		password: '',
  		errorEmail: null,
  		errorPassword: null,
  		isLoading: false,
  	}
  }

  _login(){
  	fetch('http://localhost:8000/api/login', {
	        method: 'POST',
	        headers: {
	          Accept: 'application/json',
	          'Content-Type': 'application/json',
	        },
	        body: JSON.stringify({
	          email: 'drmochamad7@gmail.com',
	          password: '134340',
	        }),
		      }).then(res => {
		        if (res.ok) {
		        	return res
		        }else{
		        	console.log('error tea')
		        }
		      })
	      .then(res => {
	        window.location.replace("http://localhost:8000/dashboard");
	}).catch((error) => {
		console.log(error);
	});
  }

  render() {
    return (
    	<div className="static-modal">
		  <Modal.Dialog>
		    <Modal.Header style={{justifyContent: 'center', flex: 1, display: 'flex'}}>
		      <Modal.Title>Login</Modal.Title>
		    </Modal.Header>

		    <Modal.Body>
		    	<form>
		    		<FormGroup
			          controlId="email"
			          validationState={this.state.errorEmail}
			        >
					    <FormControl
				            type="email"
				            placeholder="Enter Email"
				            onChange={(e) => {
				            	this.setState({ email: e.target.value });
				            }}
				        />
				        <FormControl.Feedback />
				        <HelpBlock>{this.state.errorEmail!=null ? 'This field is required' : ''}</HelpBlock>
				    </FormGroup>
					<FormGroup
			          controlId="password"
			          validationState={this.state.errorPassword}
			        >
					    <FormControl
				            type="password"
				            placeholder="Enter Password"
				            onChange={(e) => {
				            	this.setState({ password: e.target.value });
				            }}
				        />
				        <FormControl.Feedback />
				        <HelpBlock>{this.state.errorPassword!=null ? 'This field is required' : ''}</HelpBlock>
				    </FormGroup>
				    <Button onClick={() => {
				    	this._login();
			      	}} bsStyle={this.state.isLoading ? null : "success"} block disabled={this.state.isLoading}>Login</Button>
			      	<div style={{justifyContent: 'center', flex: 1, display: 'flex', flexDirection: 'row', marginTop: 10}}>
			      		<Button bsStyle="danger">Login with Google</Button>
			      		<Button bsStyle="primary">Login with Facebook</Button>
			      	</div>
				  </form>
		    </Modal.Body>
		  </Modal.Dialog>
		</div>
    );
  }
}

export default Login;
