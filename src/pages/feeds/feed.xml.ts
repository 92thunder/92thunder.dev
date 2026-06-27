import type { APIRoute } from "astro"
import { getCollection } from "astro:content"
import { Feed } from "feed"
import { externalPosts } from "../../data/external-posts"

const SITE_URL = "https://92thunder.dev"
const AUTHOR = { name: "92thunder", link: SITE_URL }

export const GET: APIRoute = async () => {
  const blogEntries = await getCollection("blog", ({ data }) => !data.draft)

  const allPosts = [
    ...blogEntries.map((e) => ({
      id: e.id.replace(/\.md$/, ""),
      title: e.data.title,
      publishedAt: e.data.publishedAt,
      link: `${SITE_URL}/blog/${e.id.replace(/\.md$/, "")}`,
      description: (e.body ?? "").split("\n").find((l: string) => l.trim()) ?? e.data.title,
    })),
    ...externalPosts.map((e) => ({
      id: e.id,
      title: e.title,
      publishedAt: e.publishedAt,
      link: e.link,
      description: e.title,
    })),
  ].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

  const feed = new Feed({
    title: "92thunder.dev",
    description: "Ryota Kunisada@92thunder Blog",
    id: SITE_URL,
    link: SITE_URL,
    language: "ja",
    image: `${SITE_URL}/ogp.png`,
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: "92thunder",
    author: AUTHOR,
  })

  for (const post of allPosts) {
    feed.addItem({
      title: post.title,
      id: post.link,
      link: post.link,
      description: post.description,
      date: new Date(post.publishedAt),
      author: [AUTHOR],
    })
  }

  return new Response(feed.rss2(), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  })
}
