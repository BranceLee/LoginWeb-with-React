import { SELECT_BOOK } from '../types';

export default function books(state = {}, action = {}) {
	switch (action.type) {
		case SELECT_BOOK:
			return action.book;
		default:
			return state;
	}
}
