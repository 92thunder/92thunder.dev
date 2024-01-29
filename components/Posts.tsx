import {
	Card,
	Icon,
	CardBody,
	Text,
	VStack,
	HStack,
	Box,
	Heading,
} from "@chakra-ui/react"
import React from "react"
import styled from "@emotion/styled"
import { Post } from "../types"
import Link from "next/link"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const PostCard: React.FC<{ readonly post: Post }> = ({ post }) => {
	const bodyPreview = post.body.includes("---")
		? post.body.split("---")[0]
		: null

	return (
		<StyledLink
			href={post.type === "blog" ? `/blog/${post.id}` : post.body}
			passHref
		>
			<Card
				backgroundColor="brand.background"
				_hover={{ bg: "gray.800" }}
				py={5}
				shadow="none"
			>
				<CardBody p="0">
					<VStack alignItems="start" direction="column" spacing={10}>
						<VStack alignItems="start" gap={1} justifyContent="space-between">
							<HStack alignItems="center">
								<Heading
									as="p"
									color="brand.accent"
									fontSize="24px"
									size="md"
									sx={{ wordBreak: "auto-phrase" }}
								>
									{post.title}
								</Heading>
								{post.type === "external" ? (
									<Icon color="brand.accent" fontSize="20px">
										<ExternalLinkIcon />
									</Icon>
								) : null}
							</HStack>
							<HStack mt="2px">
								<Text as="p" color="gray.200" fontSize="14px">
									{post.publishedAt}
								</Text>
							</HStack>
						</VStack>
						{bodyPreview ? (
							<HStack>
								<Text color="gray.100">{bodyPreview}</Text>
							</HStack>
						) : null}
					</VStack>
				</CardBody>
			</Card>
		</StyledLink>
	)
}

export const Posts: React.FC<{ readonly posts: Post[] }> = ({ posts }) => {
	return (
		<VStack
			alignItems="start"
			direction="column"
			spacing={10}
			w="100%"
			mt="24px"
		>
			{posts.map((post) => (
				<Box key={post.id} w="100%">
					<PostCard post={post} />
				</Box>
			))}
		</VStack>
	)
}

const StyledLink = styled(Link)`
  text-decoration: none;
`
