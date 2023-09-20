<script>
	import HomeLink from "../../lib/components/HomeLink.svelte";

  export let data;
  const { postData } = data;
  const sortedPosts = postData.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
</script>

<header>
  <nav>
    <HomeLink />
  </nav>
  <h1>Blog</h1>
</header>
<div class="post-grid">
  {#await data}
      <h3>...</h3>
    {:then}

    {#each sortedPosts as post}
      <article class="blog-post-preview">
        <a href={post.path} class="link unstyled" >
          <div class="post-link">
            <h2 class="blog-title link-highlight">{post.metadata.title}</h2>
            <p class="date muted-text">{post.metadata.date ?? "‎"}</p>
            <p>{post.metadata.description ?? "‎"}</p>
          </div>
        </a>
      </article>
    {/each}
  {/await}
</div>

<style lang="scss">
  @use '../../lib/styles/text-colors';
  @use '../../lib/styles/font-mixins';
  
  header {
    position: relative;
    margin: 2rem auto;
    text-align: center;
    max-width: 800px;

    h1 {
      @include font-mixins.font-size(font-mixins.$h2-sizes);
    }
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
		background-size: cover;
	}

  nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 7%;
  }

  .post-grid {
    position: relative;
    display: flex column;
    margin: 0 auto;
    max-width: 800px;
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

    p {
      margin: 0.3rem 0;
    }

    &:hover {
      background-color: rgb(27, 27, 60);
      border-color: text-colors.$text-accent;
    }
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
