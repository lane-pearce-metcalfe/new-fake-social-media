import db from '../connection.ts'

export async function getPostById(Id: number) {
  const post = await db('posts').where({ Id }).first()
  return post
}

export async function getPostsFromUser(UserId: number) {
  const posts = await db('posts').where({ UserId }).select()
  return posts
}

export async function getAllPosts() {
  const posts = await db('posts').select()
  return posts
}
