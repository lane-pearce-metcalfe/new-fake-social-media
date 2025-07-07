import request from 'superagent'

const rootUrl = '/api/v1/conversations'

export async function getAllCoversations() {
  const result = await request.get(`${rootUrl}/all`)
  return result.body
}
