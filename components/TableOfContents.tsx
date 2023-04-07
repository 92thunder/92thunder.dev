import { FC } from "react"
import { getHeadings } from "../libs/getHeadings"
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
								<Link fontSize={12} href={`#${heading.text}`}>
									{heading.text}
								</Link>
							</ListItem>
						))}
					</List>
				</nav>
			</CardContent>
		</Card>
	)
}