import { getHeadings } from "./getHeadings"

test('getHeadings', () => {
	const markdown = `# Heading 1
## Heading 2
### Heading 3
`
	expect(getHeadings(markdown)).toEqual([
		{
			level: 1,
			text: 'Heading 1'
		},
		{
			level: 2,
			text: 'Heading 2'
		},
		{
			level: 3,
			text: 'Heading 3'
		},
	])
})
