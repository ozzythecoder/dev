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
    in:fly={{ duration: 800, x: 500, easing: circOut }}
    >hey, i'm august.</h1>
	{:else}
  <!-- placeholder for heading -->
		<h1>‎</h1>
	{/if}

  <Nav />

  {#if ready}
    <div
      class="down-arrow-container"
      in:fade={{ delay: 2000, duration: 500 }} 
    >
    <span
      class="down-arrow material-symbols-outlined"
    >
      expand_more
    </span>
    </div>
  {:else}
    <div>
      ‎
    </div>
  {/if}
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

  .down-arrow-container {
    position: relative;
    margin: 0 auto;
    height: 2rem;
  }
  
  .down-arrow {
    text-align: center;
    position: absolute;
    cursor: pointer;
    user-select: none;
    transition: all 0.5s;
    transform: scale(1);
    background: transparent;
  }

  .down-arrow:hover {
    transform: scale(1.4);
    background: rgb(255, 255, 255, 0.2);
  }

  h1 {
    will-change: transform, opacity;
  }
</style>