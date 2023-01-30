<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { circOut, linear } from 'svelte/easing';
	import Nav from '../lib/components/Nav.svelte';

	let ready = false;

	onMount(() => (ready = true));
</script>

<div class="center-hero">
	{#if ready}
		<h1
    in:fly={{ duration: 800, x: 500 }}
    >hey, i'm august.</h1>
	{:else}
  <!-- placeholder for heading -->
		<h1>‎</h1>
	{/if}

  <Nav />

</div>

<style>
	.center-hero {
    position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
    outline: 1px white solid;
	}

  h1 {
    will-change: transform, opacity;
  }
</style>