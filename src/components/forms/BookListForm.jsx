import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Segment } from 'semantic-ui-react';

import CardButton from '../buttons/BookFormListButton';

class BookListForm extends Component {
	state = {};

	removeBook = () => {};

	render() {
		const { books } = this.props;
		return (
			<Segment>
				{Object.values(books).map((book) => (
					<Card
						key={book._id}
						image={book.cover}
						header={book.title}
						meta={book.authors}
						extra={<CardButton book={book} />}
					/>
				))}
			</Segment>
		);
	}
}

function mapStateToProps(state) {
	return {
		books: state.books
	};
}

export default connect(mapStateToProps)(BookListForm);
