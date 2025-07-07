export async function seed(knex) {
  await knex('userProfile').del()

  await knex('userProfile').insert([
    {
      UserId: 1,
      Location: 'Auckland, NZ',
      Description: 'Frontend developer and coffee enthusiast.',
      BirthDate: '1995-08-12',
    },
    {
      UserId: 2,
      Location: 'Wellington, NZ',
      Description: 'Back-end wizard who loves solving tough problems.',
      BirthDate: '1990-11-03',
    },
    {
      UserId: 3,
      Location: 'Christchurch, NZ',
      Description: 'UI/UX designer passionate about clean interfaces.',
      BirthDate: '1998-04-27',
    },
    {
      UserId: 4,
      Location: 'Dunedin, NZ',
      Description: 'Full-stack developer and mountain biker.',
      BirthDate: '1992-02-14',
    },
    {
      UserId: 5,
      Location: 'Hamilton, NZ',
      Description: 'Junior dev learning something new every day!',
      BirthDate: '2000-06-05',
    },
  ])
}
