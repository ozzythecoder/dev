<script>
  export let data;
  const { Content, metadata } = data;
</script>

<header>
  {metadata.title}
</header>
<article>
  <Content ref="blog" class="dude" />
</article>

<style lang="scss">

</style>
