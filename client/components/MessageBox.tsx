import { Message } from '#models'
import { useGetUserByAuth0Sub, useGetUserById } from '../hooks/useUsers'
import {
  useGetConversationMessages,
  useSendMessage,
} from '../hooks/useMessages'
import { useParams } from 'react-router-dom'
import '../styles/messageBox.css'
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'

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
  const [message, setMessage] = useState('')

  const { id } = useParams()

  const { user } = useAuth0()

  const { data: userData, isLoading: userLoading } = useGetUserByAuth0Sub(
    user?.sub,
  )

  const { data: conversationData } = useGetConversationMessages(Number(id))

  const sendMessage = useSendMessage()

  function handleSendMessage() {
    sendMessage.mutate({
      SenderId: Number(userData.Id),
      ConversationId: Number(id),
      MessageType: 'text',
      Body: message,
      CreatedAt: 'test time',
      EditedAt: null,
      IsDeleted: false,
    })
  }

  if (!conversationData || userLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="messageContainer">
      {conversationData.map((message: Message, i: number) => (
        <MessageBubble message={message} key={`Message ${i}`} />
      ))}
      {!userData ? null : (
        <input
          type="text"
          placeholder="Enter message here..."
          className="messageInput"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage()
            }
          }}
        />
      )}
    </div>
  )
}
