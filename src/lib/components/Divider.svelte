<script>
  export let hideOnSmall = false;
</script>

<div class="divider {hideOnSmall ? 'hideable' : ''}" />

<style>
  .divider {
    height: 1px;
    width: 100%;
    background-color: rgba(21, 51, 81, 1);
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  /* Hide in small viewport */
  @media screen and (max-width: 600px) {
		.hideable {
      visibility: hidden;
      margin: 0;
		}
	}
</style>