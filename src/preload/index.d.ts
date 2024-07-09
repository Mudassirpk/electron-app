import { TUser } from '@renderer/context/auth'

declare global {
  interface Window {
    context: {
      get_hostname: () => string
      login: (email: string, password: string) => TUser | TError | void
    }
  }
}

export {}
