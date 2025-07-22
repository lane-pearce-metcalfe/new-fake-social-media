import { useGetConversationMessages } from '../hooks/useMessages'
import { useParams } from 'react-router-dom'

export default function MessageBox() {
  const { id } = useParams()

  const { data: conversationData } = useGetConversationMessages(Number(id))

  if (!conversationData) {
    return <p>Loading...</p>
  }

  return <p>Testing...</p>
}
