import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Box, Typography } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CodeBlock } from '../../components/CodeBlock'
import { getPost, getPosts } from '../../libs/postRepository'
import Head from 'next/head'
import { Post } from '../../types'

export async function getStaticPaths() {
  const results: Post[] = await getPosts()
  const paths = results.map((post) => `/posts/${post.id}`)
  return { paths, fallback: false }
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
      <Box m={4}>
        <Typography variant="h4">{post.title}</Typography>
        <ReactMarkdown
          plugins={[remarkGfm]}
          skipHtml={false}
          components={{
            code: CodeBlock
          }}
        >
          {post.body}
        </ReactMarkdown>
      </Box>
    </>
  )
}

export default Post