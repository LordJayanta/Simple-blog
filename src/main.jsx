import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Admin, Error404, Home} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/',
        element: <Home/>
      },
    ]
  },
  {
    path: 'admin',
    element: <Admin/>,
    errorElement: <Error404/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
