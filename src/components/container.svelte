<script>

  import { slide } from "svelte/transition";

</script>
<div
	class="h-[40rem] mt-5 translucent container p-4 flex flex-row"
	in:slide={{ duration: 500 }}
	out:slide
>
	<slot/>
</div>

<style>
	.translucent {
		background-color: rgba(16, 24, 35, 0.98);
		border-width: 1px;
		border-radius: 10px;
		border-color: white;
	}
</style>