import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, Admin, Contact, Dashboard, Error404, Home, Login, SignUp } from './pages'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { AuthLayout, SessionLayout } from './component/index.js'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/login',
        element: <AuthLayout authentication={false}><Login /></AuthLayout>
      },
      {
        path: '/SignUp',
        element: <AuthLayout authentication={false}><SignUp /></AuthLayout>
      },
    ]
  },
  {
    path: '/admin',
    element: (
      <AuthLayout authentication>
        <Admin />
      </AuthLayout>
    ),
    children: [
      {
        // path: '/',  // This is a Error
        path: '',  // This is now a relative path, it will match '/admin'
        element: <Dashboard />
      },
      {
        path: 'Profile',
        element: <Home />
      },
      {
        path: 'AddPage',
        element: <Home />
      },
      {
        path: 'AddPost',
        element: <Home />
      },
    ],
    errorElement: <Error404 />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <SessionLayout>
        <RouterProvider router={router} />
      </SessionLayout>
    </Provider>
  </StrictMode>,
)
