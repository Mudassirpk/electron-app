import os from 'os'

export function get_hostname(): string {
  return os.hostname()
}
