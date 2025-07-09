import { PostId } from './post'
import { UserId } from './user'

export type CommentId = number

export interface AddComment {
  UserId: UserId
  Comment: string
  PostId: PostId
  SentAt: string
}

export interface Comment extends AddComment {
  Id: CommentId
}
