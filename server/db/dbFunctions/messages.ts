import { AddMessage } from '#models'
import db from '../connection.ts'

export async function getMessages(ConversationId: number) {
  const messages = db('messages').where({ ConversationId }).select()
  return messages
}

export async function addMessage(message: AddMessage) {
  await db('messages').insert({ message })
}
