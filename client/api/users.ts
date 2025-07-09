import { AddUser, Auth0Sub, UserId } from '#models'
import request from 'superagent'

const rootUrl = '/api/v1/users'

export async function getUserById(userId: UserId | undefined) {
  const result = await request.get(`${rootUrl}/id/${userId}`)
  return result.body
}

export async function getUserByAuth0Sub(auth0Sub: Auth0Sub | undefined) {
  const result = await request.get(`${rootUrl}/auth0/${auth0Sub}`)
  return result.body
}

export async function addUser(user: AddUser) {
  await request.post(`${rootUrl}`).send(user)
}
