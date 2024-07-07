import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('Context isolation must be enabled in browser window')
}

try {
  contextBridge.exposeInMainWorld('context', {
    get_hostname: (...args) => ipcRenderer.invoke('get_hostname', ...args),
    login: (email: string, password: string) => ipcRenderer.invoke('login', email, password)
  })
} catch (error) {
  console.log('error: ', error)
}
