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
    <div>
      Home
      {auth_context?.user ? `logged in at: ${auth_context?.user.loggedInAt}` : null}
      <Link to={'sales'}>Sales</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/signup'}>Signup</Link>
      <Outlet />
    </div>
  )
}

export default index
