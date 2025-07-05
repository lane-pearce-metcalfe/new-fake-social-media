/**
/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('likes', (table) => {
    table
      .integer('UserId')
      .unsigned()
      .notNullable()
      .references('Id')
      .inTable('users')
    table
      .integer('PostId')
      .unsigned()
      .notNullable()
      .references('Id')
      .inTable('posts')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('likes')
}
