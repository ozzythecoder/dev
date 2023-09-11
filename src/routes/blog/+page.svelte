<script>
  export let data;
  const { postData } = data;
</script>

<header>
  <h1>Blogust</h1>
</header>
<div>
  {#each postData as post}
    <article class="blog-post-preview">
      <a href={post.path} class="link unstyled" >
        <div class="post-link">
          <h2>{post.metadata?.title}</h2>
          <p>{post.metadata?.description}</p>
        </div>
      </a>
    </article>
  {/each}
</div>

<style>
  h1 {
    text-align: center;
  }

  .blog-post-preview {
    margin: 0 auto;
    max-width: 1000px;
  }

  .post-link {
    border: 1px solid gray;
    border-radius: 10px;
    margin: 5px;
    padding: 20px;
  }
</style>
