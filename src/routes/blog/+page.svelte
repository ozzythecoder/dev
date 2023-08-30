<script>

  export let data;
  const { postData } = data;
</script>

<h1>Hey</h1>
<div>
  {#each postData as post}
    <p>{post.metadata?.title}</p>
  {/each}
</div>

<style>
  h1 {
    font-size: 100px;
  }
</style>
