import { FC } from "react"
import { getHeadings } from "../libs/getHeadings"
import { Card, CardContent, Link, List, ListItem } from "@mui/material"
import styled from "@emotion/styled"

export const TableOfContents: FC<{ markdown: string }> = ({ markdown }) => {
	const headings = getHeadings(markdown)
	return (
		<StyledCard>
			<CardContent sx={{ padding: 0 }}>
				<nav>
					<List>
						{headings.map((heading) => (
							<ListItem key={heading.id}>
								<Link fontSize={12} href={`#${heading.id}`}>
									{heading.text}
								</Link>
							</ListItem>
						))}
					</List>
				</nav>
			</CardContent>
		</StyledCard>
	)
}

const StyledCard = styled(Card)`
	min-width: 20%;
	position: sticky;
	top: 2rem;
	height: min-content;
	max-height: calc(100vh - 4rem);
	overflow-y: scroll;

	@media (max-width: 600px) {
		display: none;
	}
`