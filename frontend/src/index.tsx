import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCxnhAj3kGW3rzf1ZAgaOJR0n0xMgXpRWk',
  projectId: 'easy-chat-35c14',
  appId: '1:57285489463:web:63aaeae4e0b1d626cea0b2'
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()