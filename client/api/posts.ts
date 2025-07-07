import request from 'superagent'

const rootUrl = '/api/v1/comments'

export async function getCommentsByPostId(postId: number) {
  const result = await request.get(`${rootUrl}/post/${postId}`)
  return result.body
}
