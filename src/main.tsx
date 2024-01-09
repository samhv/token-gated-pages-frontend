import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouteProvider } from "./components/RouteProvider"
import './tailwind-output.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouteProvider>
      <App />
    </RouteProvider>
  </React.StrictMode>,
)
