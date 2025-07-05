/**
/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('Id')
    table
      .integer('UserId')
      .unsigned()
      .notNullable()
      .references('Id')
      .inTable('users')
    table.string('Comment').notNullable()
    table
      .integer('PostId')
      .unsigned()
      .notNullable()
      .references('Id')
      .inTable('posts')
    table.string('SentAt')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('comments')
}
