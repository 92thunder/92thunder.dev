type PostInfo= {
  id: string
  title: string
  mdFilename: string
  publishedAt: string
}

export const postsInfo: PostInfo[] = [
	{
		id: 'test',
		title: 'Test',
		mdFilename: 'test.md',
		publishedAt: (new Date()).toString()
	}
]