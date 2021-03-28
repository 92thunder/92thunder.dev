import firebase from 'firebase/app'
import 'firebase/firestore'

type Post = {
  id: string
  title: string
  content: string
}

type PostRepository = {
  findAll: () => Promise<Post[]>
  find: (id: string) => Promise<Post>
}

export const createPostRepository: () => PostRepository = () => {
  const db = firebase.firestore()
  return {
    async findAll() {
      const posts: Post[] = []
      const querySnapshot = await db.collection('posts').get()
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Post
        posts.push({id: doc.id,
          title: data.title,
          content: data.content
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
        content: data.content
      }
    }
  }
}