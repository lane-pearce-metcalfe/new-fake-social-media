import request from 'superagent'

const rootUrl = '/api/v1/users'

export async function getUserById(userId: number) {
  const result = await request.get(`${rootUrl}/id/${userId}`)
  return result.body
}

export async function getUserByAuth0Sub(auth0Sub: string) {
  const result = await request.get(`${rootUrl}/auth0/${auth0Sub}`)
  return result.body
}
