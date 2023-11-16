import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Container, createTheme, ThemeProvider } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { GA_ID, pageview } from '../libs/gtag'


const theme = createTheme({
  palette: {
    primary: {
      main: grey[800]
    }
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
    <ThemeProvider theme={theme}>
      <Header />
      <Container
        maxWidth="lg"
        sx={{ paddingBottom: "2rem", paddingTop: "2rem" }}
      >
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
