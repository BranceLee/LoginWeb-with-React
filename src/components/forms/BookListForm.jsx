import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Segment } from 'semantic-ui-react';

import CardButton from '../buttons/BookFormListButton';
import { height } from 'window-size';

class BookListForm extends Component {
	state = {};

	render() {
		const { books } = this.props;
		console.log('book', this.props.book);
		return (
			<Segment className="bookStoreForm">
				{Object.values(books).map((book) => (
					<div style={{ margin: '1rem', display: 'inline-block' }}>
						<Card
							key={book._id}
							image={book.cover}
							header={book.title}
							meta={book.authors}
							style={{ width: '220px', height: '300px' }}
							extra={<CardButton book={book} />}
						/>
					</div>
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
