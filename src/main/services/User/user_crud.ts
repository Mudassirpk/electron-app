import { db_client } from '../db_connection'

export async function get_user(): Promise<void | object> {
  try {
    await db_client.connect()
    const users = await db_client.query('SELECT * FROM users')
    console.log(users)
    if (users) return users
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
}) {
  try {
    await db_client.connect()
    const res = await db_client.query('INSERT INTO users(name,email,password) VALUES($1,$2,$3)', [
      name,
      email,
      password
    ])

    console.log('res: ', res)
  } catch (error) {
    console.log('Error while creating user: ', error)
  }
}
