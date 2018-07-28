import { axios } from 'axios';

export default {
	user: {
		login: (data) => axios.post('/api/auth', { data }).then((res) => res.data.user)
	}
};
