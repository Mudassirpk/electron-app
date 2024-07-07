declare global {
  interface Window {
    context: {
      get_hostname: () => string
      login: (
        email: string,
        password: string
      ) => { email: string; password: string; loggedInAt: string } | void
    }
  }
}
