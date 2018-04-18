import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './src/Dashboard';
import Login from './src/Login';

class Main extends Component {
  constructor(){
  	super();
  	
  }

  render() {
    return (
    	<Router>
            <div>
               <Switch>
                  <Route exact path='/dashboard' component={Dashboard} />
                  <Route exact path='/sign-in' component={Login} />
               </Switch>
            </div>
         </Router>
    );
  }
}

export default Main;


/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}