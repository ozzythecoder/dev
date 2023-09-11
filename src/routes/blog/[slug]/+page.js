
export const load = async ({ params }) => {
  
  const postFile = await import(`../../../posts/${params.slug}.md`)
  console.log(postFile)
  const Content = postFile.default;
  const { metadata } = postFile

  return {
    Content, metadata
  }
}
