import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {

  try {

    const postFile = await import(`../../../posts/${params.slug}.md`)
    const Content = postFile.default;
    const { metadata } = postFile

    return {
      Content, metadata
    }
  } catch (e) {
    throw error(404, `${e}`)
  }
}
