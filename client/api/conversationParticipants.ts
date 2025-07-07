import request from 'superagent'

const rootUrl = '/api/v1/conversationParticipants'

export async function getParticipantsByConvoId(convoId: number) {
  const result = await request.get(`${rootUrl}/${convoId}`)
  return result.body
}
