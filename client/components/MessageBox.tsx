import { Message } from '#models'
import {
  useGetUserByAuth0Sub,
  useGetUserById,
  useGetConversationMessages,
  useSendMessage,
  useGetParticipantsByConvoId,
} from '../hooks'
import { useParams } from 'react-router-dom'
import '../styles/messageBox.css'
import { useAuth0 } from '@auth0/auth0-react'
import { useMemo, useState } from 'react'

function MessageBubble({
  message,
  userId,
}: {
  message: Message
  userId: number
}) {
  const { data: userData } = useGetUserById(Number(message.SenderId))

  if (!userData) {
    return null
  }

  if (message.IsDeleted) return null

  if (message.SenderId === userId) {
    return (
      <div className="messageBubble userMessageBubble">
        <img src={userData.PfpUrl} alt="" className="messagePfp" />
        <p>{message.Body}</p>
      </div>
    )
  }

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

  const { data: userData } = useGetUserByAuth0Sub(user?.sub)

  const { data: conversationParticipants } = useGetParticipantsByConvoId(
    Number(id),
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

  const isUserInConvo = useMemo(() => {
    if (!conversationParticipants || !userData) return false

    return conversationParticipants.some(
      (participant) => participant.UserId == userData.Id,
    )
  }, [conversationParticipants, userData])

  if (!conversationData || !userData || !conversationParticipants) {
    return <p>Loading...</p>
  }

  if (!isUserInConvo) {
    return <p>You do not belong in this convo</p>
  }

  return (
    <div className="messageContainer">
      {conversationData.map((message: Message, i: number) => (
        <MessageBubble
          message={message}
          userId={userData.Id}
          key={`Message ${i}`}
        />
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
