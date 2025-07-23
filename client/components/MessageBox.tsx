import { Message } from '#models'
import { useGetUserById } from '../hooks/useUsers'
import { useGetConversationMessages } from '../hooks/useMessages'
import { useParams } from 'react-router-dom'
import '../styles/messageBox.css'

function MessageBubble({ message }: { message: Message }) {
  const { data: userData } = useGetUserById(Number(message.SenderId))

  if (!userData) {
    return null
  }

  if (message.IsDeleted) return null
  return (
    <div className="messageBubble">
      <img src={userData.PfpUrl} alt="" className="messagePfp" />
      <p>{message.Body}</p>
    </div>
  )
}

export default function MessageBox() {
  const { id } = useParams()

  const { data: conversationData } = useGetConversationMessages(Number(id))

  if (!conversationData) {
    return <p>Loading...</p>
  }

  return (
    <div className="messageContainer">
      {conversationData.map((message: Message, i: number) => (
        <MessageBubble message={message} key={`Message ${i}`} />
      ))}
      <input
        type="text"
        placeholder="Enter message here..."
        className="messageInput"
      />
    </div>
  )
}
