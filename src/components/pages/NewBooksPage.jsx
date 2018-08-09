import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import axios from 'axios';
import SearchForm from '../forms/SearchForm';
import BookForm from '../forms/BookForm';
import TopNavigation from '../navigation/TopNavigation';
import { connect } from 'react-redux';
import { selectBook } from '../../actions/books';

class NewBooksPage extends Component {
	state = {
		book: null
	};

	selectBook = (book) => {
		this.setState({ book });
		axios
			.get(`/api/books/fetchPages?goodreadsId=${book.goodreadsId}`)
			.then((res) => res.data.pages)
			.then((pages) => this.setState({ book: { ...book, pages } }));
	};

	addBook = (book) => {
		this.props.selectBook(book).then(() => this.props.history.push('/dashboard'));
	};

	render() {
		console.log('book', this.state.book);
		return (
			<div>
				<TopNavigation />
				<Segment>
					<h1>Add new book to your collection</h1>
					<SearchForm selectBook={this.selectBook} />
				</Segment>
				{this.state.book && <BookForm addBook={this.addBook} book={this.state.book} />}
			</div>
		);
	}
}

export default connect(null, { selectBook })(NewBooksPage);
