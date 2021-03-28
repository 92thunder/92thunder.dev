import React from 'react'
import { createPostRepository } from '../repositories/PostRepository'

export const Posts: React.VFC = () => {
  React.useEffect(() => {
    const get = async () => {
      const postRepository = createPostRepository()
      console.log(await postRepository.findAll())
    }
    get()
  }, [])
  return <>
  </>
}