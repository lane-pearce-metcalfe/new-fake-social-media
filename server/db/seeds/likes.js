export async function seed(knex) {
  await knex('posts').del()

  await knex('posts').insert([
    {
      UserId: 2,
      PostId: 1,
    },
    {
      UserId: 3,
      PostId: 1,
    },
    {
      UserId: 1,
      PostId: 2,
    },
    {
      UserId: 1,
      PostId: 3,
    },
    {
      UserId: 3,
      PostId: 3,
    },
    {
      UserId: 4,
      PostId: 3,
    },
  ])
}
