import axios from 'axios';

export function fetch(uri) {
	return axios.get(`https://jsonplaceholder.typicode.com${uri}`).then(({ data }) => data);
}
