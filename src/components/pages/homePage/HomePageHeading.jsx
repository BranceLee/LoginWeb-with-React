import React, { Component } from 'react';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HomePageHeading extends Component {
	state = {};
	render() {
		const { isLogin } = this.props;
		return (
			<Container text>
				<Header
					as="h1"
					content="Recomment Good Read "
					inverted
					style={{ fontSize: '4em', fontWeitht: 'normal', marginTop: '3em' }}
				/>
				<Header
					as="h2"
					content="Meet your next favorite book."
					inverted
					style={{ fontSize: '1.7em', fontWeiht: 'normal', marginTop: '1em' }}
				/>
				<Button size="huge" style={{ marginTop: '0.5em' }}>
					{isLogin ? (
						<Link to="/dashboard">
							Get Start To Read!<Icon name="right arrow" />
						</Link>
					) : (
						<Link to="/login">
							Get Start To Read!<Icon name="right arrow" />
						</Link>
					)}
				</Button>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		isLogin: !!state.user.token
	};
}

export default connect(mapStateToProps)(HomePageHeading);
