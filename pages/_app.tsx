import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Header } from "../components/Header"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { GA_ID, pageview } from "../libs/gtag"
import { Box, ChakraProvider, Container, extendTheme } from "@chakra-ui/react"
import { Footer } from "../components/Footer"

const chakraTheme = extendTheme({
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
	},
	styles: {
		global: {
			body: {
				background: "#040D12",
				color: "white",
			},
		},
	},
	colors: {
		brand: {
			background: "#040D12",
			color: "white",
			secondary: "#5C8374",
			accent: "#93B1A6",
			sub: "#183D3D",
		},
	},
})

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()
	useEffect(() => {
		if (!GA_ID) {
			return
		}
		const handleRouteChange = (url: string) => {
			pageview(url)
		}
		router.events.on("routeChangeComplete", handleRouteChange)
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange)
		}
	}, [router.events])
	return (
		<ChakraProvider theme={chakraTheme}>
			<Container maxW="100%" minW="container.md" p="0">
				<Box minH="100vh">
					<Component {...pageProps} />
				</Box>
			</Container>
		</ChakraProvider>
	)
}

export default MyApp
