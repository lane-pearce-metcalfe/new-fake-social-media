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
    const exists = await knex.schema.hasTable(name)
    if (exists) {
      await knex(name).del()
    } else {
      console.log(`Table ${name} might not exist yet`)
    }
  }
}
