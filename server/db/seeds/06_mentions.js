export async function seed(knex) {
  await knex('mentions').del()

  await knex('mentions').insert([
    {
      UserId: 3,
      PostId: 1,
    },
    {
      UserId: 4,
      PostId: 2,
    },
  ])
}
