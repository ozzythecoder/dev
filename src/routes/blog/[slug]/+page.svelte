<script>
  export let data;
  const { Content, metadata } = data;
</script>

<main>
  <header class="blog-header">
    <h2>{metadata.title}</h2>
    <p class="muted-date-text">{metadata.date ? `Posted ${metadata.date}` : ""}</p>
  </header>
  <article>
    <Content />
  </article>
</main>

<style lang="scss">
  @use '../../../lib/styles/text-colors';
  @use "../../../lib/styles/font-mixins";

  main {
    margin: 0 auto;
    max-width: 1000px;
  }

  .blog-header {
    margin: 4rem 2rem;
  }

  .muted-date-text {
    color: text-colors.$text-muted;
    font-style: italic;
  }

  :global(h1) {
    @include font-mixins.font-size(font-mixins.$title-font-sizes);
  }

  :global(h2) {
    @include font-mixins.font-size(font-mixins.$h2-sizes);
  }

  :global(p) {
    margin: 0.7rem 0;
  }

  :global(hr) {
    max-width: 90%;
    margin: 1.3rem auto;
    border-color: text-colors.$text-muted; 
  }

  :global(p, ul, li) {
    @include font-mixins.font-size(font-mixins.$p-sizes);
  }
</style>
