import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { postsInfo } from "../posts/info"
import type { Post } from "../types"

const toDisplayDate = (dateString: string) => {
	return dateString.slice(0, 10).replaceAll("-", "/")
}

export async function getPosts(): Promise<Post[]> {
	const posts: Post[] = []
	for (const postInfo of postsInfo) {
		if (postInfo.type === "blog") {
			const filePath = join(process.cwd(), "posts", postInfo.mdFilename)
			const body = await readFile(filePath, { encoding: "utf8" })
			posts.push({
				body,
				id: postInfo.id,
				publishedAt: toDisplayDate(postInfo.publishedAt),
				title: postInfo.title,
				type: "blog",
			})
		} else {
			posts.push({
				body: postInfo.link,
				id: postInfo.id,
				publishedAt: toDisplayDate(postInfo.publishedAt),
				title: postInfo.title,
				type: "external",
			})
		}
	}
	return posts
}

export async function getPost(
	id: string | string[] | undefined,
): Promise<Post> {
	const postInfo = postsInfo.find((postInfo) => postInfo.id === id)
	if (!postInfo) {
		throw new Error(`Not found ${id}`)
	}
	if (postInfo.type === "blog") {
		const filePath = join(process.cwd(), "posts", postInfo.mdFilename)
		const body = await readFile(filePath, { encoding: "utf8" })
		return {
			body,
			id: postInfo.id,
			publishedAt: toDisplayDate(postInfo.publishedAt),
			title: postInfo.title,
			type: "blog",
		}
	}
	return {
		body: postInfo.link,
		id: postInfo.id,
		publishedAt: toDisplayDate(postInfo.publishedAt),
		title: postInfo.title,
		type: "external",
	}
}
