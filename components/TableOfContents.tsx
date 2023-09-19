import { FC } from "react"
import { getHeadings } from "../libs/getHeadings"
import { Card, Link, List, ListItem } from "@mui/material"
import styled from "@emotion/styled"

export const TableOfContents: FC<{ markdown: string }> = ({ markdown }) => {
	const headings = getHeadings(markdown)
	return (
		<StyledCard>
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
		</StyledCard>
	)
}

const StyledCard = styled(Card)`
	min-width: 10rem;
	width: 100%;
	max-width: 25%;
	position: sticky;
	top: 2rem;
	height: min-content;
	max-height: calc(100vh - 4rem);
	overflow-y: auto;

	@media (max-width: 640px) {
		display: none;
	}
`