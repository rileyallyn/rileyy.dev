import type { Post } from '$lib/utils/index.js';

export const load = async ({ fetch }) => {
	const res = await fetch(`/api/posts`);
	const { posts }: { posts: Post[] } = await res.json();
	return {
		posts
	}
}