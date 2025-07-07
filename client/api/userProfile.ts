import request from 'superagent'

const rootUrl = '/api/v1/userProfiles'

export async function getUserProfileInfo(userId: number) {
  const result = await request.get(`${rootUrl}/${userId}`)
  return result.body
}
