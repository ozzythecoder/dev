<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition'

  let ready = false;

  onMount(() => ready = true)

</script>


<div class="center-hero"  >
  {#if ready}
  <h1 in:fly={{ duration: 500, x: 500 }}>
    hey, i'm august.
  </h1>
  {/if}
  <p>

    Things happen here
  </p>
  <a href="/about">
    Other page
  </a>
</div>
<style>

  .center-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
  }
</style>