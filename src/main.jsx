import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routers/router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster toastOptions={{className:'relative top-10', style:{zIndex:'110'}}} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
