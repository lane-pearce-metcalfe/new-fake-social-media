export async function seed(knex) {
  await knex('conversations').del()

  await knex('conversations').insert([
    {
      Id: 1,
      IsGroup: false,
      Name: null,
      CreatedAt: '2024-06-01T09:00:00Z',
    },
    {
      Id: 2,
      IsGroup: false,
      Name: null,
      CreatedAt: '2024-06-02T10:30:00Z',
    },
    {
      Id: 3,
      IsGroup: true,
      Name: 'Project Alpha',
      CreatedAt: '2024-06-03T14:00:00Z',
    },
    {
      Id: 4,
      IsGroup: true,
      Name: 'Weekend Gaming Squad',
      CreatedAt: '2024-06-04T20:15:00Z',
    },
    {
      Id: 5,
      IsGroup: true,
      Name: 'Study Group',
      CreatedAt: '2024-06-05T08:45:00Z',
    },
  ])
}
