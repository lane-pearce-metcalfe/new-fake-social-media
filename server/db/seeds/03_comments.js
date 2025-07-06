export async function seed(knex) {
  await knex('comments').del()

  await knex('comments').insert([
    // Comments on Post 1
    {
      Id: 1,
      UserId: 1,
      Comment: 'I would love to go to Canada one day!',
      PostId: 1,
      SentAt: '2024-06-10T08:30:00Z',
    },
    {
      Id: 2,
      UserId: 2,
      Comment: 'Loving the snow!',
      PostId: 1,
      SentAt: '2024-06-10T08:45:00Z',
    },

    // Comments on Post 2
    {
      Id: 3,
      UserId: 3,
      Comment: 'Thats where you vanished to...',
      PostId: 2,
      SentAt: '2024-06-11T10:00:00Z',
    },
    {
      Id: 4,
      UserId: 4,
      Comment: 'Always wanted to go!',
      PostId: 2,
      SentAt: '2024-06-11T10:15:00Z',
    },

    // Comments on Post 3
    {
      Id: 5,
      UserId: 5,
      Comment: 'dwafagwagwag',
      PostId: 3,
      SentAt: '2024-06-12T14:20:00Z',
    },
    {
      Id: 6,
      UserId: 1,
      Comment: '.',
      PostId: 3,
      SentAt: '2024-06-12T14:45:00Z',
    },
    {
      Id: 7,
      UserId: 2,
      Comment: 'wdDWJADIWAJDjwads',
      PostId: 3,
      SentAt: '2024-06-12T15:00:00Z',
    },
  ])
}
