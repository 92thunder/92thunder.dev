import { Card, CardContent, Typography, Grid } from '@mui/material'
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
      <Card sx={{
        ':hover': {
          boxShadow: 4,
        }
      }}>
        <CardContent sx={{
          '&:last-child': {
            paddingBottom: 2,
          }
        }}>
          <Grid container gap={2} direction="column">
            <Grid container justifyContent="space-between" >
              <Grid item>
                <Typography variant="h5" component="p">
                  {post.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" component="p">
                  {post.publishedAt}
                </Typography>
                </Grid>
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
      </Card> 
    </StyledLink>
  )
}


export const Posts: React.FC<{posts: Post[]}> = ({posts}) => {
  return (
    <Grid container direction="column" spacing={6}>
      {posts.map((post) => (
        <Grid item key={post.id} maxWidth="100% !important">
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
`