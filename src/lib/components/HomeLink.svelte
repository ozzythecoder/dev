<div class="home-container">
  <a href="/">
    <span class="home material-symbols-outlined"> cottage </span>
  </a>
</div>

<style>
	.home-container {
		position: relative;
    display: grid;
    place-items: center;
		margin: 0 auto;
    padding: 0;
		height: 2rem;
	}

	.home {
		cursor: pointer;
		user-select: none;
		color: white;
    padding: 0.3rem;
		text-decoration: none;
		transition: all 0.5s;
		transform: scale(1);
		background: transparent;
	}

	.home:hover {
		transform: scale(1.4);
		background: rgb(255, 255, 255, 0.2);
    border-radius: 6px;
	}
</style>
