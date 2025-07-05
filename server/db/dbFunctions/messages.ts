import db from '../connection.ts'

export async function getConversationParticipants(ConversationId: number) {
  const messages = db('messages').where({ ConversationId }).select()
  return messages
}
