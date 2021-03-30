import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import React from 'react'
import { Header } from './components/Header'
import { Posts } from './components/Posts'
import { Title } from './components/Title'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[800]
    }
  }
})

export const App: React.VFC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header/>
        <Container>
          <Title/>
          <Posts/>
        </Container>
      </ThemeProvider>
    </div>
  )
}
