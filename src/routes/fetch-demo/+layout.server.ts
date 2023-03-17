import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
	let url = 'https://jsonplaceholder.typicode.com/todos/1';
	const data = await fetch(url).then((res: { json: () => any }) => res.json());

	return {
		data
	};
};
