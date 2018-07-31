import { USER_LOOGGED_IN, USER_LOOGGED_OUT } from '../types';

export default function user(state = {}, action = {}) {
	switch (action.type) {
		case USER_LOOGGED_IN:
			return action.user;
		case USER_LOOGGED_OUT:
			return {};
		default:
			return state;
	}
}
