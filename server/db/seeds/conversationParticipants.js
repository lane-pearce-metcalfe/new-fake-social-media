export async function seed(knex) {
  await knex('conversationParticipants').del()

  await knex('conversationParticipants').insert([
    {
      Id: 1,
      UserId: 1,
      ConversationId: 1,
      JoinedAt: '2024-06-01T09:05:00Z',
    },
    {
      Id: 2,
      UserId: 2,
      ConversationId: 1,
      JoinedAt: '2024-06-01T09:05:30Z',
    },
    {
      Id: 3,
      UserId: 3,
      ConversationId: 2,
      JoinedAt: '2024-06-02T10:35:00Z',
    },
    {
      Id: 4,
      UserId: 4,
      ConversationId: 2,
      JoinedAt: '2024-06-02T10:35:15Z',
    },
    {
      Id: 5,
      UserId: 1,
      ConversationId: 3,
      JoinedAt: '2024-06-03T14:01:00Z',
    },
    {
      Id: 6,
      UserId: 2,
      ConversationId: 3,
      JoinedAt: '2024-06-03T14:01:15Z',
    },
    {
      Id: 7,
      UserId: 3,
      ConversationId: 3,
      JoinedAt: '2024-06-03T14:01:30Z',
    },
    {
      Id: 8,
      UserId: 2,
      ConversationId: 4,
      JoinedAt: '2024-06-04T20:16:00Z',
    },
    {
      Id: 9,
      UserId: 4,
      ConversationId: 4,
      JoinedAt: '2024-06-04T20:16:20Z',
    },
    {
      Id: 10,
      UserId: 5,
      ConversationId: 4,
      JoinedAt: '2024-06-04T20:16:40Z',
    },
    {
      Id: 11,
      UserId: 1,
      ConversationId: 5,
      JoinedAt: '2024-06-05T08:46:00Z',
    },
    {
      Id: 12,
      UserId: 3,
      ConversationId: 5,
      JoinedAt: '2024-06-05T08:46:20Z',
    },
    {
      Id: 13,
      UserId: 5,
      ConversationId: 5,
      JoinedAt: '2024-06-05T08:46:40Z',
    },
  ])
}
