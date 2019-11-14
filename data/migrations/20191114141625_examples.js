exports.up = function(knex) {
    return knex.schema.createTable('examples', examples => {
      examples.increments();
  
      examples
        .string('topic', 128)
        .notNullable();

      examples
        .string('content', 128)
        .notNullable();
    });
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('examples');
};