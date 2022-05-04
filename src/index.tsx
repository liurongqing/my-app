import React from 'react'
import ReactDOM from 'react-dom/client'
import { RoutersComponent } from './routers'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  // <React.StrictMode>
  <RoutersComponent />
  // </React.StrictMode>
)
