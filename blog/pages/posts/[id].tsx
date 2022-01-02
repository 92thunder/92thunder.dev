import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Box, Typography } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CodeBlock } from '../../components/CodeBlock'

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/posts/`)
  const paths = (await res.json()).map((post: any) => `/posts/${post.id}`)
  return { paths, fallback: false }
}

export const  getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    throw new Error()
  }

  const id = context.params.id
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)
  return {
    props: { post: await res.json() }
  }
}

const Post: NextPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
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
  )
}

export default Post