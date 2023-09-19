<script>
  import '../lib/styles/styles.scss';
	import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  let ready = false;

  onMount(() => {
    ready = true;
  })

  export let data;
</script>

<svelte:head>
  <title>
    August McAllister
  </title>
</svelte:head>

{#key data.currentRoute}
  <div in:fade={{ duration: 400 }} out:fade={{ duration: 100 }} >
    <slot />
  </div>
{/key}
