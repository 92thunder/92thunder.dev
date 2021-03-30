import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useAsync } from 'react-use'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'
import { createPostRepository } from '../repositories/PostRepository'

export const Posts: React.VFC = () => {
  const state = useAsync(async () => {
    const postRepository = createPostRepository()
    return await postRepository.findAll()
  }, [])
  console.log(state.value)
  return state.value ?
    <Grid container direction="column" spacing={6}>
      {state.value.map((post) => (
        <Grid item key={post.id}>
          <StyledCard >
            <CardContent>
              <Typography variant="h5">
                {post.title}
              </Typography>
              <StyledMarkdown plugins={[remarkGfm]}>
                {post.content.replaceAll('  ', '\n')}
              </StyledMarkdown>
            </CardContent>
          </StyledCard> 
        </Grid>
      ))}
    </Grid>
    : null
}

const StyledCard = styled(Card)`
`

const StyledMarkdown = styled(ReactMarkdown)`
  white-space: pre-wrap;
`