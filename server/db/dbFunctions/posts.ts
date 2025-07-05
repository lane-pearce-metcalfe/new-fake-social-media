import db from '../connection.ts'

export async function getPostById(Id: number) {
  const post = await db('posts').where({ Id }).first()
  return post
}
