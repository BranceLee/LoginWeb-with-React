import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message, Card, Icon } from 'semantic-ui-react';
import BookList from './forms/BookListForm';
import { Link } from 'react-router-dom';
import { fetchBook } from '../actions/books';

class Dashboard extends Component {
	state = {};

	componentDidMount() {
		this.props.fetchBook();
	}

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
				<BookList />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		isConfirmed: !!state.user.confirmed
	};
}

export default connect(mapStateToProps, { fetchBook })(Dashboard);
