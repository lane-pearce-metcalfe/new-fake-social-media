import { Message } from '#models'
import { useGetConversationMessages } from '../hooks/useMessages'
import { useParams } from 'react-router-dom'

function MessageBubble({ message }: { message: Message }) {
  if (message.IsDeleted) return null
  return <p>{message.Body}</p>
}

export default function MessageBox() {
  const { id } = useParams()

  const { data: conversationData } = useGetConversationMessages(Number(id))

  if (!conversationData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {conversationData.map((message: Message, i: number) => (
        <MessageBubble message={message} key={`Message ${i}`} />
      ))}
    </div>
  )
}
