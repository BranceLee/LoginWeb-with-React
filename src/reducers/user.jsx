import { USER_LOOGGED_IN } from '../types';

export default function user(state = {}, action = {}) {
	switch (action.type) {
		case USER_LOOGGED_IN:
			return action.user;
		default:
			return state;
	}
}
