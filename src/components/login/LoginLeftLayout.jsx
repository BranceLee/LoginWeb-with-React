import React, { Component } from 'react';
import { Item, Image, Container } from 'semantic-ui-react';

class LoginLeftLayout extends Component {
	state = {
		data: [ 1, 1, 1 ]
	};

	render() {
		return (
			<div className="loginLeft">
				<div className="loginLeftContainer">
					<Container>
						<Item.Group>
							{this.state.data.map((item, key) => (
								<Item key={key} style={{}}>
									<Item.Content>
										<Item.Header as="a">Header</Item.Header>
										<Item.Meta>Description</Item.Meta>
										<Item.Description>
											<Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
										</Item.Description>
										<Item.Extra>Additional Details</Item.Extra>
									</Item.Content>
									<Item.Image
										size="small"
										src="https://react.semantic-ui.com/images/wireframe/image.png"
									/>
								</Item>
							))}
						</Item.Group>
					</Container>
				</div>
			</div>
		);
	}
}

export default LoginLeftLayout;
