import { Box, Typography } from '@material-ui/core'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router'
import { useAsync } from 'react-use'
import remarkGfm from 'remark-gfm'
import { createPostRepository } from '../repositories/PostRepository'
import { CodeBlock } from './CodeBlock'

export const Post: React.VFC = () => {
  const { postId } =  useParams<{postId: string}>()
  const state = useAsync(async () => {
    const postRepository = createPostRepository()
    return await postRepository.find(postId)
  }, [])

  return (
    state.value ?
      <Box m={4}>
        <Typography variant="h4">{state.value.title}</Typography>
        <ReactMarkdown
          source={state.value.body}
          plugins={[remarkGfm]}
          skipHtml={false}
          renderers={{
            code: CodeBlock
          }}
        />
      </Box>
      : null
  )
}