<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	import Nav from '../lib/components/Nav.svelte';
	import DownArrow from '../lib/components/DownArrow.svelte';
	import Article from '../lib/components/Article.svelte';

	let ready = false;

	onMount(() => (ready = true));
</script>

<header class="center-hero">
	{#if ready}
		<h1 in:fly={{ duration: 800, x: 500, easing: circOut }}>hey, i'm august.</h1>
	{:else}
		<!-- placeholder for heading -->
		<h1>‎</h1>
	{/if}

	<Nav />
	<DownArrow {ready} scrollTo="experience" />
</header>

<section>

  <Article scrollID="experience">
    <h2>Experience</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat harum et veritatis culpa! Vitae, soluta. Iure reprehenderit minima officia? Unde ipsam nostrum, numquam cupiditate molestiae libero suscipit vero harum beatae deserunt. Accusamus, optio aut ullam odit blanditiis expedita esse, nam commodi cumque reiciendis dicta officiis aliquam eaque hic quaerat non numquam ea aperiam veniam, quibusdam fugiat! Quam, libero aut rem distinctio inventore sint nemo dolores iure ipsum tempore vel incidunt dicta quod rerum error expedita pariatur. Consequatur libero hic assumenda? Nihil nobis corrupti vel distinctio pariatur facere animi porro perspiciatis cumque asperiores, dolor excepturi accusantium officia assumenda praesentium quaerat!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat harum et veritatis culpa! Vitae, soluta. Iure reprehenderit minima officia? Unde ipsam nostrum, numquam cupiditate molestiae libero suscipit vero harum beatae deserunt. Accusamus, optio aut ullam odit blanditiis expedita esse, nam commodi cumque reiciendis dicta officiis aliquam eaque hic quaerat non numquam ea aperiam veniam, quibusdam fugiat! Quam, libero aut rem distinctio inventore sint nemo dolores iure ipsum tempore vel incidunt dicta quod rerum error expedita pariatur. Consequatur libero hic assumenda? Nihil nobis corrupti vel distinctio pariatur facere animi porro perspiciatis cumque asperiores, dolor excepturi accusantium officia assumenda praesentium quaerat!
    </p>
  </Article>
</section>

<style>
	.center-hero {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;

		background: url('/CurveLine.svg') no-repeat center center fixed;
		background-size: cover;

		/* remove for production! 👇 */
		/* outline: 1px white solid; */
	}

	h1 {
		will-change: transform, opacity;
	}
</style>
