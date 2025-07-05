import db from '../connection.ts'

export async function getUserById(Id: number) {
  const user = await db('users').where({ Id }).first()
  return user
}
