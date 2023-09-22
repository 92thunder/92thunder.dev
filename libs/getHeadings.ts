
type Heading = {
	id: string
	level: number
	text: string
}

export const getHeadingId = (text: string): string => {
	return text.replaceAll(/\s+/g, "")
}

export const getHeadings = (markdown: string): Heading[] => {
	const headings: Heading[] = []
	const matches = markdown.matchAll(/^(#+) (.*)$/gm)
	for (const match of matches) {
		headings.push({
			id: getHeadingId(match[2]),
			level: match[1].length,
			text: match[2],
		})
	}
	return headings
}
