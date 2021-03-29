import { Container } from '@material-ui/core'
import React from 'react'
import { Header } from './components/Header'
import { Posts } from './components/Posts'
import { Title } from './components/Title'

export const App: React.VFC = () => {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Title/>
        <Posts/>
      </Container>
    </div>
  )
}
