import { Post } from '../../types'

export const createPost: () => Post = () => {
  return {
    id: crypto.randomUUID(),
    title: '',
    body: '',
    published_at: new Date(),
    published: false
  }
}