import db from '../connection.ts'

export async function getUsersFollowing(UserId: number) {
  const following = await db('follows').where({ UserId }).select()
  return following
}

export async function getUsersFollowers(FollowedUserId: number) {
  const followers = await db('follows').where({ FollowedUserId }).select()
  return followers
}

type Relationship = 'none' | 'following' | 'followed' | 'mutual'

export async function getRelationship(
  UserId: number,
  FollowedUserId: number,
): Promise<Relationship> {
  const following = await db('follows')
    .where({ UserId, FollowedUserId })
    .first()

  const followed = await db('follows')
    .where({ UserId: FollowedUserId, FollowedUserId: UserId })
    .first()

  if (following && followed) {
    return 'mutual'
  } else if (following) {
    return 'following'
  } else if (followed) {
    return 'followed'
  } else {
    return 'none'
  }
}

export async function followUser(UserId: number, FollowedUserId: number) {
  await db('follows').insert({ UserId, FollowedUserId })
}
