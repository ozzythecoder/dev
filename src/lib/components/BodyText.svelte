<script>
  export let spotlight = false;
</script>

<p class={`body-text ${spotlight ? "spotlight-description" : ""}`}>
	<slot />
</p>

<style>
  .spotlight-description {
    /* outline: 1px solid white; */
    margin: 0.4rem 0 !important;
  }

  p :global(.center) {
    text-align: center;
    margin: 0.4rem 0;
  }

  :global(.callout) {
    text-align: center;
    font-style: italic;
    margin-top: 0.4rem;
    margin-bottom: 1rem;
  }

  :global(ul) {
    margin: 0;
  }

  :global(li) {
    margin: 0.3rem 0;
  }
</style>
