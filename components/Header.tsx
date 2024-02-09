import React from "react"
import { Box, HStack, Heading, Image, Stack } from "@chakra-ui/react"
import { Link } from "@chakra-ui/next-js"

export const Header: React.FC = () => {
	return (
		<Box p="24px">
			<Stack alignItems="center" direction="row" justifyContent="space-between">
				<Heading as="h1" fontSize="24px" size="lg">
					<Link href="/" sx={{ textDecoration: "none" }} textDecoration="none">
						<Image src="/icon.png" alt="icon" width="48px" height="48px" />
					</Link>
				</Heading>
				<HStack spacing={4} fontSize="1.2rem">
					<Box>
						<Link
							_hover={{ color: "brand.accent" }}
							fontWeight="600"
							href="/blog"
						>
							Blog
						</Link>
					</Box>
					<Box>
						<Link
							_hover={{ color: "brand.accent" }}
							fontWeight="600"
							href="/about"
						>
							About
						</Link>
					</Box>
				</HStack>
			</Stack>
		</Box>
	)
}
