import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Box, Grid, Stack, Typography } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CodeBlock } from '../../components/CodeBlock'
import { getPost, getPosts } from '../../libs/postRepository'
import Head from 'next/head'
import { Post } from '../../types'
import { TableOfContents } from '../../components/TableOfContents'
import React from 'react'
import { HeadingComponent } from 'react-markdown/lib/ast-to-react'
import { getHeadingId } from '../../libs/getHeadings'

export async function getStaticPaths() {
  const results: Post[] = await getPosts()
  const paths = results.map((post) => `/posts/${post.id}`)
  return { paths, fallback: false }
}

const HeadingRenderer: HeadingComponent = (props) => {
  const children = React.Children.toArray(props.children)
  const text = children
  const slug = getHeadingId(`${text}`)
  return React.createElement('h' + props.level, {id: slug}, props.children)
}

export const  getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    throw new Error()
  }

  const id = context.params.id
  const post = await getPost(id)
  return {
    props: { post }
  }
}

const Post: NextPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const description: string = post.body.split('\n')[0] || post.title
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={`https://92thunder.dev/posts/${post.id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title}></meta>
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="92thunder.dev" />
        <meta property="og:image" content="https://92thunder.dev/ogp.png" />
      </Head>
      <Stack direction="column" gap={2}>
        <Typography variant="body1">{post.publishedAt}</Typography>
        <Typography variant="h4" component="h1" fontWeight="bold">{post.title}</Typography>
      </Stack>
      <Stack direction="row" gap={2}>
        <Box>
          <ReactMarkdown
            plugins={[remarkGfm]}
            skipHtml={false}
            components={{
              code: CodeBlock,
              h1: HeadingRenderer,
              h2: HeadingRenderer,
              h3: HeadingRenderer,
            }}
          >
            {post.body}
          </ReactMarkdown>
        </Box>
        <TableOfContents markdown={post.body} />
      </Stack>
    </>
  )
}

export default Post