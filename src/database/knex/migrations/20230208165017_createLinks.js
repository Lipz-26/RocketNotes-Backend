
exports.up = knex => knex.schema.createTable("links", table => {
  table.increments("id");
  table.text("url").notNullable();/* significado da notNullable, diz que esse campo não pode ser null */

  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");/* Cascade pra excluir a tag quando a nota for excluída */
  
  table.timestamp("created_at").default(knex.fn.now());
  
});

exports.down = knex => knex.schema.dropTable("tags");