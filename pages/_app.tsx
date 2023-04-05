import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Container, createTheme, ThemeProvider } from '@mui/material'
import { grey } from '@mui/material/colors'
import styled from '@emotion/styled'


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
      <Container sx={{ padding: "2rem 0" }} maxWidth="md">
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
