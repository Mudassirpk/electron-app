const creds = {
  email: 'ms@gmail.com',
  password: 'abc123'
}

export function login(
  email: string,
  password: string
): { email: string; password: string; loggedInAt: string } | void {
  console.log(email, ' : ', password)
  if (email === creds.email && password === creds.password) {
    return {
      ...creds,
      loggedInAt: new Date().toString()
    }
  }
}
