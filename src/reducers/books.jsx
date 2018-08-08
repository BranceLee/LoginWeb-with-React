import { LOAD_BOOK } from '../types';

export default function books(state = {}, action = {}) {
	switch (action.type) {
		case LOAD_BOOK:
			return action.book;
		default:
			return state;
	}
}
