export async function seed(knex) {
  await knex('follows').del()

  await knex('follows').insert([
    {
      UserId: 1,
      FollowedUserId: 2,
      FollowedAt: '2024-06-01T12:00:00Z',
    },
    {
      UserId: 1,
      FollowedUserId: 3,
      FollowedAt: '2024-06-02T14:30:00Z',
    },
    {
      UserId: 2,
      FollowedUserId: 1,
      FollowedAt: '2024-06-03T10:15:00Z',
    },
    {
      UserId: 3,
      FollowedUserId: 4,
      FollowedAt: '2024-06-04T16:45:00Z',
    },
    {
      UserId: 4,
      FollowedUserId: 5,
      FollowedAt: '2024-06-05T09:00:00Z',
    },
    {
      UserId: 5,
      FollowedUserId: 1,
      FollowedAt: '2024-06-06T11:25:00Z',
    },
    {
      UserId: 2,
      FollowedUserId: 5,
      FollowedAt: '2024-06-07T17:40:00Z',
    },
  ])
}
