import db from '../connection.ts'

export async function getAmountOfLikes(PostId: number) {
  const amountOfLikes = await db('likes')
    .where({ PostId })
    .count<{ count: string }>('UserId as count')
    .first()
  return Number(amountOfLikes?.count ?? 0)
}
