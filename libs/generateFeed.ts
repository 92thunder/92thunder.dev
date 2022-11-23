import fs from 'fs'
import { Feed } from 'feed'
import { Post } from '../types'

export const generateFeed = (posts: Post[]) =>  {
  const baseUrl = 'https://92thunder.dev'
  const date = new Date()

  const author = {
    name: 'Ryota Kunisada',
    email: 'r.kunisada661@gmail.com',
    link: baseUrl,
  }

  const feed = new Feed({
    title: '92thunder.dev',
    description: 'Ryota Kunisada@92thunder Blog',
    id: baseUrl + '/',
    link: baseUrl,
    language: 'ja',
    image: `${baseUrl}/ogp.png`,
    copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/feeds/feed.xml`,
      json: `${baseUrl}/feeds/feed.json`,
      atom: `${baseUrl}/feeds/atom.xml`,
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
      date: new Date(post.publishedAt),
    })
  })

  fs.mkdirSync('./public/feeds', { recursive: true })
  fs.writeFileSync('./public/feeds/feed.xml', feed.rss2(), 'utf-8')
  fs.writeFileSync('./public/feeds/atom.xml', feed.atom1(), 'utf-8')
  fs.writeFileSync('./public/feeds/feed.json', feed.json1(), 'utf-8')
}
