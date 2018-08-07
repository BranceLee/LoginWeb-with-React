import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import SearchForm from '../forms/SearchForm';
import BookForm from '../forms/BookForm';
import { connect } from 'react-redux';
import { selectBook } from '../../actions/books';

class NewBooksPage extends Component {
	state = {
		book: null
	};

	// selectBook = (book) => this.props.selectBook(book).then(this.props.history.push('/books'));
	selectBook = (book) => this.setState({ book });

	addBook = (book) => console.log(book);

	render() {
		console.log('book', this.state.book);
		return (
			<div>
				<Segment>
					<h1>Add new book to your collection</h1>
					<SearchForm selectBook={this.selectBook} />
				</Segment>
				{this.state.book && <BookForm onSubmit={this.selectBook} book={this.state.book} />}
			</div>
		);
	}
}

export default connect(null, { selectBook })(NewBooksPage);
