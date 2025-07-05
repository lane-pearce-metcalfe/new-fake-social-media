import db from '../connection.ts'

export async function getUsersFollowing(UserId: number) {
  const following = await db('follows').where({ UserId }).select()
  return following
}

export async function getUsersFollowers(FollowedUserId: number) {
  const followers = await db('follows').where({ FollowedUserId }).select()
  return followers
}
