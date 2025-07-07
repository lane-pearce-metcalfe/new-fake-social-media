import request from 'superagent'

const rootUrl = '/api/v1/mentions'

export async function getMentionsOnPost(postId: number) {
  const result = await request.get(`${rootUrl}/${postId}`)
  return result.body
}
