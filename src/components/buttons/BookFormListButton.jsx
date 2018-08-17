import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Popup } from 'semantic-ui-react';
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
				<Popup
					trigger={
						<Button>
							<a
								href={`https://www.goodreads.com/book/title?id=${this.props.book.title}`}
								target="_blank"
							>
								<Icon name="cart arrow down" />
							</a>
						</Button>
					}
					header="Shop online"
					content="Buy the book now "
					on={[ 'hover', 'click' ]}
				/>

				<Button.Or text="丨" />
				<Button onClick={this.deleteBook}>
					<Icon name="trash alternate" />
				</Button>
			</Button.Group>
		);
	}
}

export default connect(null, { removeBook, fetchBook })(BookFormListButton);
