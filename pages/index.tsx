import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { Posts } from '../components/Posts'
import { getPosts } from '../libs/postRepository'
import styles from '../styles/Home.module.css'
import { Post } from '../types'
import { generateFeed } from '../libs/generateFeed'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'

export const  getStaticProps: GetStaticProps = async () => {
  const results: Post[] = await getPosts()
  generateFeed(results)
  return {
    props: { posts: results }
  }
}

const Home: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>
          92thunder.dev
        </title>
        <meta
          content="Ryota Kunisada@92thunder Blog"
          name="description"
        />
        <meta
          content="https://92thunder.dev"
          property="og:url"
        />
        <meta
          content="blog"
          property="og:type"
        />
        <meta
          content="92thunder.dev"
          property="og:title"
        />
        <meta
          content="Ryota Kunisada@92thunder Blog"
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
        <link
          href="/favicon.ico"
          rel="icon"
        />
        <link
          href="https://92thunder.dev/feeds/atom.xml"
          rel="alternate"
          title="Atom"
          type="application/atom+xml"
        />
        <link
          href="https://92thunder.dev/feeds/feed.xml"
          rel="alternate"
          title="RSS2.0"
          type="application/rss+xml"
        />
      </Head>

      <HeroArea />
      <Box p="24px" pt="2rem">
        <main className={styles.main}>
          <VStack alignItems="start" spacing="16px">
            <Heading as="h2" fontSize={40}>Posts</Heading>
            <Posts posts={posts} />
          </VStack>
        </main>
      </Box>
    </>
  )
}

const HeroArea: React.FC = () => {
  return (
    <>
      <section>
        <Box h="calc(100vh - 30vh - 76.8px)" pb="24px">
          <VStack h="100%" justifyContent="center" spacing="16px">
            <Heading as="h2" fontSize={48}>Hello, I&#39;m 92thunder</Heading>
            <Text color="#22C55E" fontSize={24} fontWeight="600">A Web Developer Specializing in Front End Development</Text>
          </VStack>
        </Box>
      </section>
      <section>
        <Box background="linear-gradient(90deg, #22C55E, #1C7F40)" h="30vh" px="24px" py="48px">
          <VStack alignItems="start" h="100%" justifyContent="center" spacing="16px">
            <Heading as="h2" color="black" fontSize={40} m={0}>About Me</Heading>
            <Text color="black" fontSize={18} fontWeight="400">
              I&#39;m a web developer. I specialize in front end development, with expertise in React and TypeScript.
            </Text>
          </VStack>
        </Box>
      </section>
    </>
  )
}

export default Home
