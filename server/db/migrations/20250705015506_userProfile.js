/**
/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('userProfile', (table) => {
    table
      .integer('UserId')
      .unsigned()
      .notNullable()
      .references('Id')
      .inTable('users')
    table.string('Location')
    table.string('Description')
    table.string('BirthDate')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('userProfile')
}
