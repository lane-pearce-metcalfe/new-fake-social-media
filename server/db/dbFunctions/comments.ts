import { PostId } from '#models'
import db from '../connection.ts'

export async function getCommentsOnPost(PostId: PostId) {
  const comments = await db('comments').where({ PostId }).select()
  return comments as Comment[]
}
