import { AddMessage } from '#models'
import request from 'superagent'

const rootUrl = '/api/v1/messages'

export async function getConversationsMessages(convoId: number) {
  const result = await request.get(`${rootUrl}/${convoId}`)
  return result.body
}

export async function addMessage(message: AddMessage) {
  await request.post(`${rootUrl}`).send(message)
}
