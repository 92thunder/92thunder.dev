export type ExternalPost = {
  id: string
  title: string
  publishedAt: string
  link: string
  type: "external"
}

export const externalPosts: ExternalPost[] = [
  {
    id: "remotework-2024-01",
    title: "北海道旭川市に移住しました",
    publishedAt: "2024-01-19",
    link: "https://note.com/92thunder/n/n533a6badb8f5",
    type: "external",
  },
]
