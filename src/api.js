import axios from 'axios';

export function fetch(uri) {
	return new Promise((resolve, reject) => {
		axios.get(`https://jsonplaceholder.typicode.com${uri}`)
            .then(({ data }) => resolve(data))
			// .then(({ data }) => setTimeout(() => resolve(data), 1500))
			.catch((error) => reject(error));
	});
}
