import { AddUser, Auth0Sub, User, UserId } from '#models'
import db from '../connection.ts'

export async function getUserById(Id: UserId) {
  const user = await db('users').where({ Id }).first()
  return user as User
}

export async function getUserByAuth0Sub(Auth0Sub: Auth0Sub) {
  const user = await db('users').where({ Auth0Sub }).first()
  return user as User
}

export async function addUser(user: AddUser) {
  await db('users').insert(user)
}
