import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Container, createTheme, ThemeProvider } from '@mui/material'
import { grey } from '@mui/material/colors'


const theme = createTheme({
  palette: {
    primary: {
      main: grey[800]
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container sx={{ paddingTop: "1rem" }} maxWidth="lg">
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
