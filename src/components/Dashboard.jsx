import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
	state = {};
	render() {
		const { isConfirmed } = this.props;
		return (
			<div>
				{isConfirmed ? <h1>Old customer</h1> : <h1>Please Verify In Your Email</h1>}

				<Button>
					<Link to={'/'}>Back To HomePage</Link>{' '}
				</Button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { isConfirmed: !!state.user.isConfirmed };
}

export default connect(mapStateToProps)(Dashboard);
