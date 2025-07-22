import { UserId } from './user'

export interface AddMessage {
  SenderId: UserId
  ConversationId: number
  MessageType: string
  Body: string
  CreatedAt: string
  EditedAt: string | null
  IsDeleted: boolean
}

export interface Message extends AddMessage {
  Id: number
}
