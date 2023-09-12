<script>
  export let data;
  const { Content, metadata } = data;
</script>

<article>
  <h1>{metadata.title}</h1>
  <Content />
</article>

<style lang="scss">
  @use "../../../lib/styles/font-mixins";

  article {
    margin: 0 auto;
    max-width: 1000px;
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

  :global(p, ul, li) {
    @include font-mixins.font-size(font-mixins.$p-sizes);
  }
</style>
