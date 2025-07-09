import db from '../connection.ts'

export async function getUserById(Id: number) {
  const user = await db('users').where({ Id }).first()
  return user
}

export async function getUserByAuth0Sub(Auth0Sub: string) {
  const user = await db('users').where({ Auth0Sub }).first()
  return user
}

export async function addUser(user) {
  await db('users').insert(user)
}
