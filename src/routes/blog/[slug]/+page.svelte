<script>
  export let data;

  const { Content, metadata } = data;
</script>

<header>
  {metadata.title}
</header>

<article>
  <Content />
</article>
<style>

</style>
