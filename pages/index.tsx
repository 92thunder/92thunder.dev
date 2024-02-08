import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import Head from "next/head"
import { getPosts } from "../libs/postRepository"
import { Post } from "../types"
import { generateFeed } from "../libs/generateFeed"
import { HeroArea } from "../components/HeroArea"

export const getStaticProps: GetStaticProps = async () => {
	const results: Post[] = await getPosts()
	generateFeed(results)
	return {
		props: { posts: results },
	}
}

const Home: NextPage = ({
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

			<HeroArea />
		</>
	)
}

export default Home
