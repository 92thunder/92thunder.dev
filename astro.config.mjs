import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
	site: "https://92thunder.dev",
	integrations: [react(), sitemap()],
	output: "static",
})
