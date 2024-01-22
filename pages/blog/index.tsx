import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import Head from "next/head"
import { Posts } from "../../components/Posts"
import { getPosts } from "../../libs/postRepository"
import styles from "../../styles/Home.module.css"
import { Post } from "../../types"
import { generateFeed } from "../../libs/generateFeed"
import { Box, VStack } from "@chakra-ui/react"

export const getStaticProps: GetStaticProps = async () => {
	const results: Post[] = await getPosts()
	generateFeed(results)
	return {
		props: { posts: results },
	}
}

const Blog: NextPage = ({
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<>
			<Head>
				<title>92thunder.dev</title>
				<meta content="Ryota Kunisada@92thunder Blog" name="description" />
				<meta content="https://92thunder.dev" property="og:url" />
				<meta content="blog" property="og:type" />
				<meta content="92thunder.dev" property="og:title" />
				<meta
					content="Ryota Kunisada@92thunder Blog"
					property="og:description"
				/>
				<meta content="92thunder.dev" property="og:site_name" />
				<meta content="https://92thunder.dev/ogp.png" property="og:image" />
				<link href="/favicon.ico" rel="icon" />
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

			<Box p="24px" pt="2rem">
				<main className={styles.main}>
					<VStack alignItems="start" spacing="16px">
						<Posts posts={posts} />
					</VStack>
				</main>
			</Box>
		</>
	)
}

export default Blog
