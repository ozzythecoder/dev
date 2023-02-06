<script>
  export let scrollTo = "top"
</script>

<div class="arrow-container">
  <a href={`#${scrollTo}`}>
    <span class="arrow material-symbols-outlined"> expand_less </span>
  </a>
</div>

<style>
  .arrow-container {
		position: relative;
    display: grid;
    place-items: center;
		margin: 0 auto;
    padding: 1rem;
		height: 2rem;
	}

	.arrow {
		cursor: pointer;
		user-select: none;

		color: white;
		text-decoration: none;
		transition: all 0.5s;
		transform: scale(1);
		background: transparent;
	}

	.arrow:hover {
		transform: scale(1.4);
		background: rgb(255, 255, 255, 0.2);
    border-radius: 6px;
	}
</style>