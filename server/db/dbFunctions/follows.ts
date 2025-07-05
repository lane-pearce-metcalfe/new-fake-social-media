import db from '../connection.ts'

export async function getUsersFollowing(UserId: number) {
  const following = await db('follows').where({ UserId }).select()
  return following
}
