<script>
  export let direction;
</script>

<div class="container">
  <div class="spotlight-grid" style={`flex-direction: ${direction}`}>
    <article class="spotlight-content">
      <slot name="content" />
    </article>
    <aside class="spotlight-content spotlight-img">
      <slot name="picture" />
      <div class="picture-caption">
        <slot name="picture-caption" />
      </div>
    </aside>
  </div>
</div>

<style>

  :global(h3,h4) {
    text-align: center;
    margin: 0.5rem auto;
  }

  .container {
    margin: 0 auto;
  }

  .spotlight-grid {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  }

  .spotlight-content {
    width: 50%;
  }

  .spotlight-img {
    margin: auto 0;
  }

  aside {
    text-align: center;
  }
  
  aside :global(img) {
    max-height: 400px;
    max-width: 100%;
    border-radius: 6px;
  }

  .picture-caption :global(p) {
    margin-top: calc(8px + 1.5625vw);
    font-style: italic;
    color: #b7b7b7;
  }
  
  @media screen and (max-width: 600px) {
    .spotlight-grid {
      flex-direction: column-reverse !important;
      gap: 2rem;
    }

    .spotlight-content {
      width: 100%;
    }

    :global(.img-1) {
      max-height: 600px !important;
    }

    :global(.img-2) {
      display: none;
    }
  }
</style>