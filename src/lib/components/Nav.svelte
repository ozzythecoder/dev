<script>
	import { onMount } from 'svelte';
	import { circOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	const links = [
    {
      name: 'Who am I?',
      url: '/#intro'
    },
    {
      name: 'Experience',
      url: '/#experience'
    },
    {
      name: 'Portfolio',
      url: '/#portfolio'
    },
    {
      name: 'Values',
      url: '/#values',
    },
	];

  const icons = [
    {
      name: 'GitHub',
      image: './icons/github.png',
      url: 'https://github.com/ozzythecoder'
    },
    {
      name: 'LinkedIn',
      image: './icons/linkedin.png',
      url: 'https://www.linkedin.com/in/august-mcallister/'
    }
  ]

	let ready = false;
	onMount(() => { ready = true });

</script>

<nav>
	<ul>
		{#if ready}
			{#each links as link, idx}
				<li in:fly={{ delay: 500 + idx * 500, duration: 800, x: 500, easing: circOut }}>
					<a class="link" href={link.url}>{@html link.name}</a>
				</li>
			{/each}
		{:else}
			<li>‎</li>
		{/if}
	</ul>
  <ul>
    {#if ready}
      {#each icons as icon, idx}
        <li in:fade={{ delay: 2500, duration: 500 }} >
          <a href={icon.url} target="_blank" rel="noreferrer">
            <img src={icon.image} style="height: 2rem;" alt={icon.name} />
          </a>
        </li>
      {/each}
    {:else}
      <li>‎</li>
    {/if}
  </ul>
</nav>

<style lang="scss">

	ul {
		display: flex;
		flex-direction: row;
    justify-content: center;
    padding-left: 0;
    margin: 1rem;
	}

	li {
		list-style: none;
		padding: 0 10px;
	}
</style>
