import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Message, Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
	state = {};
	render() {
		const { isConfirmed } = this.props;
		return (
			<div>
				{!isConfirmed && (
					<Message info>
						<Message.Header>Please verify your email to unlock</Message.Header>
					</Message>
				)}

				<Card centered>
					<Card.Content textAlign="center">
						<Card.Header>Add Books</Card.Header>
						<Link to="/books/new">
							<Icon name="plus circle" size="massive" />>
						</Link>
					</Card.Content>
				</Card>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { isConfirmed: !!state.user.confirmed };
}

export default connect(mapStateToProps)(Dashboard);
