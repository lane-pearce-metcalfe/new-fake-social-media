import { Post, PostId, UserId } from '#models'
import request from 'superagent'

const rootUrl = '/api/v1/posts'

export async function getPostsFromUser(userId: UserId) {
  const result = await request.get(`${rootUrl}/user/${userId}`)
  return result.body as Post[]
}

export async function getPostById(postId: PostId) {
  const result = await request.get(`${rootUrl}/post/${postId}`)
  return result.body as Post
}

export async function getAllPosts() {
  const result = await request.get(`${rootUrl}/all`)
  return result.body as Post[]
}
