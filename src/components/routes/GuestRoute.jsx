import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// 根据token ,跳转页面显示 ,可多次被调用
const GuestRoute = ({ isAuthenticated, component: Component, ...res }) => {
	return (
		<Route
			{...res}
			component={(props) => (!isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />)}
		/>
	);
};

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.user.token
	};
}

export default connect(mapStateToProps)(GuestRoute);
