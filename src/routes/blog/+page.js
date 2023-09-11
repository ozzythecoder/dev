export const load = async () => {
  const postFiles = Object.entries( import.meta.glob("../../posts/*.md") )

  const postData = await Promise.all(
    postFiles.map(async ([filePath, resolver]) => {
      const { metadata } = await resolver();
      console.log(filePath, metadata);
      const path = filePath.slice(1, -3).replace("/posts", "/blog")

      return {
        path, metadata 
      }
    })
  )

  return { postData }
}
