export async function get_hostname(): Promise<string> {
  const hostname = await window.context.get_hostname()
  return hostname
}
