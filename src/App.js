import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Homepage from '../src/components/Homepage';
import Login from '../src/components/Login';
import Dashboard from '../src/components/Dashboard';
import UserRoute from '../src/components/routes/UserRoute';
import GuestRoute from '../src/components/routes/GuestRoute';

class App extends Component {
	render() {
		const { location } = this.props;
		return (
			<div className="ui container">
				<Route location={location} exact path="/" component={Homepage} />
				<GuestRoute location={location} exact path="/login" component={Login} />
				<UserRoute location={location} exact path="/dashboard" component={Dashboard} />
			</div>
		);
	}
}

export default App;
