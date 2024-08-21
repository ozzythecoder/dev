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
        name: 'Skills',
        url: '/#skills'
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
      name: 'Blog',
      url: '/blog'
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
				<li in:fly={{ delay: 300 + idx * 300, duration: 800, x: 500, easing: circOut }}>
					<a class="link" prefetch href={link.url}>{@html link.name}</a>
				</li>
			{/each}
		{:else}
			<li>‎</li>
		{/if}
	</ul>
  <ul>
    {#if ready}
      {#each icons as icon}
        <li class="social-icon" in:fade={{ delay: 300 + links.length * 300, duration: 500 }} >
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
    flex-flow: row wrap;
    justify-content: center;
    padding-left: 0;
    margin: 1rem;
	}

	li {
		list-style: none;
		padding: 0 10px;
	}

  .social-icon {
    background: transparent;
    padding-top: 10px;
    padding-bottom: 8px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 10px;
    transform: scale(1);
    transition: 0.5s all;

    &:hover {
      transform: scale(1.3);
      background: rgb(255, 255, 255, 0.2);
    }
  }
</style>
