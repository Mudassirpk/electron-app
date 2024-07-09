import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './app.css'
import Home from './pages/Home'
import Sales from './pages/Home/Sales'
import Login from './pages/Login'
import AuthProvider from './context/auth'
import Signup from './pages/Signup'

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <p>Opps</p>,
      children: [
        {
          path: 'sales',
          element: <Sales />,
          errorElement: <p>Opps</p>
        }
      ]
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/login',
      element: <Login />
    }
  ])

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
