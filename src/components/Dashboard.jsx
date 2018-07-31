import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
	state = {};
	render() {
		return (
			<div>
				<div>
					<h1>Good Job, Let`s Start to read</h1>
				</div>
				<Button>
					<Link to={'/'}>Back To HomePage</Link>{' '}
				</Button>
			</div>
		);
	}
}

// function mapStateToProps(state) {
// 	isConfirmed: state.user.isConfirmed;
// }

export default connect()(Dashboard);
