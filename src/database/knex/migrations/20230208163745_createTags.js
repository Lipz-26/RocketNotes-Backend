exports.up = knex => knex.schema.createTable("tags", table => {
  table.increments("id");
  table.text("name").notNullable();/* significado da notNullable, diz que esse campo não pode ser null */
  
  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");/* Cascade pra excluir a tag quando a nota for excluida */
  table.integer("user_id").references("id").inTable("users");

  
});

exports.down = knex => knex.schema.dropTable("tags");