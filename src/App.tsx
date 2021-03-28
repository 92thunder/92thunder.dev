import React from 'react'
import { Header } from './components/Header'
import { Posts } from './components/Posts'

export const App: React.VFC = () => {
  return (
    <div className="App">
      <Header></Header>
      <Posts></Posts>
    </div>
  )
}
