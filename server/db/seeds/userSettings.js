export async function seed(knex) {
  await knex('userSettings').del()

  await knex('userSettings').insert([
    {
      UserId: 1,
      Theme: 'dark',
    },
    {
      UserId: 2,
      Theme: 'light',
    },
    {
      UserId: 3,
      Theme: 'solarized',
    },
    {
      UserId: 4,
      Theme: 'dark',
    },
    {
      UserId: 5,
      Theme: 'light',
    },
  ])
}
