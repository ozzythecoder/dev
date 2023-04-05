<script>
  export let direction;
</script>

<div class="container">
  <div class="spotlight-grid" style={`flex-direction: ${direction}`}>
    <article class="spotlight-content">
      <slot name="content" />
    </article>
    <aside class="spotlight-content">
      <slot name="picture" />
      <div class="picture-caption">
        <slot name="picture-caption" />
      </div>
    </aside>
  </div>
</div>

<style>

  :global(h3) {
    text-align: center;
  }

  .container {
    margin: 0 auto;
  }

  .spotlight-grid {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .spotlight-content {
    width: 50%;
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
    margin-top: 1rem;
    font-style: italic;
  }
  
  @media screen and (max-width: 600px) {
    .spotlight-grid {
      flex-direction: column-reverse;
    }

    .spotlight-content {
      width: 100%;
    }

    aside :global(img) {
      width: 80%;
    }
  }
</style>