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
	const paths = results.map((post) => `/blog/${post.id}`)
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
			<Heading
				as="h2"
				my="32px"
				size="lg"
				id={children ? children.toString() : ""}
			>
				{children}
			</Heading>
		)
	},
	h3: ({ children }) => {
		return (
			<Heading
				as="h3"
				my="24px"
				size="md"
				id={children ? children.toString() : ""}
			>
				{children}
			</Heading>
		)
	},
	hr: () => {
		return <Divider my="16px" />
	},
	p: ({ children }) => {
		return (
			<Text lineHeight={1.5} my="16px" fontSize="18px">
				{children}
			</Text>
		)
	},
	blockquote: ({ children }) => {
		return (
			<Box
				as="blockquote"
				bg="gray.800"
				borderLeft="4px solid"
				borderColor="brand.accent"
				fontStyle="italic"
				mt="32px"
				pl="16px"
				py="8px"
				maxW="100%"
				overflowWrap="break-word"
				overflow="hidden"
			>
				{children}
			</Box>
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
					content={`https://92thunder.dev/blog/${post.id}`}
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
						G{" "}
						<Heading
							as="h1"
							fontWeight="bold"
							size="lg"
							sx={{ wordBreak: "auto-phrase" }}
						>
							{post.title}
						</Heading>
						<Text color="gray.400">{post.publishedAt}</Text>
					</VStack>
					<HStack alignItems="start" gap={2} maxW="100%">
						<TableOfContents markdown={post.body} />
						<Box flexGrow="1" overflow="hidden" mt="-10px">
							<ReactMarkdown
								components={ChakraUIRenderer(theme)}
								plugins={[remarkGfm]}
								skipHtml={false}
							>
								{post.body}
							</ReactMarkdown>
							<Box mt={20}>
								<ShareButtons />
							</Box>
						</Box>
					</HStack>
				</VStack>
			</Box>
		</>
	)
}

export default PostPage
