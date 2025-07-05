/**
/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('Id')
    table
      .integer('UserId')
      .unsigned()
      .notNullable()
      .references('Id')
      .inTable('users')
    table.string('ImgUrl')
    table.string('CreatedAt')
    table.string('Location')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('posts')
}
