import { FormEvent, useState } from 'react'

export default function Signup(): React.ReactNode {
  const [user, setUser] = useState({ name: '', email: '', password: '' })
  async function signup(e: FormEvent): Promise<void> {
    e.preventDefault()
    const res = await window.context.add_user(user.name, user.email, user.password)
    console.log('signup res: ', res)
  }
  return (
    <form onSubmit={signup}>
      <input
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        placeholder="name"
        required
      />
      <input
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
        type="email"
        placeholder="name"
      />
      <input
        value={user.password}
        required
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        placeholder="name"
      />
      <button type="submit">Signup</button>
    </form>
  )
}
