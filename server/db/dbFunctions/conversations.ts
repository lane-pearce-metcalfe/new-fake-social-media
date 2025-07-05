import db from '../connection.ts'

export async function getAllConversations() {
  const conversations = await db('conversations').select()
  return conversations
}
