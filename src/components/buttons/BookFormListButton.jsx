import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { removeBook, fetchBook } from '../../actions/books';

class BookFormListButton extends Component {
	state = {
		book: this.props
	};

	deleteBook = () => {
		const { book } = this.props;
		this.props.removeBook(book).then(() => this.props.fetchBook());
	};

	render() {
		return (
			<Button.Group>
				<Button>Like</Button>
				<Button.Or text="ou" />
				<Button onClick={this.deleteBook}>Delete</Button>
			</Button.Group>
		);
	}
}

export default connect(null, { removeBook, fetchBook })(BookFormListButton);
