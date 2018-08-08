import { LOAD_BOOK } from '../types';
import api from '../api';

export const loadBook = (book) => ({
	type: LOAD_BOOK,
	book
});

export const selectBook = (book) => () => api.books.selectBook(book);

export const fetchBook = () => (dispatch) => api.books.loadBook().then((book) => dispatch(loadBook(book)));

export const removeBook = (book) => (dispatch) => api.books.removeBook(book).then((book) => dispatch(loadBook(book)));
