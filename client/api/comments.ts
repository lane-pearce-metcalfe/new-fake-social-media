import { Comment, PostId } from '#models'
import request from 'superagent'

const rootUrl = '/api/v1/comments'

export async function getCommentsByPostId(postId: PostId) {
  const result = await request.get(`${rootUrl}/post/${postId}`)
  return result.body as Comment[]
}
