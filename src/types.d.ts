export type TUser = {
  id?: string
  name: string
  email: string
  password?: string
  created_at?: string
}

export type TError = {
  error: {
    message: string
  }
}
