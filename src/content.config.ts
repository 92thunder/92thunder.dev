import { defineCollection } from "astro:content"
import { z } from "zod"
import { glob } from "astro/loaders"

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
  }),
})

export const collections = { blog }
