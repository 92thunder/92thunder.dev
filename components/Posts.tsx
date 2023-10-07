import { Card, CardContent, Typography, Grid } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import { Post } from '../types'
import Link from 'next/link'

const PostCard: React.FC<{ readonly post: Post }> = ({ post }) => {
  const bodyPreview = post.body.includes('---')
    ? post.body.split('---')[0]
    : null

  return (
    <StyledLink
      href={`/posts/${post.id}`}
      passHref
    >
      <Card sx={{
        ':hover': {
          boxShadow: 4,
        }
      }}
      >
        <CardContent sx={{
          '&:last-child': {
            paddingBottom: 2,
          }
        }}
        >
          <Grid
            container
            direction="column"
            gap={2}
          >
            <Grid
              container
              justifyContent="space-between"
            >
              <Grid item>
                <Typography
                  component="p"
                  fontWeight="bold"
                  variant="h5"
                >  
                  {post.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  component="p"
                  variant="body1"
                >
                  {post.publishedAt}
                </Typography>
              </Grid>
            </Grid>
            {bodyPreview ? <Grid item>
              <Typography>
                {bodyPreview}
              </Typography>
            </Grid> : null}
          </Grid>
        </CardContent>
      </Card> 
    </StyledLink>
  )
}


export const Posts: React.FC<{readonly posts: Post[]}> = ({ posts }) => {
  return (
    <Grid
      container
      direction="column"
      spacing={6}
    >
      {posts.map((post) => (
        <Grid
          item
          key={post.id}
          maxWidth="100% !important"
        >
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
`
