import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useAsync } from 'react-use'
import styled from 'styled-components'
import { createPostRepository } from '../repositories/PostRepository'

export const Posts: React.VFC = () => {
  const state = useAsync(async () => {
    const postRepository = createPostRepository()
    return await postRepository.findAll()
  }, [])
  return state.value ?
    <>
      {state.value.map((post) => (
        <StyledCard key={post.id}>
          <CardContent>
            <Typography variant="h5">
              {post.title}
            </Typography>
            <ReactMarkdown>
              {post.content}
            </ReactMarkdown>
          </CardContent>
        </StyledCard> 
      ))}
    </>
    : null
}

const StyledCard = styled(Card)`
`