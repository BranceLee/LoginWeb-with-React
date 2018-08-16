import { combineReducers } from 'redux';
import user from './reducers/user';
import books from './reducers/books';
import comments from './reducers/comment';

export default combineReducers({
	user,
	books,
	comments
});
