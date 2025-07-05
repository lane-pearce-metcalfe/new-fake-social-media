/**
/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('conversations', (table) => {
    table.increments('Id')
    table.boolean('IsGroup')
    table.string('Name').nullable()
    table.string('CreatedAt')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('conversations')
}
