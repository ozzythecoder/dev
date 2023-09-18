<script>
  export let href;
</script>

<div class="back-arrow-container">
  <a {href}>
    <span class="back-arrow material-symbols-outlined"> arrow_back </span>
  </a>
</div>

<style>
	.back-arrow-container {
		position: relative;
    display: grid;
    place-items: center;
		margin: 0 auto;
    padding: 1rem;
		height: 2rem;
	}

	.back-arrow {
		cursor: pointer;
		user-select: none;
		color: white;
		text-decoration: none;
		transition: all 0.5s;
		transform: scale(1);
		background: transparent;
	}

	.back-arrow:hover {
		transform: scale(1.4);
		background: rgb(255, 255, 255, 0.2);
    border-radius: 6px;
	}
</style>
