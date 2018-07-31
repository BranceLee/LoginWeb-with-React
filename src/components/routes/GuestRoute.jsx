import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestRoute = ({ isAuthenticated, component: Component, ...res }) => {
	// 设置路由跳转访问权限
	return (
		<Route
			{...res}
			render={(props) => (!isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />)}
		/>
	);
};

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.user.token
	};
}

export default connect(mapStateToProps)(GuestRoute);
