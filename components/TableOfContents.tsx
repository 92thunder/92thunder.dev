import { FC } from "react"
import { getHeadings } from "../libs/getHeadings"
import NextLink from "next/link"
import { Card, CardContent, Link, List, ListItem } from "@mui/material"

export const TableOfContents: FC<{ markdown: string }> = ({ markdown }) => {
	const headings = getHeadings(markdown)
	return (
		<Card sx={{
			minWidth: "20%",
			position: "sticky",
			top: "2rem",
			height: 'min-content',
			maxHeight: 'calc(100vh - 4rem)'
		}}>
			<CardContent sx={{ padding: 0 }}>
				<nav>
					<List>
						{headings.map((heading) => (
							<ListItem key={heading.text}>
								<NextLink href={`#${heading.text}`} passHref legacyBehavior>
									<Link fontSize={12}>
										{heading.text}
									</Link>
								</NextLink>
							</ListItem>
						))}
					</List>
				</nav>
			</CardContent>
		</Card>
	)
}