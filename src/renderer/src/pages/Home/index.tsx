import { authContext } from '@renderer/context/auth'
import { useContext, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function index(): React.ReactNode {
  const auth_context = useContext(authContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!auth_context?.user) navigate('/login')
  }, [])

  return (
    <main>
      Home
      {auth_context?.user
        ? `Name: ${auth_context.user.name} Email: ${auth_context.user.email}`
        : null}
      <Link to={'sales'}>Sales</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/signup'}>Signup</Link>
      <Outlet />
    </main>
  )
}

export default index
