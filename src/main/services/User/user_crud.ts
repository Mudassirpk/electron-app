import { TUser } from '../../../types'
import db_client from '../db_connection'

export async function get_user(email: string): Promise<void | TUser> {
  try {
    const users = await db_client.query('SELECT * FROM users WHERE email = $1', [email])
    if (users.rows.length > 0) {
      return users.rows[0]
    }
  } catch (error) {
    console.log('error while getting user: ', error)
  }
}

export async function add_user({
  name,
  email,
  password
}: {
  name: string
  email: string
  password: string
}): Promise<boolean | void> {
  try {
    const res = await db_client.query('INSERT INTO users(name,email,password) VALUES($1,$2,$3)', [
      name,
      email,
      password
    ])
    if (res) {
      return true
    }
  } catch (error) {
    console.log('Error while creating user: ', error)
  }
}
