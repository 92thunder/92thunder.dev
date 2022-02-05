import { Container, createTheme, ThemeProvider } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import React, { useMemo } from 'react'
import { Header } from './components/Header'
import { Posts } from './components/Posts'
import { SignIn } from './components/SignIn'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { EditPost } from './components/EditPost'
import Cookies from 'js-cookie'

export const App: React.VFC = () => {
  const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: grey[900]
      }
    }
  })
  const sessionId = useMemo(() => {
    const sessionId = Cookies.get('session_id')
    return sessionId
  }, [])
  return ( 
    <div className="App">
      { sessionId ? (
        <ThemeProvider theme={theme}>
          <Router>
            <Switch >
              <Route path='/posts/:postId'>
                <EditPost/>
              </Route>
              <Route path="/">
                <Header/>
                <Container>
                  <Posts/>
                </Container>
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      )
        : (<SignIn/>)
      }
    </div>
  )
}
