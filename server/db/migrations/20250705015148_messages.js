/**
/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('messages', (table) => {
    table.increments('Id')
    table
      .integer('SenderId')
      .unsigned()
      .notNullable()
      .references('Id')
      .inTable('users')
    table
      .integer('ConversationId')
      .unsigned()
      .notNullable()
      .references('Id')
      .inTable('conversations')
    table.string('MessageType')
    table.string('CreatedAt')
    table.string('EditedAt').nullable()
    table.boolean('IsDeleted')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('messages')
}
