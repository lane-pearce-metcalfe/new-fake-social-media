import request from 'superagent'

const rootUrl = '/api/v1/posts'

export async function getPostsFromUser(userId: number) {
  const result = await request.get(`${rootUrl}/user/${userId}`)
  return result.body
}

export async function getPostById(postId: number) {
  const result = await request.get(`${rootUrl}/post/${postId}`)
  return result.body
}

export async function getAllPosts() {
  const result = await request.get(`${rootUrl}/all`)
  return result.body
}
