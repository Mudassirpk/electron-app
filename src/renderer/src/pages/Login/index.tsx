import { FormEvent, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

function index(): React.ReactNode {
  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  async function handleSubmit(e: FormEvent): Promise<void> {
    e.preventDefault()
    console.log('context: ', window.context)
    const resposne = await window.context.login(loginData.email, loginData.password)

    console.log('res: ', resposne)
    if (resposne) {
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
      <button type="submit">Login</button>
    </form>
  )
}

export default index
