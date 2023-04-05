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
</style>
