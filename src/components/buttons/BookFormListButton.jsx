import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { removeBook } from '../../actions/books';

class BookFormListButton extends Component {
	state = {};

	deleteBook = () => {
		const { book } = this.props;
		this.props.removeBook(book);
	};

	render() {
		console.log(this.props.book);
		return (
			<Button.Group>
				<Button>Like</Button>
				<Button.Or text="ou" />
				<Button onClick={this.deleteBook}>Delete</Button>
			</Button.Group>
		);
	}
}

export default connect(null, { removeBook })(BookFormListButton);
