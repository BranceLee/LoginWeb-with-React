import api from '../api';
import { USER_LOOGGED_IN } from '../types';
import { USER_LOOGGED_OUT } from '../types';

export const userLoggedIn = (user) => ({
	type: USER_LOOGGED_IN,
	user
});

export const userLoggedOut = () => ({
	type: USER_LOOGGED_OUT
});

export const login = (data) => (dispatch) =>
	api.user.login(data).then((user) => {
		localStorage.bookworm = user.token;
		dispatch(userLoggedIn(user));
	});

export const logout = () => (dispatch) => {
	localStorage.removeItem('bookworm');
	dispatch(userLoggedOut());
};

export const confirm = (confirmToken) => (dispatch) =>
	api.user.confirmToken(confirmToken).then((user) => {
		localStorage.bookworm = user.token;
		dispatch(userLoggedIn(user));
	});

export const resetPasswordRequest = (data) => () => api.user.resetPasswordRequest(data);
//
export const validateToken = (token) => () => api.user.validateToken(token);

export const resetPassword = (data) => () => api.user.resetPassword(data);
