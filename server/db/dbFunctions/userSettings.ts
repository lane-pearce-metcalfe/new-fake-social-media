import db from '../connection.ts'

export async function getUsersTheme(UserId: number) {
  const userTheme = await db('userSettings').where({ UserId }).select('Theme')
  return userTheme
}
