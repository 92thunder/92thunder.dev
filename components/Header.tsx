import React from "react"
import { Box, HStack, Heading, Stack } from "@chakra-ui/react"
import { Link } from "@chakra-ui/next-js"

export const Header: React.FC = () => {
	return (
		<Box p="24px">
			<Stack alignItems="center" direction="row" justifyContent="space-between">
				<Heading as="h1" fontSize="24px" size="lg">
					<Link
						href="/blog"
						sx={{ textDecoration: "none" }}
						textDecoration="none"
					>
						92thunder.dev
					</Link>
				</Heading>
				<HStack spacing={4}>
					<Box>
						<Link color="brand.accent" fontWeight="600" href="/blog">
							Blog
						</Link>
					</Box>
					<Box>
						<Link color="brand.accent" fontWeight="600" href="/about">
							About
						</Link>
					</Box>
				</HStack>
			</Stack>
		</Box>
	)
}
