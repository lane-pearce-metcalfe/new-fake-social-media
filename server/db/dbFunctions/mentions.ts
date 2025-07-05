import db from '../connection.ts'

export async function getMentionsOnPost(PostId: number) {
  const mentions = await db('mentions').where({ PostId }).select()
  return mentions
}
