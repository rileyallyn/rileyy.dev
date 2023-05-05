<script lang="ts">
	export let data
  const { title, date, Content } = data
</script>

<a class="hover:text-blue-400 hover:cursor-pointer ml-10" href="/blog"> &lt- Go Back</a>
<div class="flex justify-center mt-10">
	<article class="flex flex-col">
		<div class="mb-10">
			<h1 class="text-6xl text-left">{title}</h1>
			<p class="text-md text-gray-400">{date}</p>
		</div>
		<Content />
	</article>
</div>
	