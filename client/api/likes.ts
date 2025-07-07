import request from 'superagent'

const rootUrl = '/api/v1/likes'

export async function getPostsLikes(postId: number) {
  const result = await request.get(`${rootUrl}/${postId}`)
  return result.body
}
