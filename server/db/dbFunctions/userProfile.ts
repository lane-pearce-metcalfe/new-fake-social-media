import db from '../connection.ts'

export async function getUsersProfileInfo(UserId: number) {
  const profileInfo = await db('userProfile').where({ UserId }).first()
  return profileInfo
}
