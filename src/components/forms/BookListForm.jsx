import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Segment, Image, Icon, Item, Button, Divider } from 'semantic-ui-react';

import CardButton from '../buttons/BookFormListButton';
import { height } from 'window-size';

class BookListForm extends Component {
	state = {};

	render() {
		const { books } = this.props;
		console.log('book', this.props.book);
		return (
			<div className="bookStoreForm">
				<Segment>
					<Item.Group relaxed divided>
						{Object.values(books).map((book) => (
							<Item style={{ height: '250px' }}>
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
{
	/* <Card
							key={book._id}
							image={book.cover}
							header={book.title}
							meta={book.authors}
							style={{ width: '220px', height: '270px' }}
							extra={<CardButton book={book} />}
						/> */
}
{
	/* <Card style={{ width: '200px', height: '320px' }}>
							<Image src={book.cover} style={{ width: '200px', height: '200px' }} />
							<Card.Content>
								<Card.Header>{book.title}</Card.Header>
								<Card.Meta>{book.authors}</Card.Meta>
							</Card.Content>
							<Card.Content extra>
								<CardButton book={book} />
							</Card.Content>
						</Card> */
}
