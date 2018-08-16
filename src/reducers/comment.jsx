import { LOAD_COMMENT } from '../types';

export default function comments(state = {}, action = {}) {
	switch (action.type) {
		case LOAD_COMMENT:
			return action.comments;
		default:
			return state;
	}
}
