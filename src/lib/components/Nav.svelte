<script>
	import { onMount } from 'svelte';
	import { circOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const links = [
		{
			name: 'GitHub',
			url: 'http://www.github.com/ozzythecoder/'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/august-mcallister/'
		}, {
      name: 'Latest Project',
      url: 'https://github.com/ozzythecoder/flyby-events-solo-project'
    }
	];

	let ready = false;
	onMount(() => { ready = true });

</script>

<nav>
	<ul>
		{#if ready}
			{#each links as link, idx}
				<li in:fly={{ delay: 500 + idx * 500, duration: 800, x: 500, easing: circOut }}>
					<a href={link.url}>{link.name}</a>
				</li>
			{/each}
		{:else}
			<li>&nbsp;</li>
		{/if}
	</ul>
</nav>

<style lang="scss">
	ul {
		display: flex;
		flex-direction: row;
	}

	li {
		list-style: none;
		padding: 0 10px;
	}
</style>
