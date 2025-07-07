import request from 'superagent'

const rootUrl = '/api/v1/users'

export async function getUserById(userId: number) {
  const result = await request.get(`${rootUrl}/id/${userId}`)
  return result.body
}
