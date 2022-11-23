import { Card, CardContent, Typography, Grid } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import { Post } from '../types'
import Link from 'next/link'

const PostCard: React.VFC<{ post: Post }> = ({ post }) => {
  const bodyPreview = post.body.includes('---')
    ? post.body.split('---')[0]
    : null

  return (
    <Link href={`/posts/${post.id}`} passHref>
      <StyledCard >
        <CardContent>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Typography variant="h5">
                {post.title}
              </Typography>
            </Grid>
            {bodyPreview && (
              <Grid item>
                <Typography>
                  {bodyPreview}
                </Typography>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </StyledCard> 
    </Link>
  )
}


export const Posts: React.VFC<{posts: Post[]}> = ({posts}) => {
  return (
    <Grid container direction="column" spacing={6}>
      {posts.map((post) => (
        <Grid item key={post.id}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  )
}

const StyledCard = styled(Card)`
  cursor: pointer;
`