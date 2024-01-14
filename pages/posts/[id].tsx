import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import {
	Box,
	Divider,
	HStack,
	Heading,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react"
import ReactMarkdown from "react-markdown"
import { getPost, getPosts } from "../../libs/postRepository"
import Head from "next/head"
import { Post } from "../../types"
import { TableOfContents } from "../../components/TableOfContents"
import React from "react"
import { ShareButtons } from "../../components/ShareButtons"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import remarkGfm from "remark-gfm"
import { CodeBlock } from "../../components/CodeBlock"

export async function getStaticPaths() {
	const results: Post[] = await getPosts()
	const paths = results.map((post) => `/posts/${post.id}`)
	return { fallback: false, paths }
}

export const getStaticProps: GetStaticProps = async (context) => {
	if (!context.params) {
		throw new Error()
	}

	const id = context.params.id
	const post = await getPost(id)
	return {
		props: { post },
	}
}

const theme: Parameters<typeof ChakraUIRenderer>[0] = {
	a: (props) => {
		return <Link {...props} color="#60A5FA" textDecoration="underline" />
	},
	code: CodeBlock,
	h2: ({ children }) => {
		return (
			<Heading as="h2" my="32px" size="lg">
				{children}
			</Heading>
		)
	},
	h3: ({ children }) => {
		return (
			<Heading as="h3" my="24px" size="md">
				{children}
			</Heading>
		)
	},
	hr: () => {
		return <Divider my="16px" />
	},
	p: ({ children }) => {
		return (
			<Text lineHeight={1.5} my="16px">
				{children}
			</Text>
		)
	},
}

const PostPage: NextPage = ({
	post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const description: string = post.body.split("\n")[0] || post.title
	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta content={description} name="description" />
				<meta
					content={`https://92thunder.dev/posts/${post.id}`}
					property="og:url"
				/>
				<meta content="article" property="og:type" />
				<meta content={post.title} property="og:title" />
				<meta content={description} property="og:description" />
				<meta content="92thunder.dev" property="og:site_name" />
				<meta content="https://92thunder.dev/ogp.png" property="og:image" />
			</Head>
			<Box p="24px" pt="2rem">
				<VStack alignItems="start" gap={10}>
					<VStack alignItems="start">
						<Heading as="h1" fontWeight="bold" size="lg">
							{post.title}
						</Heading>
						<Text color="gray.300">{post.publishedAt}</Text>
					</VStack>
					<HStack alignItems="start" gap={2}>
						<Box>
							<ReactMarkdown
								components={ChakraUIRenderer(theme)}
								plugins={[remarkGfm]}
								skipHtml={false}
							>
								{post.body}
							</ReactMarkdown>
						</Box>
						<TableOfContents markdown={post.body} />
					</HStack>
					<ShareButtons />
				</VStack>
			</Box>
		</>
	)
}

export default PostPage
