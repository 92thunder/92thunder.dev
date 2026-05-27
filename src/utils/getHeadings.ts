import GithubSlugger from "github-slugger"

export type Heading = {
  id: string
  level: number
  text: string
}

export const getHeadings = (markdown: string): Heading[] => {
  const slugger = new GithubSlugger()
  const headings: Heading[] = []
  const matches = markdown.matchAll(/^(#+) (.+)$/gm)
  for (const match of matches) {
    const text = match[2].replace(/`/g, "")
    headings.push({
      id: slugger.slug(text),
      level: match[1].length,
      text: match[2],
    })
  }
  return headings
}
