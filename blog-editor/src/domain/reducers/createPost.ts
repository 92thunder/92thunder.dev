import { Post } from '../../types'
import { v4 as uuidv4 } from 'uuid'

export const createPost: () => Post = () => {
  return {
    id: uuidv4(),
    title: '',
    body: '',
    published_at: new Date(),
    published: false
  }
}