import { Post } from '../types'
import { apiClient } from '../libs/apiClient'

type PostRepository = {
  findAll: () => Promise<Post[]>
  find: (id: string) => Promise<Post | undefined>
  save: (post: Post) => Promise<void>
  delete: (post: Post) => Promise<void>
}

const toMySQLDateTime = (date: Date) => {
  return date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2) + ' ' + 
    ('00' + date.getUTCHours()).slice(-2) + ':' + 
    ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
    ('00' + date.getUTCSeconds()).slice(-2)
}

type PostData = Omit<Post, 'published_at'> & {
  published_at: string
}

const toPost = (data: PostData): Post => ({
  ...data,
  published_at: new Date(data.published_at)
})

const toPostData = (post: Post): PostData => ({
  ...post,
  published_at: toMySQLDateTime(post.published_at)
})

export const createPostRepository: () => PostRepository = () => {
  return {
    async findAll() {
      const response = await apiClient.get('posts')
      const data: PostData[] = await response.json()
      const posts: Post[] = data.map(toPost)
      return posts
    },
    async find(id: string) {
      const response = await apiClient.get(`posts/${id}`).catch(() => null)
      if (!response) return undefined
      const data: PostData = await response.json()
      return toPost(data)
    },
    async save(post: Post) {
      const response = await apiClient.post(`posts/${post.id}`, {
        json: toPostData(post)
      })
      return await response.json()
    },
    async delete(post: Post) {
      const response = await apiClient.delete(`posts/${post.id}`)
      return await response.json()
    }
  }
}