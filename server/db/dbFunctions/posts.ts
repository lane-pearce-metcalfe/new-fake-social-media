import { Post, PostId, UserId } from '#models'
import db from '../connection.ts'

export async function getPostById(Id: PostId) {
  const post = await db('posts').where({ Id }).first()
  return post as Post
}

export async function getPostsFromUser(UserId: UserId) {
  const posts = await db('posts').where({ UserId }).select()
  return posts as Post[]
}

export async function getAllPosts() {
  const posts = await db('posts').select()
  return posts as Post[]
}
