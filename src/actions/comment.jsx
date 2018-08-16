import api from '../api';
import { LOAD_COMMENT } from '../types';

export const loadComment = (comments) => {
	return {
		type: LOAD_COMMENT,
		comments
	};
};

export const getComment = () => (dispatch) =>
	api.comments.getComment().then((comments) => dispatch(loadComment(comments)));

export const addComment = (comment) => () => api.comments.addComment(comment);
