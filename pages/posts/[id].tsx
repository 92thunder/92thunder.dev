import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Card, CardContent, Stack, Typography } from '@mui/material'
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
import { ShareButtons } from '../../components/ShareButtons'

export async function getStaticPaths() {
  const results: Post[] = await getPosts()
  const paths = results.map((post) => `/posts/${post.id}`)
  return { fallback: false, paths }
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
        <title>
          {post.title}
        </title>
        <meta
          content={description}
          name="description"
        />
        <meta
          content={`https://92thunder.dev/posts/${post.id}`}
          property="og:url"
        />
        <meta
          content="article"
          property="og:type"
        />
        <meta
          content={post.title}
          property="og:title"
        />
        <meta
          content={description}
          property="og:description"
        />
        <meta
          content="92thunder.dev"
          property="og:site_name"
        />
        <meta
          content="https://92thunder.dev/ogp.png"
          property="og:image"
        />
      </Head>
      <Stack gap={2}>
        <Stack
          direction="column"
          gap={1}
        >
          <Typography align="right" variant="body1">
            {post.publishedAt}
          </Typography>
          <Typography
            component="h1"
            fontWeight="bold"
            variant="h4"
          >
            {post.title}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          gap={2}
        >
          <Card style={{width: "100%"}}>
            <CardContent>
              <ReactMarkdown
                components={{
              code: CodeBlock,
              h1: HeadingRenderer,
              h2: HeadingRenderer,
              h3: HeadingRenderer,
            }}
                plugins={[remarkGfm]}
                skipHtml={false}
          >
                {post.body}
              </ReactMarkdown>
            </CardContent>
          </Card>
          <TableOfContents markdown={post.body} />
        </Stack>
        <ShareButtons />
      </Stack>
    </>
  )
}

export default Post
