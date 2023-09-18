import { Post } from "../types"
import { postsInfo } from '../posts/info';
import { readFile } from "fs/promises";

const toDisplayDate = (dateString: string) => {
  return dateString.slice(0, 10).replace(/-/g, '/')
}

export async function getPosts(): Promise<Post[]> {
  const posts: Post[] = []
  for (const postInfo of postsInfo) {
    const filePath = new URL(`../posts/${postInfo.mdFilename}`, import.meta.url)
    const body = await readFile(filePath, {encoding: 'utf8'})
    posts.push({
      id: postInfo.id,
      title: postInfo.title,
      publishedAt: toDisplayDate(postInfo.publishedAt),
      body
    })
  }
  return posts
}

export async function getPost(id: string | string[] | undefined): Promise<Post> {
  const postInfo = postsInfo.find((postInfo) => postInfo.id === id)
  if (!postInfo) {
    throw new Error(`Not found ${id}`)
  }
  const filePath = new URL(`../posts/${postInfo.mdFilename}`, import.meta.url)
  const body = await readFile(filePath, {encoding: 'utf8'})
  return {
    id: postInfo.id,
    title: postInfo.title,
    publishedAt: toDisplayDate(postInfo.publishedAt),
    body
  }
}