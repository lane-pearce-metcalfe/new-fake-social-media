import { Message } from '#models'
import { useGetConversationMessages } from '../hooks/useMessages'
import { useParams } from 'react-router-dom'

export default function MessageBox() {
  const { id } = useParams()

  const { data: conversationData } = useGetConversationMessages(Number(id))

  if (!conversationData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {conversationData.map((message: Message, i: number) => {
        if (message.IsDeleted) return null
        return <p key={`Message ${i}`}>{message.Body}</p>
      })}
    </div>
  )
}
