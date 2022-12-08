type PostInfo= {
  id: string
  title: string
  mdFilename: string
  publishedAt: string
}

export const postsInfo: PostInfo[] = [
	{
		id: '8e3e28ed-2b71-4900-a6eb-838e2c48fec2',
		title: '2022年の抱負',
		mdFilename: '2022-01-15.md',
		publishedAt: (new Date('2022/01/15')).toString()
	},
	{
		id: 'test',
		title: 'Test',
		mdFilename: 'test.md',
		publishedAt: (new Date()).toString()
	}
]