import request from 'superagent'

const rootUrl = '/api/v1/follows'

export async function getUsersFollowCounts(userId: number) {
  const follows = await request.get(`${rootUrl}/following/${userId}`)
  const followers = await request.get(`${rootUrl}/followers/${userId}`)
  return {
    follows: follows.body,
    followers: followers.body,
  }
}

export async function getRelationship(userId: number, followedUserId: number) {
  const result = await request.get(
    `${rootUrl}/relationship/${userId}/${followedUserId}`,
  )
  return result.body
}

export async function followUser(userId: number, followedUserId: number) {
  await request.post(`${rootUrl}/follow/${userId}/${followedUserId}`)
  return { success: true }
}

export async function unfollowUser(userId: number, followedUserId: number) {
  await request.delete(`${rootUrl}/unfollow/${userId}/${followedUserId}`)
  return { success: true }
}
