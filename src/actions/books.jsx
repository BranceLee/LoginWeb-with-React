import { SELECT_BOOK } from '../types';
import api from '../api';

export const loadBook = (book) => ({
	type: SELECT_BOOK,
	book
});

export const selectBook = (book) => (dispatch) => api.books.selectBook(book).then((book) => dispatch(loadBook(book)));
