<script>
	import Background from 'components/background.svelte';
	import Header from 'components/header.svelte';
	import '../app.postcss';
	import { fade } from 'svelte/transition';
	// TODO: Find a way to make this work with SSR
	let opener = true;
	setTimeout(() => {
		opener = true;
	}, 1500);
</script>

<svelte:head>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Riley Smith" />
	<meta property="og:description" content="👋 hey, I'm Riley. Website Coming Soon™️" />
</svelte:head>
<!-- <div class="absolute h-screen w-full z-20" /> -->

<div class="absolute h-screen w-full z-20">
	{#if opener}
		<div class="flex flex-col mx-auto container h-full" in:fade={{ delay: 300 }}>
			<!-- <Header /> -->
			<slot />
		</div>
	{/if}
	{#if !opener}
		<div
			class="text-white bg-black absolute top-0 h-full w-full flex flex-col justify-center items-center"
			out:fade={{ duration: 250 }}
		>
			<div class="p-5">
				<h1 class="text-lg font-bold">👋 hey, I’m Riley.</h1>
				<p class="text-md text-left">
					I’m an experienced software developer who makes s#!t that performs.
				</p>
			</div>
		</div>
	{/if}
</div>

<!-- <Background /> -->
