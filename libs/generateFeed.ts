import fs from 'node:fs'
import { Feed } from 'feed'
import { Post } from '../types'

export const generateFeed = (posts: Post[]) =>  {
  const baseUrl = 'https://92thunder.dev'
  const date = new Date()

  const author = {
    email: 'r.kunisada661@gmail.com',
    link: baseUrl,
    name: 'Ryota Kunisada',
  }

  const feed = new Feed({
    author,
    copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
    description: 'Ryota Kunisada@92thunder Blog',
    feedLinks: {
      atom: `${baseUrl}/feeds/atom.xml`,
      json: `${baseUrl}/feeds/feed.json`,
      rss2: `${baseUrl}/feeds/feed.xml`,
    },
    id: baseUrl + '/',
    image: `${baseUrl}/ogp.png`,
    language: 'ja',
    link: baseUrl,
    title: '92thunder.dev',
    updated: date,
  })

  posts.forEach((post) => {
    const description: string = post.body.split('\n')[0] || post.title
    const url = `${baseUrl}/posts/${post.id}`
    feed.addItem({
      date: new Date(post.publishedAt),
      description,
      id: url,
      link: url,
      title: post.title,
    })
  })

  fs.mkdirSync('./public/feeds', { recursive: true })
  fs.writeFileSync('./public/feeds/feed.xml', feed.rss2(), 'utf8')
  fs.writeFileSync('./public/feeds/atom.xml', feed.atom1(), 'utf8')
  fs.writeFileSync('./public/feeds/feed.json', feed.json1(), 'utf8')
}
