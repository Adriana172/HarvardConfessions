exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table
      .uuid('id')
      .notNull()
      .primary()
    table.text('content').notNull()
    table
      .uuid('userId')
      .references('users.id')
      .notNull()
    table
      .text('gif')
    table
      .timestamp('createdAt')
      .defaultTo(knex.fn.now())
      .notNull()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
}
