import { login } from '../lib/login'

export const services = [
  {
    title: 'login',
    service: (
      _,
      email: string,
      password: string
    ): { email: string; password: string; loggedInAt: string } | void => login(email, password)
  }
]
