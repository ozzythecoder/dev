<script>
  export let data;
  const { Content, metadata } = data;
  import BackArrow from '../../../lib/components/BackArrow.svelte';
</script>

<main>
  <nav>
    <BackArrow href={"/blog/"} />
  </nav>
  <header class="blog-header">
    <h2>{metadata.title}</h2>
    <p class="muted-date-text">{metadata.date ? `Posted ${metadata.date}` : ""}</p>
  </header>
    <hr />
  <article>
    <Content />
  </article>
  <BackArrow href={"/blog/"} />
</main>

<style lang="scss">
  @use '../../../lib/styles/text-colors';
  @use "../../../lib/styles/font-mixins";

  main {
    margin: 4rem 15%;
    max-width: 1000px;
  }

  nav {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (min-width: 760px) {
      left: 15%;
      transform: translateX(0);
    }
  }
  .blog-header {
    @media screen and (min-width: 760px) {
      margin: 1rem;
    }
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

  :global(h3) {
    margin: 1.3rem 0;
  }

  :global(pre) {
    padding: 1rem 1.5rem;
    background: rgb(37,37,37);
    background: linear-gradient(133deg, rgba(37,37,37,1) 0%, rgba(27,27,27,1) 50%, rgba(0,0,0,1) 100%);
    overflow-x: scroll;
    font-size: 14px;

    @media screen and (min-width: 760px) { 
      margin: 2rem 6rem;
      font-size: 14px;
    }
  }

  :global(p) {
    margin: 0.7rem 0 !important;
  }

  :global(hr) {
    max-width: 90%;
    margin: 1.3rem auto;
    border-color: text-colors.$text-muted; 
  }

  :global(p, ul, li, code) {
    @include font-mixins.font-size(font-mixins.$p-sizes);
  }
</style>
