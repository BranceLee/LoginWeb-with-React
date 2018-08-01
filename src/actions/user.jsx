import { userLoggedIn } from './auth';
import api from '../api';

export const signUp = (user) => (dispatch) =>
	api.user.signUp(user).then((user) => {
		localStorage.bookworm = user.token;
		dispatch(userLoggedIn(user));
	});
