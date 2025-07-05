import db from '../connection.ts'

export async function getAmountOfLikes(PostId: number) {
  const amountOfLikes = await db('likes').where({ PostId }).sum()
  return amountOfLikes
}
