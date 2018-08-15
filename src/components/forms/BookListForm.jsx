import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Item, Divider } from 'semantic-ui-react';
import CardButton from '../buttons/BookFormListButton';

class BookListForm extends Component {
	state = {};

	render() {
		const { books } = this.props;
		return (
			<div className="bookStoreForm">
				<Segment>
					<Item.Group relaxed divided>
						{Object.values(books).map((book, index) => (
							<Item key={index} style={{ height: '250px' }}>
								<Item.Image size="small" src={book.cover} />
								<Item.Content verticalAlign="top">
									<Item.Header as="h2">{book.title}</Item.Header>
									<Item.Meta>{book.authors}</Item.Meta>
									<Item.Description>
										This summer is particularly oppressive, and not just because of the overwhelming
										heat. Social media feeds were a disorienting mess this Fourth of July: jubilant
										babies in sunglasses interspersed with reflective captions about what patriotism
										really means. Local, national, a is summer is particularly oppressive, and not
										just because of the overwhelming heat. Social media feeds were a disorienting
										mess this Fourth of July: jubilant babies in sunglasses interspersed with
										reflective captions about what patriotism really means. Local, national, a
									</Item.Description>
									<Item.Extra>
										<CardButton book={book} />
									</Item.Extra>
									<Divider />
								</Item.Content>
							</Item>
						))}
					</Item.Group>
				</Segment>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		books: state.books
	};
}

export default connect(mapStateToProps)(BookListForm);
