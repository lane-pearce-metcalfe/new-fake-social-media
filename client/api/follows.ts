import request from 'superagent'

const rootUrl = '/api/v1/follows'

export async function getUsersFollows(userId: number) {
  const result = await request.get(`${rootUrl}/following/${userId}`)
  return result.body
}

export async function getUsersFollowers(userId: number) {
  const result = await request.get(`${rootUrl}/followers/${userId}`)
  return result.body
}
