import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactLoading from 'react-loading';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton, Table, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import './css/Dashboard.css'

class Dashboard extends Component {
  constructor(){
  	super();
  	this.state = {
  		fileData: [
  			{no: 1, fileName: 'Skirpsi S1 Sistem Komputer (Mobile POS)', owner: 'Mochamad Dani', size: '45.6 MB', fileType: 'Portable Document Format (.pdf)' },
  			{no: 2, fileName: 'Toy Story 3-Movie', owner: 'Mochamad Dani', size: '1.6 GB', fileType: 'Media Player (.mp4)' },
  		],
  		isLoading: true
  	}
  }

  componentWillMount(){
  	fetch('http://localhost:8000/api/check/auth')
  		.then(res => {
	        if (res.ok) {
	        	return res
	        }
	      })
      .then(res => res.json())
      .then(res => {
      	alert(res.data);
        if (res.data!='no_user') {
        	setTimeout(() => {
		  		this.setState({isLoading: false})
		  	}, 3700)
        }else{
        	window.location.replace("http://localhost:8000/sign-in");
        }
	}).catch((error) => {
		console.log(error);
	});
  	
  }

  render() {

    return (
    	<div>
    		<div className="appBar">
	    		<Navbar collapseOnSelect className="navBar">
				  <Navbar.Header>
				    <Navbar.Brand>
				      <a href="u/2/dashboard">DR7-App</a>
				    </Navbar.Brand>
				    <Navbar.Toggle />
				  </Navbar.Header>
				  <Navbar.Collapse>
				  <Nav>
				    <NavItem eventKey={2} href='upload'>
				      Upload File
				    </NavItem>
				  </Nav>
				  <Nav pullRight>
				    <NavDropdown eventKey={3} title={this.props.match.params.user} id="basic-nav-dropdown">
				      <MenuItem eventKey={3.1} href='profile'>Profile</MenuItem>
				      <MenuItem eventKey={3.2} href='user'>Change User</MenuItem>
				      <MenuItem divider />
				      <MenuItem eventKey={3.4} href='logout'>Logout</MenuItem>
				    </NavDropdown>
				  </Nav>
				  </Navbar.Collapse>
				</Navbar>
    		</div>
    		<div className="appContainer">
    		{ this.state.isLoading ?
    			<div style={{justifyContent: 'center', alignItems: 'center', flex: 1, display: 'flex', marginTop: 100, flexDirection: 'column'}}>
    				<ReactLoading type={'spin'} color={'#4286f4'} height={35} width={35} delay={0} />
    				<p style={{marginTop: 20, fontSize: 15}}>Loading data table, please wait...</p>
    			</div>
    			:
	    		<Table responsive>
				  <thead className="theadStyle">
				    <tr>
				      <th>#</th>
				      <th>File Name</th>
				      <th>Owner</th>
				      <th>Size</th>
				      <th>File Type</th>
				      <th>Action</th>
				    </tr>
				  </thead>
				  <tbody>
				  { this.state.fileData.map((item, i) => {
				  		return(
				  			<tr key={i}>
						      <td>{item.no}</td>
						      <td>{item.fileName}</td>
						      <td>{item.owner}</td>
						      <td>{item.size}</td>
						      <td>{item.fileType}</td>
						      <td>
						      	<ButtonToolbar>
								  <Button bsStyle="primary">Update</Button>
								  <Button bsStyle="danger">Delete</Button>
								</ButtonToolbar>
							  </td>
						    </tr>
				  		);
				  	})
				  }
				  </tbody>
				</Table>
			}
			</div>
    	</div>
    );
  }
}

export default Dashboard;