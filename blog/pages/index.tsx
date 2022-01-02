import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { Posts } from '../components/Posts'
import styles from '../styles/Home.module.css'

export const  getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts/')
  return {
    props: { posts: await res.json() }
  }
}

const Home: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>92thunder.dev</title>
        <meta name="description" content="Ryota Kunisada@92thunder Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Posts posts={posts}></Posts>
      </main>
    </div>
  )
}

export default Home
