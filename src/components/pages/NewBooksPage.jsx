import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import SearchForm from '../forms/SearchForm';
import { connect } from 'react-redux';
import { selectBook } from '../../actions/books';

class NewBooksPage extends Component {
	state = {};

	selectBook = (book) => this.props.selectBook(book).then(this.props.history.push('/books'));

	render() {
		return (
			<Segment>
				<h1>Add new book to your collection</h1>
				<SearchForm selectBook={this.selectBook} />
			</Segment>
		);
	}
}

export default connect(null, { selectBook })(NewBooksPage);
