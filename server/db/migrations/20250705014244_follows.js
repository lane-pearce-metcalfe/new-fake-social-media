/**
/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('follows', (table) => {
    table
      .integer('UserId')
      .unsigned()
      .notNullable()
      .references('Id')
      .inTable('users')
    table
      .integer('FollowedUserId')
      .unsigned()
      .notNullable()
      .references('Id')
      .inTable('users')
    table.string('FollowedAt')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('follows')
}
