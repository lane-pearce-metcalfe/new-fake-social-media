import db from '../connection.ts'

export async function getMessageReactions(MessageId: number) {
  const reactions = await db('messageReactions').where({ MessageId }).select()
  return reactions
}
