import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './features/apiContext/apiContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppProvider>
          <App />
        </AppProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
