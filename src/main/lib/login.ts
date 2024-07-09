import { get_user } from '../services/User/user_crud'
import { TUser, TError } from './../../types'

export async function login(email: string, password: string): Promise<TUser | TError | void> {
  const user: TUser | void = await get_user(email)

  if (!user) return { error: { message: 'Invalid email or password' } }
  if (email === user.email && password === user.password) {
    delete user.password
    return user
  } else {
    return { error: { message: 'Invalid email or password' } }
  }
}
