<script>

  export let data;
  const { postData } = data;
</script>

<h1>Hey</h1>
<div>
  {#each postData as post}
    <a href={post.path} class="link unstyled" >

    <div class="post-link">
      <h2>{post.metadata?.title}</h2>
      <p>{post.metadata?.description}</p>
    </div>
    </a>
  {/each}
</div>

<style>
  h1 {
    font-size: 100px;
  }

  .post-link {
    border: 1px solid gray;
    border-radius: 10px;
    margin: 5px;
    padding: 20px;
  }
</style>
