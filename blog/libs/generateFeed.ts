import fs from 'fs'
import { Feed } from 'feed'
import { Post } from '../types'
import { marked } from 'marked'

export const generateFeed = (posts: Post[]) =>  {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''
  const date = new Date()

  const author = {
    name: 'Ryota Kunisada',
    email: 'r.kunisada661@gmail.com',
    link: baseUrl,
  }

  const feed = new Feed({
    title: process.env.NEXT_PUBLIC_BASE_NAME || '',
    description: process.env.NEXT_PUBLIC_BASE_DISC,
    id: baseUrl,
    link: baseUrl,
    language: 'ja',
    image: `${baseUrl}/ogp.png`,
    copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
    author: author,
  })

  posts.forEach((post) => {
    const description: string = post.body.split('\n')[0] || post.title
    const url = `${baseUrl}/posts/${post.id}`
    feed.addItem({
      title: post.title,
      description: description,
      id: url,
      link: url,
      content: marked(post.body),
      date: new Date(post.published_at),
    })
  })

  fs.mkdirSync('./public/feeds', { recursive: true })
  fs.writeFileSync('./public/feeds/feed.xml', feed.rss2())
  fs.writeFileSync('./public/feeds/atom.xml', feed.atom1())
  fs.writeFileSync('./public/feeds/feed.json', feed.json1())
}
