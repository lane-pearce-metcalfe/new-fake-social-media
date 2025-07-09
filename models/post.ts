import { UserId } from './user'

export type PostId = number

export interface AddPost {
  UserId: UserId
  ImgUrl: string
  CreatedAt: string
  Location: string
}

export interface Post extends AddPost {
  Id: PostId
}
