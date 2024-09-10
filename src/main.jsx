import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {About, Admin, Contact, Error404, Home, Login, SignUp} from './pages'

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
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/SignUp',
        element: <SignUp/>
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
