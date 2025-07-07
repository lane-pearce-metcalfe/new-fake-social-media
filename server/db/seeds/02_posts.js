export async function seed(knex) {
  await knex('posts').del()

  await knex('posts').insert([
    {
      Id: 1,
      UserId: 1,
      ImgUrl:
        'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/514000/514749-whistler.jpg',
      CreatedAt: 'Test date 1',
      Location: 'Whistler, Canada',
    },
    {
      Id: 2,
      UserId: 2,
      ImgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_août_2014_%282%29.jpg/960px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_août_2014_%282%29.jpg',
      CreatedAt: 'Test date 2',
      Location: 'Paris, France',
    },
    {
      Id: 3,
      UserId: 2,
      ImgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXGlU2BC7XqXxhZiEg4Gp_WsCRxQkBsDdog&s',
      CreatedAt: 'Test date 3',
      Location: 'Rome, Italy',
    },
  ])
}
