import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import Head from "next/head"
import { getPosts } from "../libs/postRepository"
import { Post } from "../types"
import { generateFeed } from "../libs/generateFeed"
import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import { useMemo } from "react"

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

const HeroArea: React.FC = () => {
	const bgColors = ["#313125", "#165C9A", "#C3B03E", "#2A493C", "#6F786B"]
	const currentBgColors = useMemo(() => {
		const colors: string[] = []
		const length = bgColors.length
		const colorsLength = Math.max(Math.floor(Math.random() * 5), 2)
		while (colors.length <= colorsLength) {
			const index = Math.floor(Math.random() * length)
			if (!colors.includes(bgColors[index])) {
				colors.push(bgColors[index])
			}
		}
		return colors.join(",")
	}, [])

	const scaleX = Math.random() > 0.5 ? 1 : -1
	const scaleY = Math.random() > 0.5 ? 1 : -1

	const gradientAngle = Math.floor(Math.random() * 360)

	return (
		<>
			<section>
				<Box
					h="calc(100vh - 76.8px)"
					pb="24px"
					sx={{
						backgroundSize: "cover",
						background: `url(./watercolor_bg.jpg), linear-gradient(${gradientAngle}deg, ${currentBgColors})`,
						backgroundBlendMode: "hard-light",
						transform: `scale(${scaleX}, ${scaleY})`,
					}}
				>
					<VStack
						h="100%"
						justifyContent="center"
						spacing="16px"
						sx={{ transform: `scale(${scaleX}, ${scaleY})` }}
					>
						<Heading as="h2" fontSize={48}>
							Hello, I&#39;m 92thunder
						</Heading>
						<Text fontSize={24} fontWeight="600">
							A Web Developer Specializing in Front End Development
						</Text>
					</VStack>
				</Box>
			</section>
		</>
	)
}

export default Home
