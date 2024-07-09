import { login } from '../lib/login'
import { add_user } from './User/user_crud'

export const services = [
  {
    title: 'login',
    service: (
      _,
      email: string,
      password: string
    ): { email: string; password: string; loggedInAt: string } | void => login(email, password)
  },
  {
    title: 'add_user',
    service: (_, name: string, email: string, password: string): Promise<void> =>
      add_user({ name, email, password })
  }
]
