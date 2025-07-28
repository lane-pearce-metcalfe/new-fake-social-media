export async function seed(knex) {
  const seedNames = [
    'userSettings',
    'userProfile',
    'messageReactions',
    'messages',
    'conversationParticipants',
    'conversations',
    'mentions',
    'follows',
    'likes',
    'comments',
    'posts',
    'users',
  ]

  for (const name of seedNames) {
    await knex(name).del()
  }
}
