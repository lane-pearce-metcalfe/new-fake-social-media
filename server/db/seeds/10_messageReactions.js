export async function seed(knex) {
  await knex('messageReactions').del()

  await knex('messageReactions').insert([
    // Reactions to messages in private conversation 1
    {
      Id: 1,
      UserId: 2,
      MessageId: 1, // User 1's message
      Emoji: 'thumbs_up',
    },
    {
      Id: 2,
      UserId: 1,
      MessageId: 2, // User 2's message
      Emoji: 'smile',
    },

    // Reaction to message in private conversation 2
    {
      Id: 3,
      UserId: 4,
      MessageId: 3, // User 3's message
      Emoji: 'thinking_face',
    },

    // Group conversation: Project Alpha
    {
      Id: 4,
      UserId: 3,
      MessageId: 5, // User 2's message
      Emoji: 'fire',
    },
    {
      Id: 5,
      UserId: 1,
      MessageId: 7, // User 3's message
      Emoji: 'clap',
    },

    // Weekend Gaming Squad
    {
      Id: 6,
      UserId: 5,
      MessageId: 8, // User 4's message
      Emoji: 'eyes',
    },

    // Study Group
    {
      Id: 7,
      UserId: 3,
      MessageId: 10, // User 1 shared a file
      Emoji: 'file_folder',
    },
    {
      Id: 8,
      UserId: 5,
      MessageId: 11, // User 3's reply
      Emoji: 'raised_hands',
    },
    {
      Id: 9,
      UserId: 1,
      MessageId: 12, // User 5's message
      Emoji: 'question',
    },
  ])
}
