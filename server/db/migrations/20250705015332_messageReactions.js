/**
/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('messageReactions', (table) => {
    table.increments('Id')
    table
      .integer('UserId')
      .unsigned()
      .notNullable()
      .references('Id')
      .inTable('users')
    table
      .integer('MessageId')
      .unsigned()
      .notNullable()
      .references('Id')
      .inTable('messages')
    table.string('Emoji')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('messageReactions')
}
