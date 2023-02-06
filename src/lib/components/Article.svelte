<script>
export let scrollID;

</script>


<article id={scrollID}>
  <div class="card">
    <slot />
  </div>
</article>

<style>
  article {
    min-height: 100vh;
  }

  .card {
    /* outline: 1px solid white; */

    margin: 0 auto;
    padding: 2rem 10%;
    max-width: 1000px;
  }

  .card :global(h2) {
    margin: 2rem 3rem 2rem 3rem;
  }

  .card :global(p) {
    margin: 1.3rem 0;
  }

  .card :global(.center) {
    text-align: center;
  }
</style>