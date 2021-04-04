import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import { Post } from './components/Post'
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
          <Router>
            <Switch>
              <Route path='/posts/:postId'>
                <Post/>
              </Route>
              <Route path="/">
                <Title/>
                <Posts/>
              </Route>
            </Switch>
          </Router>
        </Container>
      </ThemeProvider>
    </div>
  )
}
