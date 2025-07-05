/**
/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('userSettings', (table) => {
    table
      .integer('UserId')
      .unsigned()
      .notNullable()
      .references('Id')
      .inTable('users')
    table.string('Theme')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('userSettings')
}
