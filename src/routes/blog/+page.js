export const load = async () => {
  console.log('hitting load')
  const postFiles = Object.entries( import.meta.glob("../../posts/*.md") )

  const postData = await Promise.all(
    postFiles.map(async ([filePath, resolver]) => {
      const { metadata } = await resolver();
      const path = filePath.slice(1, -3).replace("/posts", "/blog")

      return {
        path, metadata 
      }
    })
  )

  console.log('ending load')

  return { postData }
}
