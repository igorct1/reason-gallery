import { api } from './unsplash'

export async function getUserInfo(username: string) {
  const user = await api(`/users/${username}`)
  const response = await user.json()

  return response
}
