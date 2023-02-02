<script>
  export let ready;
  export let scrollTo;

  import { fade } from "svelte/transition";
</script>

{#if ready}
	<div class="down-arrow-container" in:fade={{ delay: 2000, duration: 500 }}>
		<a href={`#${scrollTo}`}>
			<span class="down-arrow material-symbols-outlined"> expand_more </span>
		</a>
	</div>
{:else}
	<div>‎</div>
{/if}

<style>
	.down-arrow-container {
		position: relative;
		margin: 0 auto;
    padding: 1rem;
		height: 2rem;
	}

	.down-arrow {
		text-align: center;
		position: absolute;
		cursor: pointer;
		user-select: none;

		color: white;
		text-decoration: none;
		transition: all 0.5s;
		transform: scale(1);
		background: transparent;
	}

	.down-arrow:hover {
		transform: scale(1.4);
		background: rgb(255, 255, 255, 0.2);
    border-radius: 6px;
	}
</style>