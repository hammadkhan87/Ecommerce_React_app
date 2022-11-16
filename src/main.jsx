import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import store from '../App/Store'
import{Toaster} from "react-hot-toast"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider   store={store}>
      <Toaster position='top-center' reverseOrder={false}/>
    <App />
    </Provider>
  </React.StrictMode>
)
