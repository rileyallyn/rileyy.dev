<script lang="ts">
	import Container from 'components/container.svelte';
	import { goto } from '$app/navigation';
	export let data;
</script>

<Container>
	<ul>
		{#each data.posts as post}
			<li>
					<div class="flex flex-col p-14 border-2 border-blue-500 rounded-lg bg-black justify-left">
						<h1 class="text-xl text-left">
							<a class="hover:text-blue-400" href={post.path}>
								{post.meta.title}
							</a>
						</h1>

						<p class="text-xs text-gray-500 text-center">{post.meta.date}</p>
					</div>
			</li>
		{/each}
	</ul>
</Container>
