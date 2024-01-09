import React from 'react'
import ReactDOM from 'react-dom/client'
import { WagmiProvider } from 'wagmi' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import { RouteProvider } from "./components/RouteProvider"
import './tailwind-output.css'
import { config } from '../config' 

const queryClient = new QueryClient() 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouteProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>  
          <App />
        </QueryClientProvider>
      </WagmiProvider>
    </RouteProvider>
  </React.StrictMode>,
)
