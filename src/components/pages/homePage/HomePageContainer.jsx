import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Menu,
	Responsive,
	Segment,
	Sidebar
} from 'semantic-ui-react';
import '../../../homePage.css';
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
								<Menu.Item as="a">Homepage </Menu.Item>
								<Menu.Item as="a">New </Menu.Item>
								<Menu.Item as="a">Careers </Menu.Item>
								<Menu.Item position="right">
									{!isLogin ? (
										<Button inverted>
											<Link to="/login">Login</Link>
										</Button>
									) : (
										<Button onClick={logout} inverted>
											Logout
										</Button>
									)}
									<Button as="a" inverted primary style={{ marginLeft: '0.5em' }}>
										<Link to="/signup">Sigup</Link>
									</Button>
								</Menu.Item>
							</Container>
						</Menu>
						<Segment textAlign="center" style={{ minHeight: 620, padding: '1em 0em' }} vertical>
							<HomePageHeading />
						</Segment>
					</div>
				</div>
				<HomePageLayout />
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
