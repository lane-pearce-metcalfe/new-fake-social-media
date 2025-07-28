export async function seed(knex) {
  await knex('userSettings').del()
  await knex('userProfile').del()
  await knex('messageReactions').del()
  await knex('messages').del()
  await knex('conversationParticipants').del()
  await knex('conversations').del()
  await knex('mentions').del()
  await knex('follows').del()
  await knex('likes').del()
  await knex('comments').del()
  await knex('posts').del()
  await knex('users').del()

  await knex('users').insert([
    {
      Id: 1,
      UserName: 'Test UserName 1',
      FullName: 'Test FullName 1',
      Email: 'testEmailOne@gmail.com',
      PfpUrl:
        'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg',
      UserSince: 'Test Date 1',
      Auth0Sub: 'Auth0|1',
    },
    {
      Id: 2,
      UserName: 'Test UserName 2',
      FullName: 'Test FullName 2',
      Email: 'testEmailTwo@gmail.com',
      PfpUrl:
        'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg',
      UserSince: 'Test Date 2',
      Auth0Sub: 'Auth0|2',
    },
    {
      Id: 3,
      UserName: 'Test UserName 3',
      FullName: 'Test FullName 3',
      Email: 'testEmailThree@gmail.com',
      PfpUrl:
        'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg',
      UserSince: 'Test Date 3',
      Auth0Sub: 'Auth0|3',
    },
    {
      Id: 4,
      UserName: 'Test UserName 4',
      FullName: 'Test FullName 4',
      Email: 'testEmailFour@gmail.com',
      PfpUrl:
        'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg',
      UserSince: 'Test Date 4',
      Auth0Sub: 'Auth0|4',
    },
    {
      Id: 5,
      UserName: 'Test UserName 5',
      FullName: 'Test FullName 5',
      Email: 'testEmailFive@gmail.com',
      PfpUrl:
        'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg',
      UserSince: 'Test Date 5',
      Auth0Sub: 'Auth0|5',
    },
  ])
}
