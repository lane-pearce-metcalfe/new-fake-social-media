import request from 'superagent'

const rootUrl = '/api/v1/userSettings'

export async function getUsersTheme(userId: number) {
  const result = await request.get(`${rootUrl}/theme/${userId}`)
  return result.body
}
