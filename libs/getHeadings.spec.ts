import { getHeadings } from "./getHeadings"

test('getHeadings', () => {
	const markdown = `# Heading 1
## Heading 2
### Heading 3
`
	expect(getHeadings(markdown)).toEqual([
		{
			id: 'Heading1',
			level: 1,
			text: 'Heading 1'
		},
		{
			id: 'Heading2',
			level: 2,
			text: 'Heading 2'
		},
		{
			id: 'Heading3',
			level: 3,
			text: 'Heading 3'
		},
	])
})
