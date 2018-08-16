import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Menu, Segment, Image, Dropdown } from 'semantic-ui-react';
import HomePageLayout from './HomePageLayout';
import HomePageHeading from './HomePageHeading';
import * as action from '../../../actions/auth';

class HomePageContainer extends Component {
	state = {};
	render() {
		const { isLogin, logout } = this.props;
		return (
			<div>
				<div id="home-heading">
					<div className="dark-overlay">
						<Menu fixed="top" size="large" inverted style={{ opacity: '0.79' }}>
							<Container>
								<Menu.Item>Homepage </Menu.Item>
								<Menu.Item>New </Menu.Item>
								<Menu.Item>Careers </Menu.Item>
								<Menu.Item position="right" style={{ padding: 0 }}>
									{!isLogin ? (
										<Button inverted>
											<Link to="/login">Login</Link>
										</Button>
									) : (
										<Dropdown
											trigger={
												<Image
													circular
													src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
												/>
											}
										>
											<Dropdown.Menu>
												<Dropdown.Item onClick={logout}>LogOut</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									)}
									{!this.props.isLogin && (
										<Button inverted primary style={{ marginLeft: '0.5em' }}>
											<Link to="/signup">Sigup</Link>
										</Button>
									)}
								</Menu.Item>
							</Container>
						</Menu>
						<Segment textAlign="center" style={{ padding: '1em 0em' }} vertical>
							<HomePageHeading />
						</Segment>
					</div>
				</div>
				<HomePageLayout />
				<div style={{ marginTop: '100px' }} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		isLogin: !!state.user.token
	};
}

export default connect(mapStateToProps, { logout: action.logout })(HomePageContainer);
