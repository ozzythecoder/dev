<script>
  export let data;
  const { postData } = data;
</script>

<header>
  <h2>Blogust</h2>
</header>
<div class="post-grid">
  {#each postData as post}
    <article class="blog-post-preview">
      <a href={post.path} class="unstyled link" >
        <div class="post-link">
          <h2 class="link-highlight">{post.metadata?.title}</h2>
          <p class="date muted-text">{post.metadata?.date ?? ""}</p>
          <p>{post.metadata?.description}</p>
        </div>
      </a>
    </article>
  {/each}
</div>

<style lang="scss">

  header {
    margin: 2rem auto;
    text-align: center;
  }

  .post-grid {
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 0 auto;
    max-width: 1000px;
  }

  .blog-post-preview {
    max-height: 500px;

    .date {
      font-style: italic;
    }
  }

  .post-link {
    border: 1px solid gray;
    border-radius: 10px;
    margin: 5px;
    padding: 20px;
  }

</style>
