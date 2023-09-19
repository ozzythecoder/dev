<script>
  export let data;
  const { Content, metadata } = data;
  import BackArrow from '../../../lib/components/BackArrow.svelte';
</script>

<div id="container">
  <header>
    <nav>
      <BackArrow href={"/blog/"} />
    </nav>
    <h2>{metadata.title}</h2>
    <p class="muted-date-text">{metadata.date ? `Posted ${metadata.date}` : ""}</p>
    <hr class="initial-divider" />
  </header>
  <main>
    <article>
      <Content />
    </article>
    <BackArrow href={"/blog/"} />
  </main>
</div>

<style lang="scss">
  @use '../../../lib/styles/text-colors';
  @use "../../../lib/styles/font-mixins";

  #container {
    position: relative;
    margin: 0rem auto;
    max-width: 760px;
  }

  main {
    margin: 2rem 7% 4rem;
    @media screen and (min-width: 760px) {
      margin: 1rem auto 4rem;
    }
  }

  nav {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (min-width: 1000px) {
      top: 50%;
      left: -80px;
      transform: translateX(0) translateY(-50%);
    }
  }

  header {
    max-width: 760px;
    position: relative;
    padding-top: 3rem;
    margin: 0 7%;
    @media screen and (min-width: 1000px) {
      margin: 0 auto;
    }
  }

  .muted-date-text {
    color: text-colors.$text-muted;
    padding-top: 3px;
    font-style: italic;
  }

  article {
    @media screen and (min-width: 760px) {
      padding-top: 0.3rem;
    }

    :global(p) {
      margin: 0.7rem 0;
    }

    :global(h1) {
      @include font-mixins.font-size(font-mixins.$title-font-sizes);
    }
    :global(h2) {
      @include font-mixins.font-size(font-mixins.$h2-sizes);
    }

    :global(h3) {
      text-align: left;
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

    :global(hr) {
      max-width: 90%;
      margin: 1.3rem auto;
      border-color: text-colors.$text-muted; 
    }
  }

  .initial-divider {
    border: 1px solid rgb(90, 90, 90);
    max-width: 90%;
    margin: 1.3rem auto 0.3rem;

    @media screen and (min-width: 760px) {
      margin: 1.7rem auto 0.5rem;
    }
  }

</style>
