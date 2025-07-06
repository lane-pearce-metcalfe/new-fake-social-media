export async function seed(knex) {
  await knex('likes').del()

  await knex('likes').insert([
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
