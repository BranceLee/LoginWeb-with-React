import api from '../api';
import { USER_LOOGGED_IN } from '../types';

export const userLoggedIn = (user) => ({
	type: USER_LOOGGED_IN,
	user
});

export const login = (data) => (dispatch) => api.user.login(data).then((user) => dispatch(userLoggedIn(user)));
