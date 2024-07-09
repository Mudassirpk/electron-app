import { FormEvent, useContext, useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { authContext } from '@renderer/context/auth'

function index(): React.ReactNode {
  const navigate = useNavigate()
  const auth_context = useContext(authContext)

  const [error, setError] = useState<null | string>(null)

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  async function handleSubmit(e: FormEvent): Promise<void> {
    e.preventDefault()
    const response = await window.context.login(loginData.email, loginData.password)
    if (response.error) {
      setError(response.error.message)
    } else {
      auth_context?.setUser(response)
      setError(null)
      navigate('/')
    }
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      Login
      <input
        required
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
        type="email"
        placeholder="email"
      />
      <input
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        required
        type="password"
        placeholder="password"
      />
      {error ? <p className="error">{error}</p> : null}
      <button type="submit">Login</button>
      <Link to={'/signup'}>Sign up</Link>
    </form>
  )
}

export default index
