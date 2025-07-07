import request from 'superagent'

const rootUrl = '/api/v1/messageReactions'

export async function getMessageReactions(messageId: number) {
  const result = await request.get(`${rootUrl}/${messageId}`)
  return result.body
}
