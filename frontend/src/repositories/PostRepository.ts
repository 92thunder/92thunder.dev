import firebase from 'firebase/app'
import 'firebase/firestore'
import { Post } from '../types'

type PostRepository = {
  findAll: () => Promise<Post[]>
  find: (id: string) => Promise<Post>
}

type PostObject = {
  title: string
  body: string
  date: firebase.firestore.Timestamp
  timestamp: firebase.firestore.Timestamp
  published: boolean
}

export const createPostRepository: () => PostRepository = () => {
  const db = firebase.firestore()
  return {
    async findAll() {
      const posts: Post[] = []
      const querySnapshot = await db.collection('posts').where('published', '==', true).get()
      querySnapshot.forEach((doc) => {
        const data = doc.data() as PostObject
        posts.push({id: doc.id,
          title: data.title,
          body: data.body,
          date: data.date.toDate()
        })
      })
      posts.sort((a, b) => a.date < b.date ? 1 : -1)
      return posts
    },
    async find(id: string) {
      const docRef = db.collection('posts').doc(id)
      const doc = await docRef.get()
      const data = doc.data() as PostObject
      return {
        id: doc.id,
        title: data.title,
        body: data.body,
        date: data.date.toDate()
      }
    }
  }
}