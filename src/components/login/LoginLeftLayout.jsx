import React, { Component } from 'react';
import { Item, Container, Rating, Segment, Grid } from 'semantic-ui-react';
import { data } from '../../utils/textData';

class LoginLeftLayout extends Component {
	state = {
		data: data
	};

	render() {
		console.log('data', data);
		return (
			<div className="loginLeft">
				<div className="loginLeftContainer">
					<Container>
						<h1>榜单推荐</h1>
						<Item.Group>
							{this.state.data.map((item, key) => (
								<Segment key={key} style={{ margin: 0 }}>
									<Grid>
										<Grid.Row>
											<Grid.Column width={4}>
												<Item.Image size="small" src={item.src} />
											</Grid.Column>
											<Grid.Column width={12}>
												<Item>
													<Item.Content>
														<Item.Header as="h2">{item.header}</Item.Header>
														<Item.Meta>{`作者： ${item.author}`}</Item.Meta>
														<Item.Content>{`内容简介：  ${item.description}`}</Item.Content>
														<br />
														<Item.Content>
															评价：
															<Rating
																disabled
																icon="star"
																defaultRating={4}
																maxRating={5}
															/>
															<span> {item.rating}</span>
														</Item.Content>
													</Item.Content>
												</Item>
											</Grid.Column>
										</Grid.Row>
									</Grid>
								</Segment>
							))}
						</Item.Group>
					</Container>
				</div>
			</div>
		);
	}
}

export default LoginLeftLayout;
