
type Heading = {
	level: number
	text: string
}
export const getHeadings = (markdown: string): Heading[] => {
	const headings: Heading[] = []
	const matches = markdown.matchAll(/^(#+) (.*)$/gm)
	for (const match of matches) {
		const level = match[1].length
		const text = match[2]
		headings.push({ level, text })
	}
	return headings
}