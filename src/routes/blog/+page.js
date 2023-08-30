export const load = async () => {
  const postFiles = Object.entries( import.meta.glob("../../posts/*.md") )

  const postData = await Promise.all(
    postFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      console.log(metadata);

      return {
        path, metadata 
      }
    })
  )

  return { postData }
}
