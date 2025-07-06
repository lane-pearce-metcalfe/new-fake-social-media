export async function seed(knex) {
  await knex('messages').del()

  await knex('messages').insert([
    // Conversation 1: Private (User 1 & User 2)
    {
      Id: 1,
      SenderId: 1,
      ConversationId: 1,
      MessageType: 'text',
      Body: 'Hey! How’s your day going?',
      CreatedAt: '2024-06-15T08:00:00Z',
      EditedAt: null,
      IsDeleted: false,
    },
    {
      Id: 2,
      SenderId: 2,
      ConversationId: 1,
      MessageType: 'text',
      Body: 'Pretty good, just working on the project. You?',
      CreatedAt: '2024-06-15T08:01:00Z',
      EditedAt: null,
      IsDeleted: false,
    },

    // Conversation 2: Private (User 3 & User 4)
    {
      Id: 3,
      SenderId: 3,
      ConversationId: 2,
      MessageType: 'text',
      Body: 'Did you check out that article I sent?',
      CreatedAt: '2024-06-15T10:00:00Z',
      EditedAt: null,
      IsDeleted: false,
    },
    {
      Id: 4,
      SenderId: 4,
      ConversationId: 2,
      MessageType: 'text',
      Body: 'Yeah, it was really helpful! Thanks.',
      CreatedAt: '2024-06-15T10:01:30Z',
      EditedAt: null,
      IsDeleted: false,
    },

    // Conversation 3: Group - Project Alpha (User 1, 2, 3)
    {
      Id: 5,
      SenderId: 2,
      ConversationId: 3,
      MessageType: 'text',
      Body: 'Let’s finalize the layout by Friday.',
      CreatedAt: '2024-06-15T12:00:00Z',
      EditedAt: null,
      IsDeleted: false,
    },
    {
      Id: 6,
      SenderId: 1,
      ConversationId: 3,
      MessageType: 'image',
      Body: '[Image of layout draft]',
      CreatedAt: '2024-06-15T12:03:00Z',
      EditedAt: null,
      IsDeleted: false,
    },
    {
      Id: 7,
      SenderId: 3,
      ConversationId: 3,
      MessageType: 'text',
      Body: 'Updated the docs, check the latest section.',
      CreatedAt: '2024-06-15T12:05:00Z',
      EditedAt: '2024-06-15T12:10:00Z',
      IsDeleted: false,
    },

    // Conversation 4: Group - Weekend Gaming Squad (User 2, 4, 5)
    {
      Id: 8,
      SenderId: 4,
      ConversationId: 4,
      MessageType: 'text',
      Body: 'Who’s on for tonight’s game?',
      CreatedAt: '2024-06-16T18:00:00Z',
      EditedAt: null,
      IsDeleted: false,
    },
    {
      Id: 9,
      SenderId: 5,
      ConversationId: 4,
      MessageType: 'text',
      Body: 'Count me in! Let’s gooo 🚀',
      CreatedAt: '2024-06-16T18:01:00Z',
      EditedAt: null,
      IsDeleted: true,
    },

    // Conversation 5: Group - Study Group (User 1, 3, 5)
    {
      Id: 10,
      SenderId: 1,
      ConversationId: 5,
      MessageType: 'file',
      Body: 'Attached: Week3_Notes.pdf',
      CreatedAt: '2024-06-17T09:00:00Z',
      EditedAt: null,
      IsDeleted: false,
    },
    {
      Id: 11,
      SenderId: 3,
      ConversationId: 5,
      MessageType: 'text',
      Body: 'Thanks! I was just looking for this.',
      CreatedAt: '2024-06-17T09:02:30Z',
      EditedAt: null,
      IsDeleted: false,
    },
    {
      Id: 12,
      SenderId: 5,
      ConversationId: 5,
      MessageType: 'text',
      Body: 'Do we have a quiz next week?',
      CreatedAt: '2024-06-17T09:04:00Z',
      EditedAt: null,
      IsDeleted: false,
    },
  ])
}
