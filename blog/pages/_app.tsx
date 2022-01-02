import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { createTheme, ThemeProvider } from '@mui/material'
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
      <Header></Header>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
