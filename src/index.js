import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import '@babel/polyfill'

import App from './App'

const container = document.getElementById('app')
const root = createRoot(container)

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 2000)
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
