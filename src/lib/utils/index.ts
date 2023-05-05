export type PostModule = {
	default: {
		render: () => unknown,
		'$$render': () => unknown
	},
	metadata: {
		title: string;
		date: string;
	}
}

export type Post = {
	meta: PostModule["metadata"];
	path: string;
}

export const fetchMarkdownPosts = async (): Promise<Post[]> => {
  const allPostFiles = import.meta.glob<PostModule>('/src/routes/blog/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(11, -3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}