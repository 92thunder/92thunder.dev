import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { GA_ID, pageview } from '../libs/gtag'
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'

const chakraTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        color: 'white'
      },
    },
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    if (!GA_ID) {return}
    const handleRouteChange = (url :string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }

  }, [router.events])
  return (
    <ChakraProvider theme={chakraTheme}>
      <Header />
      <Box p="24px" pt="2rem">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
