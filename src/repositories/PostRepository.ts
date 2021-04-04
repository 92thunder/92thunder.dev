import firebase from 'firebase/app'
import 'firebase/firestore'
import { Post } from '../types'

type PostRepository = {
  findAll: () => Promise<Post[]>
  find: (id: string) => Promise<Post>
}

export const createPostRepository: () => PostRepository = () => {
  const db = firebase.firestore()
  return {
    async findAll() {
      const posts: Post[] = []
      const querySnapshot = await db.collection('posts').where('published', '==', true).get()
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Post
        posts.push({id: doc.id,
          title: data.title,
          body: data.body
        })
      })
      return posts
    },
    async find(id: string) {
      const docRef = db.collection('posts').doc(id)
      const doc = await docRef.get()
      const data = doc.data() as Post
      return {
        id: doc.id,
        title: data.title,
        body: data.body
      }
    }
  }
}