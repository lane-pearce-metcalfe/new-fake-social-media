/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('Id')
    table.string('UserName')
    table.string('FullName')
    table.string('Email')
    table.string('PfpUrl')
    table.string('UserSince')
    table.string('Auth0Sub')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users')
}
