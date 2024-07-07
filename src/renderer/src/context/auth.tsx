import React, { SetStateAction, useState } from 'react'

export type TUser = {
  email: string
  password: string
  loggedInAt: string
}

type TAuthContext = {
  user: TUser | null
  setUser: React.Dispatch<SetStateAction<TUser | null>>
}

export const authContext = React.createContext<TAuthContext | null>(null)

export default function AuthProvider({ children }: { children: React.ReactNode }): React.ReactNode {
  const [user, setUser] = useState<TUser | null>(null)

  const values = {
    user,
    setUser
  }

  return <authContext.Provider value={values}>{children}</authContext.Provider>
}
