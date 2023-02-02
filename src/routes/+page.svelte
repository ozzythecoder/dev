<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	import Nav from '../lib/components/Nav.svelte';
	import DownArrow from '../lib/components/DownArrow.svelte';

	let ready = false;

	onMount(() => (ready = true));
</script>

<div class="center-hero">
	{#if ready}
		<h1 in:fly={{ duration: 800, x: 500, easing: circOut }}>hey, i'm august.</h1>
	{:else}
		<!-- placeholder for heading -->
		<h1>‎</h1>
	{/if}

	<Nav />
  <DownArrow {ready} />

</div>

<style>
	.center-hero {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;

    background: url('/CurveLine.svg')
			no-repeat center center fixed;
		background-size: cover;
    transition: 1s all;

		/* remove for production! 👇 */
		/* outline: 1px white solid; */
	}

	h1 {
		will-change: transform, opacity;
	}
</style>
