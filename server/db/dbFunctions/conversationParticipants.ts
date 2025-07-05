import db from '../connection.ts'

export async function getConversationParticipants(ConversationId: number) {
  const participants = await db('conversationParticipants')
    .where({ ConversationId })
    .first()
  return participants
}
