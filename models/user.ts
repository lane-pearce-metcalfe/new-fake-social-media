export type Auth0Sub = string
export type UserId = number

export interface AddUser {
  UserName: string
  FullName: string
  Email: string
  PfpUrl: string
  UserSince: string
  Auth0Sub: Auth0Sub
}

export interface User extends AddUser {
  Id: UserId
}
