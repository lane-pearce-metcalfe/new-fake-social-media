import db from '../connection.ts'

export async function getCommentsOnPost(PostId: number) {
  const comments = await db('comments').where({ PostId }).select()
  return comments
}
