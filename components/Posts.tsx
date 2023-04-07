import { Card, CardContent, Typography, Grid, Stack, Box } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import { Post } from '../types'
import Link from 'next/link'

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const bodyPreview = post.body.includes('---')
    ? post.body.split('---')[0]
    : null

  return (
    <StyledLink href={`/posts/${post.id}`} passHref>
      <StyledCard >
        <CardContent>
          <Stack gap={2} direction="column">
            <Typography variant="h5">
              {post.title}
            </Typography>
            {bodyPreview && (
              <Typography>
                {bodyPreview}
              </Typography>
            )}
          </Stack>
        </CardContent>
      </StyledCard> 
    </StyledLink>
  )
}


export const Posts: React.FC<{posts: Post[]}> = ({posts}) => {
  return (
    <Stack direction="column" gap={6}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Stack>
  )
}

const StyledCard = styled(Card)`
  cursor: pointer;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  max-width: 100%;
  min-width: none;
`