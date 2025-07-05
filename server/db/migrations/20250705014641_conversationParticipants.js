/**
/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('conversationParticipants', (table) => {
    table.increments('Id')
    table
      .integer('UserId')
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
    table.string('JoinedAt')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('conversationParticipants')
}
