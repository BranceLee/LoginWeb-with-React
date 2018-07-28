import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Homepage from '../src/components/Homepage';
import Login from '../src/components/Login';

class App extends Component {
	render() {
		return (
			<div className="ui container">
				<Route exact path="/" component={Homepage} />
				<Route exact path="/login" component={Login} />
			</div>
		);
	}
}

export default App;
