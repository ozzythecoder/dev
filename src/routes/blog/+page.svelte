<script>
	import HomeLink from "../../lib/components/HomeLink.svelte";

  export let data;
  const { postData } = data;
</script>

<header>
  <nav>
    <HomeLink />
  </nav>
  <h2>Blogust</h2>
</header>
<div class="post-grid">
  {#each postData as post}
    <article class="blog-post-preview">
      <a href={post.path} class="unstyled link" >
        <div class="post-link">
          <h2 class="blog-title link-highlight">{post.metadata?.title}</h2>
          <p class="date muted-text">{post.metadata?.date ?? "‎"}</p>
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

  header::after {
		content: '';
		position: fixed;
		top: 0;
		height: 100vh;
		left: 0;
		right: 0;
		z-index: -1;

		background: url('/CurveLine.svg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
		background-size: cover;
	}

  nav {
    position: absolute;
    top: 5%;
    left: 5%;
  }

  .post-grid {
    position: relative;
    display: flex column;
    margin: 0 auto;
    max-width: 1000px;
  }

  .blog-post-preview {
    margin: 10px 0;
    max-height: 500px;

    .date {
      font-style: italic;
    }
  }

  .blog-title {
    font-size: 24px;
    font-style: bold;

    @media screen and (min-width: 760px) {
      font-style: 32px;
    }
  }

  .post-link {
    border: 1px solid gray;
    border-radius: 10px;
    margin: 5px;
    padding: 20px;
    
    ::after {
      content: '';
      position: absolute;
      top: 0;
      height: 100%;
      left: 0;
      right: 0;
      z-index: -1;
      background-color: rgb(0, 0, 60);
    }
  }

</style>
