import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Box, Typography } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CodeBlock } from '../../components/CodeBlock'
import { query } from '../../libs/db'

export async function getStaticPaths() {
  const results = JSON.parse(JSON.stringify(await query('SELECT * FROM post')))
  const paths = results.map((post: any) => `/posts/${post.id}`)
  return { paths, fallback: false }
}

export const  getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    throw new Error()
  }

  const id = context.params.id
  const results = JSON.parse(JSON.stringify(await query(`SELECT * FROM post WHERE ${id}`)))
  return {
    props: { post: results[0] }
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