// const postsJson = require('./posts.json')
import postsJson from './posts.json'
import fs from 'fs/promises'

type Post = {
	id: string
	title: string
	body: string
	published_at: string
}

type PostInfo= {
  id: string
  title: string
  mdFilename: string
  publishedAt: string
}

console.log(postsJson)
const postInfo: PostInfo[] = [] 
postsJson.forEach((post: Post) => {
	const fileName = `${post.published_at.split(' ')[0]}.md`
	postInfo.push({
		id: post.id,
		title: post.title,
		mdFilename: fileName,
		publishedAt: post.published_at,
	})
	fs.writeFile(`../posts/${fileName}`, post.body)
})

console.log(JSON.stringify(postInfo, null, 2))